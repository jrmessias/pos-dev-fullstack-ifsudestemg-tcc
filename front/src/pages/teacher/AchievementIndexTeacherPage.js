import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    achievementIndex,
    achievementStore,
    achievementUpdate,
    achievementDelete,
    achievementUsers,
    achievementUnassign,
    achievementAssign,
    teacherStudents,
} from "@/services/achievementService.js";
import Icon from "@/components/Icon.js";
import {Loading} from "@/components/Loading.js";
import {DataTable} from "@/components/Datatable.js";
import {Button} from "@/components/ui/button.jsx";
import {ConfirmModal, Modal} from "@/components/ui/modal.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Textarea} from "@/components/ui/textarea.jsx";
import {Label} from "@/components/ui/label.jsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {Toaster} from "@/components/ui/sonner.jsx";
import {achievementSchema} from "@/validators/achievementSchema.js";
import {toast} from "sonner";

export default function AchievementIndexTeacherPage() {
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [data, setData] = useState([]);
    const [achievementToDelete, setAchievementToDelete] = useState(null);
    const [editingAchievement, setEditingAchievement] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [users, setUsers] = useState([]);
    const [usersTitle, setUsersTitle] = useState("");
    const [isUsersModalOpen, setIsUsersModalOpen] = useState(false);
    const [loadingUsers, setLoadingUsers] = useState(false);
    const [removingUserId, setRemovingUserId] = useState(null);

    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
    const [assigningAchievement, setAssigningAchievement] = useState(null);
    const [allStudents, setAllStudents] = useState([]);
    const [loadingStudents, setLoadingStudents] = useState(false);
    const [assignedUserIds, setAssignedUserIds] = useState([]);
    const [selectedUserIds, setSelectedUserIds] = useState([]);
    const [assigning, setAssigning] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: {errors, isValid},
    } = useForm({
        resolver: zodResolver(achievementSchema),
        mode: "onChange",
        reValidateMode: "onChange",
        defaultValues: {
            name: "",
            type: "bronze",
            text: "",
        },
    });

    const watchedType = watch("type");

    const getData = async () => {
        try {
            setLoading(true);
            const response = await achievementIndex();
            setData(response.data || []);
        } catch {
            toast.error("Não foi possivel carregar as conquistas.", {position: "top-center"});
        } finally {
            setLoading(false);
        }
    };

    const openCreateModal = () => {
        setIsEditing(false);
        setEditingAchievement(null);
        reset({
            name: "",
            type: "bronze",
            text: "",
        });
        setIsFormModalOpen(true);
    };

    const openEditModal = (item) => {
        setIsEditing(true);
        setEditingAchievement(item);
        reset({
            name: item.name || "",
            type: item.type || "bronze",
            text: item.text || "",
        });
        setIsFormModalOpen(true);
    };

    const handleFormSubmit = async (formData) => {
        try {
            setSubmitting(true);
            const payload = {
                name: formData.name,
                type: formData.type,
                text: formData.text?.trim() || undefined,
            };
            const response = isEditing && editingAchievement
                ? await achievementUpdate(editingAchievement.id, payload)
                : await achievementStore(payload);
            toast.success(response?.data?.message || "Conquista salva com sucesso.", {position: "top-center"});
            setIsFormModalOpen(false);
            await getData();
        } catch {
            toast.error("Não foi possivel salvar a conquista. Tente novamente mais tarde.", {position: "top-center"});
        } finally {
            setSubmitting(false);
        }
    };

    const openDeleteModal = (item) => {
        setAchievementToDelete(item);
        setIsDeleteModalOpen(true);
    };

    const handleDelete = async () => {
        if (achievementToDelete) {
            setLoading(true);
            try {
                let deleteResponse = await achievementDelete(achievementToDelete.id);
                await getData();
                setIsDeleteModalOpen(false);
                setAchievementToDelete(null);
                toast.success(deleteResponse.data.message, {position: "top-center"});
            } catch {
                toast.error("Não foi possivel excluir a conquista. Tente novamente mais tarde.", {position: "top-center"});
            } finally {
                setIsDeleteModalOpen(false);
                setLoading(false);
            }
        }
    };

    const openUsersModal = async (item) => {
        try {
            setUsers([]);
            setLoadingUsers(true);
            setUsersTitle(item.name);
            setIsUsersModalOpen(true);
            const response = await achievementUsers(item.id);
            setUsers(response.data || []);
        } catch {
            toast.error("Não foi possivel carregar os alunos desta conquista.", {position: "top-center"});
        } finally {
            setLoadingUsers(false);
        }
    };

    const handleUnassignUser = async (achievementId, userId) => {
        try {
            setRemovingUserId(userId);
            const response = await achievementUnassign(achievementId, userId);
            toast.success(response?.data?.message || "Aluno removido da conquista.", {position: "top-center"});
            setUsers((prev) => prev.filter((u) => u.id !== userId));
        } catch {
            toast.error("Não foi possivel remover o aluno desta conquista.", {position: "top-center"});
        } finally {
            setRemovingUserId(null);
        }
    };

    const openAssignModal = async (item) => {
        try {
            setAssigningAchievement(item);
            setSelectedUserIds([]);
            setAllStudents([]);
            setAssignedUserIds([]);
            setIsAssignModalOpen(true);
            setLoadingStudents(true);

            const [studentsRes, usersRes] = await Promise.all([
                teacherStudents(),
                achievementUsers(item.id),
            ]);

            setAllStudents(studentsRes.data || []);
            setAssignedUserIds((usersRes.data || []).map((u) => u.id));
        } catch {
            toast.error("Não foi possivel carregar os alunos.", {position: "top-center"});
        } finally {
            setLoadingStudents(false);
        }
    };

    const toggleSelectUser = (userId) => {
        setSelectedUserIds((prev) =>
            prev.includes(userId)
                ? prev.filter((id) => id !== userId)
                : [...prev, userId]
        );
    };

    const handleAssign = async () => {
        if (!assigningAchievement || selectedUserIds.length === 0) return;
        try {
            setAssigning(true);
            const response = await achievementAssign(assigningAchievement.id, {user_ids: selectedUserIds});
            toast.success(response?.data?.message || "Conquista atribuída com sucesso.", {position: "top-center"});
            setIsAssignModalOpen(false);
            setAssigningAchievement(null);
            setSelectedUserIds([]);
        } catch {
            toast.error("Não foi possivel atribuir a conquista. Tente novamente mais tarde.", {position: "top-center"});
        } finally {
            setAssigning(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const currentAchievementId = data.find((a) => a.name === usersTitle)?.id;

    const columns = [
        {
            header: "Conquista",
            key: "name",
            sortable: true,
            render: (item) => (
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="Trophy" className="w-4 h-4 text-primary"/>
                    </div>
                    <span className="font-medium ml-1">{item.name}</span>
                </div>
            ),
        },
        {
            header: "Tipo",
            key: "type",
            sortable: true,
            render: (item) => {
                const badges = {
                    gold: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
                    silver: "bg-gray-100 text-gray-700 dark:bg-gray-800/50 dark:text-gray-300",
                    bronze: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
                };
                const labels = { gold: "Ouro", silver: "Prata", bronze: "Bronze" };
                return (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badges[item.type] || badges.bronze}`}>
                        {labels[item.type] || item.type}
                    </span>
                );
            },
        },
        {
            header: "Descrição",
            key: "text",
            sortable: false,
            render: (item) => (
                <span className="text-muted-foreground text-sm">
                    {item.text || "-"}
                </span>
            ),
        },
        {
            header: "Ações",
            key: "actions",
            render: (item) => (
                <div className="flex items-center gap-1">
                    <Button
                        className="cursor-pointer"
                        variant="ghost"
                        size="icon"
                        title="Atribuir a alunos"
                        onClick={(event) => {
                            event.stopPropagation();
                            openAssignModal(item);
                        }}
                    >
                        <Icon name="UserPlus" className="w-4 h-4"/>
                    </Button>
                    <Button
                        className="cursor-pointer"
                        variant="ghost"
                        size="icon"
                        title="Alunos"
                        onClick={(event) => {
                            event.stopPropagation();
                            openUsersModal(item);
                        }}
                    >
                        <Icon name="Users" className="w-4 h-4"/>
                    </Button>
                    <Button
                        className="cursor-pointer"
                        variant="ghost"
                        size="icon"
                        title="Editar"
                        onClick={() => {
                            openEditModal(item);
                        }}
                    >
                        <Icon name="Edit" className="w-4 h-4"/>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        title="Excluir"
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
            <div>
                <h1 className="text-2xl font-bold">Conquistas</h1>
                <p className="text-muted-foreground">Gerencie as conquistas dos seus alunos</p>
            </div>
            <button data-slot="button"
                    onClick={openCreateModal}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 cursor-pointer">
                <Icon name="Plus" className="w-4 h-4 mr-2"/>
                Nova Conquista
            </button>
        </div>
        <div data-slot="card"
             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-content" className="px-6 pt-6">
                {!loading && <DataTable
                    data={data}
                    columns={columns}
                    searchKey="name"
                    searchPlaceholder="Buscar por conquista..."
                    pageSize={5}
                />}
                {loading && <Loading/>}
            </div>
        </div>
        <Modal
            open={isFormModalOpen}
            onOpenChange={setIsFormModalOpen}
            title={isEditing ? "Editar Conquista" : "Nova Conquista"}
            description={
                isEditing
                    ? "Atualize os dados da conquista."
                    : "Preencha os dados para criar uma nova conquista."
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
                    <Label htmlFor="name">Nome da Conquista</Label>
                    <Input
                        id="name"
                        placeholder="Ex: Primeira Atividade Completa"
                        {...register("name")}
                    />
                    {errors.name && (
                        <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="type">Tipo</Label>
                    <Select
                        value={watchedType}
                        onValueChange={(value) => setValue("type", value, {shouldValidate: true})}
                    >
                        <SelectTrigger id="type" className="w-full">
                            <SelectValue placeholder="Selecione o tipo"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="bronze">Bronze</SelectItem>
                            <SelectItem value="silver">Prata</SelectItem>
                            <SelectItem value="gold">Ouro</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.type && (
                        <p className="text-sm text-destructive">{errors.type.message}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="text">Descricao</Label>
                    <Textarea
                        id="text"
                        placeholder="Descreva a conquista..."
                        {...register("text")}
                    />
                    {errors.text && (
                        <p className="text-sm text-destructive">{errors.text.message}</p>
                    )}
                </div>
            </form>
        </Modal>
        <Modal
            open={isUsersModalOpen}
            onOpenChange={setIsUsersModalOpen}
            title={`Alunos - ${usersTitle}`}
            description="Alunos que possuem esta conquista"
        >
            <div className="max-h-[70vh] overflow-y-auto space-y-2 rounded-md border p-3 pr-2 sm:max-h-[60vh]">
                {loadingUsers ? (
                    <Loading/>
                ) : users.length === 0 ? (
                    <p className="text-sm text-muted-foreground">Nenhum aluno com esta conquista.</p>
                ) : (
                    users.map((user) => (
                        <div
                            key={user.id}
                            className="flex items-center justify-between p-2 text-sm border rounded-md hover:bg-muted/50"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                                    <Icon name="User" className="w-3 h-3 text-primary"/>
                                </div>
                                <span>{user.name}</span>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 cursor-pointer text-destructive hover:text-destructive"
                                title="Remover aluno"
                                disabled={removingUserId === user.id}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    handleUnassignUser(currentAchievementId, user.id);
                                }}
                            >
                                {removingUserId === user.id ? (
                                    <Icon name="Loader2" className="w-3 h-3 animate-spin"/>
                                ) : (
                                    <Icon name="X" className="w-3 h-3"/>
                                )}
                            </Button>
                        </div>
                    ))
                )}
            </div>
        </Modal>
        <Modal
            open={isAssignModalOpen}
            onOpenChange={(open) => {
                setIsAssignModalOpen(open);
                if (!open) {
                    setAssigningAchievement(null);
                    setSelectedUserIds([]);
                }
            }}
            title={`Atribuir Conquista — ${assigningAchievement?.name || ""}`}
            description="Selecione os alunos que receberão esta conquista."
            footer={
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        onClick={() => setIsAssignModalOpen(false)}
                        disabled={assigning}
                        className="cursor-pointer"
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={handleAssign}
                        disabled={assigning || selectedUserIds.length === 0}
                        className="cursor-pointer"
                    >
                        {assigning ? (
                            <>
                                <Icon name="Loader2" className="w-4 h-4 mr-2 animate-spin"/>
                                Atribuindo...
                            </>
                        ) : (
                            <>
                                <Icon name="UserPlus" className="w-4 h-4 mr-2"/>
                                Atribuir {selectedUserIds.length > 0 ? `(${selectedUserIds.length})` : ""}
                            </>
                        )}
                    </Button>
                </div>
            }
        >
            <div className="max-h-[70vh] overflow-y-auto space-y-2 rounded-md border p-3 pr-2 sm:max-h-[60vh]">
                {loadingStudents ? (
                    <Loading/>
                ) : allStudents.length === 0 ? (
                    <p className="text-sm text-muted-foreground">Nenhum aluno matriculado nas suas turmas.</p>
                ) : (
                    allStudents.map((student) => {
                        const alreadyHas = assignedUserIds.includes(student.id);
                        const isSelected = selectedUserIds.includes(student.id);
                        return (
                            <div
                                key={student.id}
                                className={`flex items-center gap-3 p-2 text-sm border rounded-md transition-colors ${
                                    alreadyHas
                                        ? "opacity-50 cursor-not-allowed bg-muted/30"
                                        : "cursor-pointer hover:bg-muted/50"
                                } ${isSelected ? "bg-primary/10 border-primary/40" : ""}`}
                                onClick={() => {
                                    if (!alreadyHas) toggleSelectUser(student.id);
                                }}
                            >
                                <div className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                                    alreadyHas
                                        ? "border-muted-foreground bg-muted"
                                        : isSelected
                                            ? "border-primary bg-primary"
                                            : "border-muted-foreground"
                                }`}>
                                    {(alreadyHas || isSelected) && (
                                        <Icon name="Check" className="w-3 h-3 text-white"/>
                                    )}
                                </div>
                                <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Icon name="User" className="w-3 h-3 text-primary"/>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium truncate">{student.name}</p>
                                    <p className="text-xs text-muted-foreground truncate">{student.email}</p>
                                </div>
                                {alreadyHas && (
                                    <span className="text-xs text-muted-foreground flex-shrink-0">Já possui</span>
                                )}
                            </div>
                        );
                    })
                )}
            </div>
        </Modal>
        <ConfirmModal
            open={isDeleteModalOpen}
            onOpenChange={setIsDeleteModalOpen}
            title="Excluir Conquista"
            description={`Tem certeza que deseja excluir a conquista "${achievementToDelete?.name}"? Esta ação não pode ser desfeita.`}
            onConfirm={handleDelete}
            confirmText="Excluir"
            variant="destructive"
        />
        <Toaster richColors/>
    </>;
}
