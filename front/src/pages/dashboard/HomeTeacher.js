import Icon from "../../components/Icon.js";
import { useEffect, useState } from "react";
import { teacherDashboard } from "../../services/teacherService.js";

function formatDate(date) {
    if (!date) {
        return "-";
    }

    const parsedDate = new Date(date);
    if (Number.isNaN(parsedDate.getTime())) {
        return "-";
    }

    return parsedDate.toLocaleString("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
    });
}

export default function HomeTeacher() {
    const [dashboard, setDashboard] = useState({
        totalStudents: 0,
        totalActiveDisciplines: 0,
        totalActiveActivities: 0,
        latestActivities: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadDashboard() {
            setLoading(true);
            setError(null);

            try {
                const response = await teacherDashboard();
                setDashboard(response.data);
            } catch {
                setError("Não foi possivel carregar os dados do dashboard.");
                setDashboard({
                    totalStudents: 0,
                    totalActiveDisciplines: 0,
                    totalActiveActivities: 0,
                    latestActivities: [],
                });
            } finally {
                setLoading(false);
            }
        }

        loadDashboard();
    }, []);

    return <>
        <div className="p-6">
            <div className="space-y-6">
                <div><h1 className="text-2xl font-bold">Dashboard do Professor</h1><p
                    className="text-muted-foreground">Visão geral do desempenho das turmas e atividades</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div
                        className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-start justify-between">
                                 <div className="space-y-1">
                                     <p
                                     className="text-sm font-medium text-muted-foreground">Total de Alunos</p><p
                                     className="text-3xl font-bold">{loading ? "..." : dashboard.totalStudents}</p></div>
                                 <div className="p-3 rounded-xl bg-primary/10">
                                     <Icon name={'GraduationCap'} className="w-6 h-6 text-primary"/>
                                 </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-start justify-between">
                                 <div className="space-y-1"><p
                                     className="text-sm font-medium text-muted-foreground">Total de
                                     Disciplinas Ativas</p><p className="text-3xl font-bold">{loading ? "..." : dashboard.totalActiveDisciplines}</p></div>
                                 <div className="p-3 rounded-xl bg-primary/10">
                                     <Icon name={'BookOpen'} className="w-6 h-6 text-primary"/>
                                 </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-start justify-between">
                                 <div className="space-y-1"><p
                                     className="text-sm font-medium text-muted-foreground">Total de
                                     Atividades Ativas</p>
                                     <p className="text-3xl font-bold">{loading ? "..." : dashboard.totalActiveActivities}</p>
                                  </div>
                                 <div className="p-3 rounded-xl bg-primary/10">
                                     <Icon name={'FileText'} className="w-6 h-6 text-primary"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                    <div
                        className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                        <div className="font-semibold text-base">Atividades Recentes
                        </div>
                     </div>
                     <div className="px-6">
                         <div className="space-y-3">
                             {loading ? (
                                 <p className="text-sm text-muted-foreground">Carregando atividades...</p>
                             ) : error ? (
                                 <p className="text-sm text-muted-foreground">{error}</p>
                             ) : dashboard.latestActivities.length > 0 ? (
                                 dashboard.latestActivities.map((activity, index) => (
                                     <div key={`${activity.name}-${index}`} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                         <div>
                                             <p className="font-medium">{activity.name}</p>
                                             <p className="text-sm text-muted-foreground">{activity.disciplineName}</p>
                                         </div>
                                         <div className="text-right">
                                             <p className="text-xs text-muted-foreground">{formatDate(activity.date)}</p>
                                         </div>
                                     </div>
                                 ))
                             ) : (
                                 <p className="text-sm text-muted-foreground">Nenhuma atividade recente encontrada.</p>
                             )}
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    </>
}
