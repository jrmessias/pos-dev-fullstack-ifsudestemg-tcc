import {useEffect, useState} from "react";
import {activityDelete, activityIndex, activityShow, activityToggle} from "@/services/activityService.js";
import Icon from "@/components/Icon.js";
import {Button} from "@/components/ui/button.jsx";
import {DataTable} from "@/components/Datatable.js";
import {Loading} from "@/components/Loading.js";
import {ConfirmModal, Modal} from "@/components/ui/modal.jsx";
import {Toaster} from "@/components/ui/sonner.jsx";
import {toast} from "sonner";
import {useNavigate} from "react-router-dom";

export default function ActivityIndexTeacherPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [togglingId, setTogglingId] = useState(null);
    const [data, setData] = useState([]);
    const [activityToDelete, setActivityToDelete] = useState(null);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [loadingActivityDetails, setLoadingActivityDetails] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const publicApiBase = import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") || "";

    const getQuestionImageUrl = (relativePath) => {
        if (!relativePath) return "";
        if (relativePath.startsWith("http://") || relativePath.startsWith("https://")) {
            return relativePath;
        }
        return `${publicApiBase}${relativePath}`;
    };

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

    const openViewModal = async (item) => {
        try {
            setSelectedActivity(null);
            setIsViewModalOpen(true);
            setLoadingActivityDetails(true);
            const response = await activityShow(item.id);
            setSelectedActivity(response?.data || null);
        } catch {
            setIsViewModalOpen(false);
            toast.error("Não foi possível carregar os detalhes da atividade.", {position: "top-center"});
        } finally {
            setLoadingActivityDetails(false);
        }
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
                        disabled={loadingActivityDetails}
                        onClick={(event) => {
                            event.stopPropagation();
                            openViewModal(item);
                        }}
                    >
                        <Icon name="Eye" className="w-4 h-4"/>
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
            <Button className="cursor-pointer" onClick={() => navigate("/teacher/activity/new")}>
                <Icon name="Plus" className="w-4 h-4 mr-2"/>
                Nova Atividade
            </Button>
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
            description={`Tem certeza que deseja excluir a atividade "${activityToDelete?.name}"? <br>Esta ação não pode ser desfeita.`}
            onConfirm={handleDelete}
            isLoading={deleting}
            confirmText="Excluir"
            variant="destructive"
        />
        <Modal
            open={isViewModalOpen}
            onOpenChange={(open) => {
                setIsViewModalOpen(open);
                if (!open) {
                    setSelectedActivity(null);
                }
            }}
            title={selectedActivity?.name || "Detalhes da Atividade"}
            description="Visualização das perguntas e respostas da atividade"
        >
            {loadingActivityDetails || !selectedActivity ? (
                <div className="py-3">
                    <Loading/>
                </div>
            ) : (
                <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
                    <div className="rounded-md border p-3 space-y-1">
                        <p className="text-sm"><span className="font-semibold">Disciplina:</span> {selectedActivity?.Discipline?.name || "-"}</p>
                        <p className="text-sm"><span className="font-semibold">Status:</span> {(selectedActivity?.active === 1 || selectedActivity?.active === true) ? "Ativa" : "Inativa"}</p>
                        <p className="text-sm"><span className="font-semibold">Tempo limite:</span> {{"00:00:20": "20 segundos", "00:00:30": "30 segundos", "00:01:00": "1 minuto"}[selectedActivity?.time_limit] || "-"}</p>
                        <p className="text-sm"><span className="font-semibold">Descrição:</span> {selectedActivity?.text || "Sem descrição"}</p>
                    </div>

                    <div className="space-y-3">
                        {(selectedActivity?.Questions || []).length === 0 ? (
                            <p className="text-sm text-muted-foreground">Nenhuma pergunta cadastrada nesta atividade.</p>
                        ) : (
                            (selectedActivity?.Questions || []).map((question, questionIndex) => (
                                <div key={question.id} className="rounded-md border p-3 space-y-3">
                                    <div className="space-y-1">
                                        <p className="font-semibold">Pergunta {questionIndex + 1}</p>
                                        <p className="text-sm">{question.name}</p>
                                        <p className="text-xs text-muted-foreground">Tipo: {question.type === "true_false" ? "Verdadeiro ou Falso" : "Quiz"}</p>
                                    </div>

                                    {question.text && /^\/uploads\/questions\/.+\.(jpg|jpeg|png)$/i.test(question.text) ? (
                                        <img
                                            src={getQuestionImageUrl(question.text)}
                                            alt={`Imagem da pergunta ${questionIndex + 1}`}
                                            className="w-full max-h-52 object-cover rounded-md border"
                                        />
                                    ) : null}

                                    <div className="space-y-2">
                                        {(question.Answers || []).map((answer) => (
                                            <div
                                                key={answer.id}
                                                className={`rounded-md border px-3 py-2 text-sm flex items-center justify-between gap-2 ${answer.correct ? "border-green-500 bg-green-50 dark:border-green-800 dark:bg-green-400/10" : ""}`}
                                            >
                                                <span>{answer.title}) {answer.text}</span>
                                                {answer.correct ? (
                                                    <span className="text-xs font-semibold text-green-700">Correta</span>
                                                ) : null}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </Modal>
        <Toaster richColors/>
    </>
}
