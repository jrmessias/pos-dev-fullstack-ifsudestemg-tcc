import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useNavigate} from "react-router-dom";
import {
    disciplineDelete,
    disciplineIndex,
    disciplineStore,
    disciplineStudents,
    disciplineToggle,
    disciplineUpdate,
} from "@/services/disciplineService.js";
import Icon from "@/components/Icon.js";
import {Loading} from "@/components/Loading.js";
import {DataTable} from "@/components/Datatable.js";
import {Badge} from "@/components/ui/badge.jsx";
import {Button} from "@/components/ui/button.jsx";
import {ConfirmModal, Modal} from "@/components/ui/modal.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Textarea} from "@/components/ui/textarea.jsx";
import {Label} from "@/components/ui/label.jsx";
import {Switch} from "@/components/ui/switch.jsx";
import {Toaster} from "@/components/ui/sonner.jsx";
import {disciplineSchema} from "@/validators/disciplineSchema.js";
import {toast} from "sonner";

export default function DisciplineIndexTeacherPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [togglingId, setTogglingId] = useState(null);
    const [data, setData] = useState([]);
    const [disciplineToDelete, setDisciplineToDelete] = useState(null);
    const [editingDiscipline, setEditingDiscipline] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [students, setStudents] = useState([]);
    const [studentsTitle, setStudentsTitle] = useState("");
    const [isStudentsModalOpen, setIsStudentsModalOpen] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: {errors, isValid},
    } = useForm({
        resolver: zodResolver(disciplineSchema),
        mode: "onChange",
        reValidateMode: "onChange",
        defaultValues: {
            name: "",
            description: "",
            active: true,
        },
    });

    const activeValue = watch("active");

    const getData = async () => {
        try {
            setLoading(true);
            const disciplineResponse = await disciplineIndex();
            setData(disciplineResponse.data || []);
        } catch {
            toast.error("Não foi possivel carregar as disciplinas.", {position: "top-center"});
        } finally {
            setLoading(false);
        }
    }

    const deleteDiscipline = async (id) => await disciplineDelete(id)

    const openCreateModal = () => {
        setIsEditing(false);
        setEditingDiscipline(null);
        reset({
            name: "",
            description: "",
            active: true,
        });
        setIsFormModalOpen(true);
    };

    const openEditModal = (item) => {
        setIsEditing(true);
        setEditingDiscipline(item);
        reset({
            name: item.name || "",
            description: item.description || "",
            active: item.active === 1 || item.active === true,
        });
        setIsFormModalOpen(true);
    };

    const handleFormSubmit = async (formData) => {
        try {
            setSubmitting(true);

            const payload = {
                name: formData.name,
                description: formData.description?.trim() || undefined,
                active: formData.active,
            };

            const response = isEditing && editingDiscipline
                ? await disciplineUpdate(editingDiscipline.id, payload)
                : await disciplineStore(payload);

            toast.success(response?.data?.message || "Disciplina salva com sucesso.", {position: "top-center"});
            setIsFormModalOpen(false);
            await getData();
        } catch {
            toast.error("Não foi possivel salvar a disciplina. Tente novamente mais tarde.", {position: "top-center"});
        } finally {
            setSubmitting(false);
        }
    };

    const handleToggleStatus = async (item) => {
        try {
            setTogglingId(item.id);
            const response = await disciplineToggle(item.id);
            toast.success(response?.data?.message || "Status da disciplina atualizado.", {position: "top-center"});
            await getData();
        } catch {
            toast.error("Não foi possivel alterar o status da disciplina.", {position: "top-center"});
        } finally {
            setTogglingId(null);
        }
    };

    const openStudentsModal = async (item) => {
        try {
            const studentsResponse = await disciplineStudents(item.id);
            setStudents(studentsResponse.data || []);
            setStudentsTitle(item.name);
            setIsStudentsModalOpen(true);
        } catch {
            toast.error("Não foi possível carregar os alunos da disciplina.", {position: "top-center"});
        }
    }

    const openDeleteModal = (item) => {
        setDisciplineToDelete(item);
        setIsDeleteModalOpen(true);
    };

    const handleDelete = async () => {
        if (disciplineToDelete) {
            setLoading(true);
            try {
                let deleteResponse = await deleteDiscipline(disciplineToDelete.id);
                await getData();
                setLoading(false);
                setIsDeleteModalOpen(false);
                setDisciplineToDelete(null);
                toast.success(deleteResponse.data.message, {position: "top-center"})
            } catch {
                toast.error("Não foi possivel excluir a disciplina. Tente novamente mais tarde.", {position: "top-center"})
            } finally {
                setIsDeleteModalOpen(false);
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        getData()
    }, [])

    const columns = [
        {
            header: "Disciplina",
            key: "name",
            sortable: true,
            render: (item) => (
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="BookOpen" className="w-4 h-4 text-primary"/>
                    </div>
                    <span className="font-medium ml-1">{item.name}</span>
                </div>
            )
        },
        {
            header: "Chave",
            key: "key",
            sortable: false,
            render: (item) => (
                <Button
                    type="button"
                    variant="ghost"
                    className="h-auto p-0 hover:bg-transparent cursor-pointer"
                    onClick={async (event) => {
                        event.stopPropagation();
                        try {
                            await navigator.clipboard.writeText(item.key);
                            toast.success(`Chave copiada: ${item.key} (${item.name})`, {position: "top-center"});
                        } catch {
                            toast.error("Não foi possivel copiar a chave.", {position: "top-center"});
                        }
                    }}
                >
                    <Badge variant={"secondary"} className="gap-1">
                        {item.key}
                        <Icon name="Copy" className="w-3.5 h-3.5"/>
                    </Badge>
                </Button>
            ),
        },
        {
            header: "Status",
            key: "active",
            sortable: true,
            render: (item) => (
                <Button
                    variant={item.active === 1 || item.active === true ? "default" : "destructive"}
                    size="sm"
                    className="cursor-pointer"
                    disabled={togglingId === item.id}
                    onClick={(event) => {
                        event.stopPropagation();
                        handleToggleStatus(item);
                    }}
                >
                    {togglingId === item.id ? (
                        <>
                            <Icon name="Loader2" className="w-4 h-4 mr-2 animate-spin"/>
                            Atualizando...
                        </>
                    ) : (
                        item.active === 1 || item.active === true ? "Ativa" : "Inativa"
                    )}
                </Button>
            ),
        },
        {
            header: "Ações",
            key: "actions",
            render: (item) => (
                <div className="flex items-center gap-1">
                    <Button
                        className={'cursor-pointer'}
                        variant="ghost"
                        size="icon"
                        onClick={(event) => {
                            event.stopPropagation();
                            navigate(`/teacher/discipline/${item.id}/students`);
                        }}
                    >
                        <Icon name="Users" className="w-4 h-4"/>
                    </Button>
                    <Button
                        className={'cursor-pointer'}
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                            openEditModal(item);
                        }}
                    >
                        <Icon name="Edit" className="w-4 h-4"/>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive cursor-pointer"
                        onClick={(event) => {
                            event.stopPropagation();
                            openDeleteModal(item);
                        }}
                    >
                        <Icon name="Trash2" className="w-4 h-4"/>
                    </Button>
                </div>
            ),
        },
    ];

    return <>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div><h1 className="text-2xl font-bold">Disciplinas</h1><p
                className="text-muted-foreground">Gerencie suas disciplinas e conteúdos</p></div>
            <button data-slot="button"
                    onClick={openCreateModal}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 cursor-pointer">
                <Icon name="Plus" className="w-4 h-4 mr-2"/>
                Nova Disciplina
            </button>
        </div>
        <div data-slot="card"
             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-content" className="px-6 pt-6">
                {!loading && <DataTable
                    data={data}
                    columns={columns}
                    searchKey="name"
                    searchPlaceholder="Buscar por disciplina..."
                    pageSize={5}
                />}
                {loading && <Loading/>}
            </div>
        </div>
        <Modal
            open={isFormModalOpen}
            onOpenChange={setIsFormModalOpen}
            title={isEditing ? "Editar Disciplina" : "Nova Disciplina"}
            description={
                isEditing
                    ? "Atualize os dados da disciplina."
                    : "Preencha os dados para criar uma nova disciplina."
            }
            footer={
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        onClick={() => setIsFormModalOpen(false)}
                        disabled={submitting}
                        className="cursor-pointer"
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={handleSubmit(handleFormSubmit)}
                        disabled={submitting || !isValid}
                        className="cursor-pointer"
                    >
                        {submitting ? (
                            <>
                                <Icon name="Loader2" className="w-4 h-4 mr-2 animate-spin"/>
                                Salvando...
                            </>
                        ) : (
                            isEditing ? "Salvar" : "Criar"
                        )}
                    </Button>
                </div>
            }
        >
            <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="space-y-2">
                    <Label htmlFor="name">Nome da Disciplina</Label>
                    <Input
                        id="name"
                        placeholder="Ex: Matematica"
                        {...register("name")}
                    />
                    {errors.name && (
                        <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="description">Descrição</Label>
                    <Textarea
                        id="description"
                        placeholder="Descreva a disciplina..."
                        {...register("description")}
                    />
                    {errors.description && (
                        <p className="text-sm text-destructive">{errors.description.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="active">Status</Label>
                    <div className="flex items-center justify-between rounded-md border px-3 py-2">
                        <span className="text-sm text-muted-foreground">
                            {activeValue ? "Ativa" : "Inativa"}
                        </span>
                        <Switch
                            id="active"
                            checked={!!activeValue}
                            onCheckedChange={(checked) => {
                                setValue("active", checked, {shouldValidate: true, shouldDirty: true});
                            }}
                        />
                    </div>
                </div>
            </form>
        </Modal>
        <Modal
            open={isStudentsModalOpen}
            onOpenChange={setIsStudentsModalOpen}
            title={`Alunos - ${studentsTitle}`}
            description="Listagem de alunos associados a disciplina"
        >
            <div className="max-h-[70vh] overflow-y-auto space-y-2 rounded-md border p-3 pr-2 sm:max-h-[60vh]">
                {students.length === 0 ? (
                    <p className="text-sm text-muted-foreground">Nenhum aluno associado.</p>
                ) : (
                    students.map((name, index) => (
                        <div key={`${name}-${index}`} className="text-sm">{name}</div>
                    ))
                )}
            </div>
        </Modal>
        <Toaster richColors/>
        <ConfirmModal
            open={isDeleteModalOpen}
            onOpenChange={setIsDeleteModalOpen}
            title="Excluir Disciplina"
            description={`Tem certeza que deseja excluir a disciplina "${disciplineToDelete?.name}"? Esta ação não pode ser desfeita.`}
            onConfirm={handleDelete}
            confirmText="Excluir"
            variant="destructive"
        />
    </>
}
