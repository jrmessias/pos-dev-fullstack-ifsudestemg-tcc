import { z } from "zod";

const answerSchema = z.object({
    title: z.string().trim().min(1, "Informe o título da resposta").max(45, "Título deve ter no máximo 45 caracteres"),
    text: z.string().trim().min(1, "Informe o texto da resposta").max(45, "Texto deve ter no máximo 45 caracteres"),
    correct: z.boolean(),
});

const questionSchema = z.object({
    name: z.string().trim().min(1, "Informe o enunciado da pergunta").max(255, "Enunciado deve ter no máximo 255 caracteres"),
    text: z.string().trim().max(255, "Caminho da imagem inválido").optional().or(z.literal("")),
    type: z.enum(["quiz", "true_false"]),
    answers: z.array(answerSchema).min(2, "A pergunta deve ter ao menos 2 respostas"),
}).superRefine((question, ctx) => {
    if (question.text) {
        const validImagePath = /^\/uploads\/questions\/.+\.(jpg|jpeg|png)$/i.test(question.text);
        if (!validImagePath) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Imagem deve ser JPG ou PNG",
                path: ["text"],
            });
        }
    }

    const correctCount = question.answers.filter((answer) => answer.correct).length;

    if (correctCount !== 1) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Selecione exatamente uma resposta correta",
            path: ["answers"],
        });
    }

    if (question.type === "quiz") {
        if (question.answers.length < 2) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Perguntas do tipo quiz devem ter no mínimo 2 respostas",
                path: ["answers"],
            });
        }

        return;
    }

    if (question.answers.length !== 2) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Perguntas verdadeiro ou falso devem ter exatamente 2 respostas",
            path: ["answers"],
        });
        return;
    }

    const normalizedTexts = question.answers.map((answer) => answer.text.trim().toLowerCase());
    const hasTrue = normalizedTexts.includes("verdadeiro");
    const hasFalse = normalizedTexts.includes("falso");

    if (!hasTrue || !hasFalse) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Use apenas Verdadeiro e Falso nesse tipo de pergunta",
            path: ["answers"],
        });
    }
});

export const activitySchema = z.object({
    discipline_id: z.coerce.number({
        invalid_type_error: "Selecione uma disciplina",
    }).int().positive("Selecione uma disciplina"),
    name: z.string().trim().min(1, "Informe o nome da atividade").max(45, "Nome deve ter no máximo 45 caracteres"),
    text: z.string().trim().max(65535, "Descrição muito longa").optional().or(z.literal("")),
    active: z.boolean().default(false),
    questions: z.array(questionSchema).min(1, "Adicione ao menos uma pergunta"),
});
