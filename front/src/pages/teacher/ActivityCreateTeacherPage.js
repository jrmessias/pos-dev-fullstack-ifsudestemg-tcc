import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Icon from "@/components/Icon.js";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";
import { Switch } from "@/components/ui/switch.jsx";
import { Toaster } from "@/components/ui/sonner.jsx";
import { disciplineIndex } from "@/services/disciplineService.js";
import { activityStore, activityUploadQuestionImage } from "@/services/activityService.js";
import { activitySchema } from "@/validators/activitySchema.js";

function createQuizQuestion() {
    return {
        name: "",
        text: "",
        image: "",
        type: "choose",
        answers: [
            { title: "A", text: "", correct: false },
            { title: "B", text: "", correct: false },
            { title: "C", text: "", correct: false },
            { title: "D", text: "", correct: false },
        ],
    };
}

function createTrueFalseAnswers() {
    return [
        { title: "Verdadeiro", text: "Verdadeiro", correct: false },
        { title: "Falso", text: "Falso", correct: false },
    ];
}

export default function ActivityCreateTeacherPage() {
    const navigate = useNavigate();
    const [loadingDisciplines, setLoadingDisciplines] = useState(true);
    const [disciplines, setDisciplines] = useState([]);
    const [uploadingQuestions, setUploadingQuestions] = useState({});

    const {
        register,
        control,
        handleSubmit,
        setValue,
        watch,
        getValues,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        resolver: zodResolver(activitySchema),
        mode: "onChange",
        reValidateMode: "onChange",
        defaultValues: {
            discipline_id: undefined,
            name: "",
            text: "",
            active: false,
            time_limit: "",
            questions: [createQuizQuestion()],
        },
    });

    const { fields: questionFields, append, remove } = useFieldArray({
        control,
        name: "questions",
    });

    const questions = watch("questions") || [];
    const activeValue = watch("active");

    useEffect(() => {
        const loadDisciplines = async () => {
            try {
                setLoadingDisciplines(true);
                const response = await disciplineIndex();
                setDisciplines((response.data || []).filter((discipline) => discipline.active === 1 || discipline.active === true));
            } catch {
                toast.error("Não foi possível carregar as disciplinas.", { position: "top-center" });
            } finally {
                setLoadingDisciplines(false);
            }
        };

        loadDisciplines();
    }, []);

    const addQuestion = () => {
        append(createQuizQuestion());
    };

    const removeQuestion = (questionIndex) => {
        if (questions.length === 1) {
            toast.error("A atividade deve ter ao menos uma pergunta.", { position: "top-center" });
            return;
        }
        remove(questionIndex);
    };

    const setQuestionType = (questionIndex, type) => {
        setValue(`questions.${questionIndex}.type`, type, { shouldValidate: true, shouldDirty: true });

        if (type === "boolean") {
            setValue(`questions.${questionIndex}.answers`, createTrueFalseAnswers(), {
                shouldValidate: true,
                shouldDirty: true,
            });
            return;
        }

        setValue(`questions.${questionIndex}.answers`, [
            { title: "A", text: "", correct: false },
            { title: "B", text: "", correct: false },
            { title: "C", text: "", correct: false },
            { title: "D", text: "", correct: false },
        ], {
            shouldValidate: true,
            shouldDirty: true,
        });
    };

    const setCorrectAnswer = (questionIndex, answerIndex) => {
        const answers = getValues(`questions.${questionIndex}.answers`) || [];
        const updatedAnswers = answers.map((answer, index) => ({
            ...answer,
            correct: index === answerIndex,
        }));

        setValue(`questions.${questionIndex}.answers`, updatedAnswers, {
            shouldValidate: true,
            shouldDirty: true,
        });
    };

    const addQuizAnswer = (questionIndex) => {
        const answers = getValues(`questions.${questionIndex}.answers`) || [];
        const nextTitle = String.fromCharCode(65 + answers.length);

        const updatedAnswers = [
            ...answers,
            { title: nextTitle, text: "", correct: false },
        ];

        setValue(`questions.${questionIndex}.answers`, updatedAnswers, {
            shouldValidate: true,
            shouldDirty: true,
        });
    };

    const removeQuizAnswer = (questionIndex, answerIndex) => {
        const answers = getValues(`questions.${questionIndex}.answers`) || [];
        if (answers.length <= 4) {
            toast.error("Perguntas do tipo escolha precisam ter ao menos 4 respostas.", { position: "top-center" });
            return;
        }

        const updatedAnswers = answers
            .filter((_, index) => index !== answerIndex)
            .map((answer, index) => ({
                ...answer,
                title: String.fromCharCode(65 + index),
            }));

        if (!updatedAnswers.some((answer) => answer.correct)) {
            updatedAnswers[0].correct = true;
        }

        setValue(`questions.${questionIndex}.answers`, updatedAnswers, {
            shouldValidate: true,
            shouldDirty: true,
        });
    };

    const onSubmit = async (formData) => {
        try {
            const payload = {
                discipline_id: formData.discipline_id,
                name: formData.name,
                text: formData.text?.trim() || undefined,
                active: formData.active,
                time_limit: formData.time_limit,
                questions: formData.questions.map((question) => ({
                    name: question.name,
                    text: question.text?.trim() || undefined,
                    image: question.image?.trim() || undefined,
                    type: question.type,
                    answers: question.answers.map((answer) => ({
                        title: answer.title,
                        text: answer.text,
                        correct: answer.correct,
                    })),
                })),
            };

            const response = await activityStore(payload);
            toast.success(response?.data?.message || "Atividade criada com sucesso.", { position: "top-center" });
            navigate("/teacher/activity");
        } catch (error) {
            const apiMessage = error?.response?.data?.message;
            toast.error(apiMessage || "Não foi possível criar a atividade.", { position: "top-center" });
        }
    };

    const publicApiBase = import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") || "";

    const getQuestionImageUrl = (relativePath) => {
        if (!relativePath) return "";
        if (relativePath.startsWith("http://") || relativePath.startsWith("https://")) {
            return relativePath;
        }
        return `${publicApiBase}${relativePath}`;
    };

    const handleUploadQuestionImage = async (questionIndex, file) => {
        if (!file) return;

        const extension = file.name.split(".").pop()?.toLowerCase();
        if (!["jpg", "jpeg", "png"].includes(extension || "")) {
            toast.error("Selecione um arquivo JPG ou PNG.", { position: "top-center" });
            return;
        }

        try {
            setUploadingQuestions((prev) => ({ ...prev, [questionIndex]: true }));
            const formData = new FormData();
            formData.append("image", file);
            const response = await activityUploadQuestionImage(formData);
            const imagePath = response?.data?.path;

            if (!imagePath) {
                toast.error("Não foi possível obter o caminho da imagem.", { position: "top-center" });
                return;
            }

            setValue(`questions.${questionIndex}.image`, imagePath, {
                shouldValidate: true,
                shouldDirty: true,
            });
            toast.success("Imagem enviada com sucesso.", { position: "top-center" });
        } catch (error) {
            const apiMessage = error?.response?.data?.message;
            toast.error(apiMessage || "Não foi possível enviar a imagem.", { position: "top-center" });
        } finally {
            setUploadingQuestions((prev) => ({ ...prev, [questionIndex]: false }));
        }
    };

    const removeQuestionImage = (questionIndex) => {
        setValue(`questions.${questionIndex}.image`, "", {
            shouldValidate: true,
            shouldDirty: true,
        });
    };

    return (
        <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Nova Atividade</h1>
                    <p className="text-muted-foreground">Crie uma atividade com várias perguntas</p>
                </div>
                <Button variant="outline" className="cursor-pointer" onClick={() => navigate("/teacher/activity")}>Voltar</Button>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-card text-card-foreground rounded-xl border p-6 shadow-sm space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="discipline_id">Disciplina</Label>
                            <Select
                                disabled={loadingDisciplines}
                                value={watch("discipline_id") ? String(watch("discipline_id")) : ""}
                                onValueChange={(value) => setValue("discipline_id", Number(value), {
                                    shouldValidate: true,
                                    shouldDirty: true,
                                })}
                            >
                                <SelectTrigger id="discipline_id" className="w-full">
                                    <SelectValue placeholder={loadingDisciplines ? "Carregando disciplinas..." : "Selecione uma disciplina"} />
                                </SelectTrigger>
                                <SelectContent>
                                    {disciplines.map((discipline) => (
                                        <SelectItem key={discipline.id} value={String(discipline.id)}>{discipline.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.discipline_id && <p className="text-sm text-destructive">{errors.discipline_id.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="name">Nome da atividade</Label>
                            <Input id="name" placeholder="Ex: Revisão Bimestral" {...register("name")} />
                            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="text">Descrição</Label>
                        <Textarea id="text" placeholder="Descreva o objetivo da atividade..." {...register("text")} />
                        {errors.text && <p className="text-sm text-destructive">{errors.text.message}</p>}
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="time_limit">Tempo limite por pergunta</Label>
                            <Select
                                value={watch("time_limit") || ""}
                                onValueChange={(value) => setValue("time_limit", value, {
                                    shouldValidate: true,
                                    shouldDirty: true,
                                })}
                            >
                                <SelectTrigger id="time_limit" className="w-full">
                                    <SelectValue placeholder="Selecione o tempo limite" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="00:00:20">20 segundos</SelectItem>
                                    <SelectItem value="00:00:30">30 segundos</SelectItem>
                                    <SelectItem value="00:01:00">1 minuto</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.time_limit && <p className="text-sm text-destructive">{errors.time_limit.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="active">Status</Label>
                            <div className="flex items-center justify-between rounded-md border px-3 py-2">
                                <span className="text-sm text-muted-foreground">{activeValue ? "Ativa" : "Inativa"}</span>
                                <Switch
                                    id="active"
                                    checked={!!activeValue}
                                    onCheckedChange={(checked) => setValue("active", checked, {
                                        shouldValidate: true,
                                        shouldDirty: true,
                                    })}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Perguntas</h2>
                    <Button type="button" className="cursor-pointer" onClick={addQuestion}>
                        <Icon name="Plus" className="w-4 h-4 mr-2" />
                        Adicionar Pergunta
                    </Button>
                </div>

                {errors.questions?.message && (
                    <p className="text-sm text-destructive">{errors.questions.message}</p>
                )}

                <div className="space-y-4">
                    {questionFields.map((questionField, questionIndex) => {
                        const questionErrors = errors.questions?.[questionIndex];
                        const questionType = questions[questionIndex]?.type || "choose";
                        const answers = questions[questionIndex]?.answers || [];

                        return (
                            <div key={questionField.id} className="bg-card text-card-foreground rounded-xl border p-6 shadow-sm space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold">Pergunta {questionIndex + 1}</h3>
                                    <Button
                                        type="button"
                                        variant="destructive"
                                        size="sm"
                                        className="cursor-pointer"
                                        onClick={() => removeQuestion(questionIndex)}
                                    >
                                        <Icon name="Trash2" className="w-4 h-4 mr-2" />
                                        Remover
                                    </Button>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2 md:col-span-2">
                                        <Label htmlFor={`question-name-${questionIndex}`}>Enunciado</Label>
                                        <Input
                                            id={`question-name-${questionIndex}`}
                                            placeholder="Digite o enunciado da pergunta"
                                            {...register(`questions.${questionIndex}.name`)}
                                        />
                                        {questionErrors?.name && <p className="text-sm text-destructive">{questionErrors.name.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor={`question-type-${questionIndex}`}>Tipo da pergunta</Label>
                                        <Select
                                            value={questionType}
                                            onValueChange={(value) => setQuestionType(questionIndex, value)}
                                        >
                                            <SelectTrigger id={`question-type-${questionIndex}`} className="w-full">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="choose">Quiz</SelectItem>
                                                <SelectItem value="boolean">Verdadeiro ou Falso</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor={`question-image-${questionIndex}`}>Imagem da pergunta</Label>
                                        <Input
                                            id={`question-image-${questionIndex}`}
                                            type="file"
                                            accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                                            disabled={!!uploadingQuestions[questionIndex]}
                                            onChange={(event) => {
                                                const file = event.target.files?.[0];
                                                handleUploadQuestionImage(questionIndex, file);
                                                event.target.value = "";
                                            }}
                                        />
                                        {uploadingQuestions[questionIndex] && (
                                            <p className="text-sm text-muted-foreground">Enviando imagem...</p>
                                        )}
                                        {questions[questionIndex]?.image && (
                                            <div className="space-y-2">
                                                <img
                                                    src={getQuestionImageUrl(questions[questionIndex]?.image)}
                                                    alt={`Imagem da pergunta ${questionIndex + 1}`}
                                                    className="w-full max-h-52 object-cover rounded-md border"
                                                />
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs text-muted-foreground break-all">{questions[questionIndex]?.image}</span>
                                                    <Button
                                                        type="button"
                                                        variant="destructive"
                                                        size="sm"
                                                        className="cursor-pointer"
                                                        onClick={() => removeQuestionImage(questionIndex)}
                                                    >
                                                        Remover Imagem
                                                    </Button>
                                                </div>
                                            </div>
                                        )}
                                        {questionErrors?.image && (
                                            <p className="text-sm text-destructive">{questionErrors.image.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <p className="font-medium">Respostas</p>
                                        {questionType === "choose" && (
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="sm"
                                                className="cursor-pointer"
                                                onClick={() => addQuizAnswer(questionIndex)}
                                            >
                                                <Icon name="Plus" className="w-4 h-4 mr-2" />
                                                Adicionar Resposta
                                            </Button>
                                        )}
                                    </div>

                                    {Array.isArray(questionErrors?.answers) && questionErrors.answers.map((answerError, answerIndex) => (
                                        <div key={`${questionField.id}-err-${answerIndex}`}>
                                            {answerError?.text && <p className="text-sm text-destructive">{answerError.text.message}</p>}
                                        </div>
                                    ))}

                                    {questionErrors?.answers?.message && (
                                        <p className="text-sm text-destructive">{questionErrors.answers.message}</p>
                                    )}

                                    <div className="space-y-2">
                                        {answers.map((answer, answerIndex) => (
                                            <div key={`${questionField.id}-answer-${answerIndex}`} className="grid gap-2 md:grid-cols-[80px_1fr_180px] items-center">
                                                <Input
                                                    value={answer.title}
                                                    disabled
                                                    readOnly
                                                    aria-label={`Titulo da resposta ${answerIndex + 1}`}
                                                />

                                                <Input
                                                    value={answer.text || ""}
                                                    disabled={questionType === "boolean"}
                                                    onChange={(event) => setValue(`questions.${questionIndex}.answers.${answerIndex}.text`, event.target.value, {
                                                        shouldValidate: true,
                                                        shouldDirty: true,
                                                    })}
                                                    placeholder={`Resposta ${answerIndex + 1}`}
                                                />

                                                <div className="flex items-center justify-end gap-2">
                                                    <Button
                                                        type="button"
                                                        variant={answer.correct ? "default" : "outline"}
                                                        size="sm"
                                                        className="cursor-pointer"
                                                        onClick={() => setCorrectAnswer(questionIndex, answerIndex)}
                                                    >
                                                        {answer.correct ? "Correta" : "Marcar Correta"}
                                                    </Button>

                                                    {questionType === "choose" && (
                                                        <Button
                                                            type="button"
                                                            variant="destructive"
                                                            size="icon"
                                                            className="cursor-pointer"
                                                            onClick={() => removeQuizAnswer(questionIndex, answerIndex)}
                                                        >
                                                            <Icon name="Trash2" className="w-4 h-4" />
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="flex justify-end gap-2 pb-4">
                    <Button type="button" variant="outline" className="cursor-pointer" onClick={() => navigate("/teacher/activity")}>
                        Cancelar
                    </Button>
                    <Button type="submit" disabled={!isValid || isSubmitting || loadingDisciplines} className="cursor-pointer">
                        {isSubmitting ? (
                            <>
                                <Icon name="Loader2" className="w-4 h-4 mr-2 animate-spin" />
                                Salvando...
                            </>
                        ) : (
                            "Salvar Atividade"
                        )}
                    </Button>
                </div>
            </form>

            <Toaster richColors />
        </>
    );
}
