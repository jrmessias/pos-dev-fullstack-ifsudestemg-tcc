import {useCallback, useEffect, useState} from "react";
import Icon from "@/components/Icon.js";
import {Loading} from "@/components/Loading.js";
import {studentDisciplines, studentEnroll} from "@/services/studentService.js";
import {Button} from "@/components/ui/button.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Modal} from "@/components/ui/modal.jsx";
import {toast} from "sonner";
import {Toaster} from "@/components/ui/sonner.jsx";

export default function DisciplineIndexStudentPage() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [disciplines, setDisciplines] = useState([]);
    const [enrollModalOpen, setEnrollModalOpen] = useState(false);
    const [enrollKey, setEnrollKey] = useState("");
    const [enrollLoading, setEnrollLoading] = useState(false);

    const loadDisciplines = useCallback(async () => {
        setLoading(true);
        setError("");

        try {
            const response = await studentDisciplines();
            setDisciplines(response?.data || []);
        } catch (err) {
            const message = err?.response?.data?.message || "Não foi possivel carregar suas disciplinas.";
            setError(message);
            setDisciplines([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadDisciplines();
    }, [loadDisciplines]);

    async function handleEnroll(e) {
        e.preventDefault();
        if (!enrollKey.trim()) return;

        setEnrollLoading(true);
        try {
            const response = await studentEnroll({key: enrollKey.trim()});
            toast.success(response?.data?.message || "Inscrição realizada com sucesso!", {position: "top-center"});
            setEnrollModalOpen(false);
            setEnrollKey("");
            loadDisciplines();
        } catch (err) {
            toast.error(err?.response?.data?.message || "Erro ao realizar inscrição.", {position: "top-center", autoClose: 5000});
        } finally {
            setEnrollLoading(false);
        }
    }

    return <>
        <Toaster richColors/>
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold">Minhas Disciplinas</h1>
                <p className="text-muted-foreground">Acompanhe seu progresso em cada disciplina</p>
            </div>
            <Button onClick={() => setEnrollModalOpen(true)} className="cursor-pointer">
                <Icon name="Plus" className="w-4 h-4"/>
                Inscrever-se
            </Button>
        </div>

        <Modal
            open={enrollModalOpen}
            onOpenChange={(open) => { setEnrollModalOpen(open); if (!open) setEnrollKey(""); }}
            title="Inscrever-se em Disciplina"
            description="Insira a chave fornecida pelo professor para se inscrever na disciplina."
            footer={
                <>
                    <Button variant="outline" onClick={() => setEnrollModalOpen(false)} disabled={enrollLoading} className="cursor-pointer dark:hover:text-muted-foreground">
                        Cancelar
                    </Button>
                    <Button onClick={handleEnroll} disabled={enrollLoading || !enrollKey.trim()} className="cursor-pointer">
                        {enrollLoading ? (
                            <><Icon name="Loader2" className="w-4 h-4 animate-spin"/>Aguarde...</>
                        ) : (
                            "Inscrever-se"
                        )}
                    </Button>
                </>
            }
        >
            <form onSubmit={handleEnroll}>
                <Input
                    placeholder="Digite a chave da disciplina"
                    value={enrollKey}
                    onChange={(e) => setEnrollKey(e.target.value)}
                    disabled={enrollLoading}
                    autoFocus
                />
            </form>
        </Modal>

        {loading ? (
            <Loading size="lg"/>
        ) : error ? (
            <div className="text-sm text-muted-foreground">{error}</div>
        ) : disciplines.length === 0 ? (
            <div className="text-sm text-muted-foreground">Você ainda não está matriculado em disciplinas ativas.</div>
        ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {disciplines.map((discipline) => {
                    const progress = Number.isFinite(Number(discipline.progress)) ? Number(discipline.progress) : 0;
                    const safeProgress = Math.max(0, Math.min(100, progress));
                    const totalActivities = Number(discipline.totalActivities) || 0;
                    const xp = Number(discipline.xp) || 0;
                    const avgXp = Math.round(Number(discipline.avgXp) || 0);

                    return (
                        <div key={discipline.id} data-slot="card"
                             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:border-primary/50 transition-colors">
                            <div data-slot="card-header"
                                 className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                                <div className="flex items-start justify-between">
                                    <div
                                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Icon name="BookOpen" className="w-6 h-6 text-primary"/>
                                    </div>
                                    <span data-slot="badge"
                                           className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&]:hover:bg-primary/90 bg-success text-success-foreground">Média: {avgXp} XP</span>
                                </div>
                                <div data-slot="card-title"
                                     className="leading-none font-semibold mt-4">{discipline.name}</div>
                                <p className="text-sm text-muted-foreground line-clamp-2">{discipline.description || "Sem descricao"}</p>
                            </div>
                            <div data-slot="card-content" className="px-6">
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between items-center mb-2"><span
                                            className="text-sm text-muted-foreground">Progresso</span><span
                                            className="text-sm font-medium">{safeProgress}%</span></div>
                                        <div aria-valuemax="100" aria-valuemin="0" role="progressbar"
                                             data-state="indeterminate" data-max="100" data-slot="progress"
                                             className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2">
                                            <div data-state="indeterminate" data-max="100"
                                                 data-slot="progress-indicator"
                                                 className="bg-primary h-full w-full flex-1 transition-all"
                                                 style={{transform: `translateX(-${100 - safeProgress}%)`}}></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="flex items-center gap-2 text-sm">
                                            <Icon name="FileText" className="w-4 h-4 text-muted-foreground"/>
                                            <span>{totalActivities} {totalActivities === 1 ? "atividade" : "atividades"}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Icon name="Trophy" className="w-4 h-4 text-accent"/>
                                            <span className="text-accent font-medium">+{xp} XP</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        )}
    </>
}
