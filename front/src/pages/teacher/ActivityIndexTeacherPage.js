import {useEffect, useState} from "react";
import {activityDelete, activityIndex, activityToggle} from "@/services/activityService.js";
import Icon from "@/components/Icon.js";
import {Button} from "@/components/ui/button.jsx";
import {DataTable} from "@/components/Datatable.js";
import {Loading} from "@/components/Loading.js";
import {ConfirmModal} from "@/components/ui/modal.jsx";
import {Toaster} from "@/components/ui/sonner.jsx";
import {toast} from "sonner";

export default function ActivityIndexTeacherPage() {
    const [loading, setLoading] = useState(true);
    const [togglingId, setTogglingId] = useState(null);
    const [data, setData] = useState([]);
    const [activityToDelete, setActivityToDelete] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            const activityResponse = await activityIndex();
            setData(activityResponse.data || []);
        } catch {
            toast.error("Não foi possivel carregar as atividades.", {position: "top-center"});
        } finally {
            setLoading(false);
        }
    }

    const handleToggleStatus = async (item) => {
        try {
            setTogglingId(item.id);
            const response = await activityToggle(item.id);
            toast.success(response?.data?.message || "Status da atividade atualizado.", {position: "top-center"});
            await getData();
        } catch {
            toast.error("Não foi possivel alterar o status da atividade.", {position: "top-center"});
        } finally {
            setTogglingId(null);
        }
    };

    const openDeleteModal = (item) => {
        setActivityToDelete(item);
        setIsDeleteModalOpen(true);
    };

    const handleDelete = async () => {
        if (!activityToDelete) {
            return;
        }

        try {
            setDeleting(true);
            const deleteResponse = await activityDelete(activityToDelete.id);
            toast.success(deleteResponse?.data?.message || "Atividade excluída com sucesso.", {position: "top-center"});
            setIsDeleteModalOpen(false);
            setActivityToDelete(null);
            await getData();
        } catch {
            toast.error("Não foi possivel excluir a atividade. Tente novamente mais tarde.", {position: "top-center"});
        } finally {
            setDeleting(false);
        }
    };

    const columns = [
        {
            header: "Atividade",
            key: "name",
            sortable: true,
            render: (item) => (
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="FileText" className="w-4 h-4 text-primary"/>
                    </div>
                    <span className="font-medium ml-1">{item.name}</span>
                </div>
            )
        },
        {
            header: "Disciplina",
            key: "discipline",
            sortable: false,
            render: (item) => (
                <div className="flex items-center gap-2">
                    <span className="font-medium ml-1">{item.Discipline.name}</span>
                </div>
            )
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
                        onClick={() => {
                            // e.stopPropagation();
                            // openEditModal(disciplina);
                        }}
                    >
                        <Icon name="ClipboardCheck" className="w-4 h-4"/>
                    </Button>
                    <Button
                        className={'cursor-pointer'}
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                            // e.stopPropagation();
                            // openEditModal(disciplina);
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

    useEffect(() => {
        getData();
    }, [])

    return <>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div><h1 className="text-2xl font-bold">Atividades</h1><p className="text-muted-foreground">Gerencie
                atividades, quizzes e provas</p></div>
            <button data-slot="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-plus w-4 h-4 mr-2">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                </svg>
                Nova Atividade
            </button>
        </div>
        <div data-slot="card"
             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-content" className="px-6 pt-6">
                {!loading && <DataTable data={data}
                                        columns={columns}
                                        searchKey="name"
                                        searchPlaceholder="Buscar por atividade..."
                                        pageSize={5}
                                        onRowClick={(row) => console.log("Linha clicada:", row)}/>}
                {loading && <Loading/>}
            </div>
        </div>
        <ConfirmModal
            open={isDeleteModalOpen}
            onOpenChange={(open) => {
                setIsDeleteModalOpen(open);
                if (!open && !deleting) {
                    setActivityToDelete(null);
                }
            }}
            title="Excluir Atividade"
            description={`Tem certeza que deseja excluir a atividade "${activityToDelete?.name}"? Esta ação não pode ser desfeita.`}
            onConfirm={handleDelete}
            isLoading={deleting}
            confirmText="Excluir"
            variant="destructive"
        />
        <Toaster richColors/>
    </>
}
