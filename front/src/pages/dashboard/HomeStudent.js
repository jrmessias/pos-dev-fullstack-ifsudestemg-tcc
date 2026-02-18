import Icon from "../../components/Icon.js";
import {useContext, useEffect, useMemo, useState} from "react";
import {AuthContext} from "../../contexts/AuthContext.js";
import {studentDashboard, studentAchievements} from "../../services/studentService.js";
import useCountUp from "../../hooks/useCountUp.js";

const typeBadge = {
    gold: {
        border: "border-yellow-400/30",
        bg: "bg-yellow-400/10",
        iconColor: "text-yellow-500",
    },
    silver: {
        border: "border-gray-400/30",
        bg: "bg-gray-400/10",
        iconColor: "text-gray-400",
    },
    bronze: {
        border: "border-orange-400/30",
        bg: "bg-orange-400/10",
        iconColor: "text-orange-500",
    },
};

const frasesMotivacionais = [
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Sua única limitação é aquela que você impõe em sua própria mente.",
    "Acredite que você pode e você já está no meio do caminho.",
    "Não espere por oportunidades, crie-as.",
    "O que não nos mata, nos torna mais fortes.",
    "A persistência é o caminho do êxito.",
    "Seja a mudança que você deseja ver no mundo.",
    "Grandes jornadas começam com um pequeno passo.",
    "O fracasso é apenas a oportunidade de recomeçar com mais inteligência.",
    "Sua coragem deve ser maior que o seu medo.",
    "Continue evoluindo e conquistando novos objetivos.",
];

function buscarFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frasesMotivacionais.length);
    return frasesMotivacionais[indiceAleatorio];
}

export default function HomeStudent() {
    const totalScore = 85;
    const currentLevel = 8;
    const {user} = useContext(AuthContext);
    const motivationalPhrase = useMemo(() => buscarFraseAleatoria(), []);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dashboard, setDashboard] = useState({
        totalEnrolledDisciplines: 0,
        totalActivities: 0,
        totalCompletedActivities: 0,
        totalPendingActivities: 0,
        data: [],
    });
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        async function loadDashboard() {
            setLoading(true);
            setError(null);

            try {
                const [dashRes, achievementsRes] = await Promise.all([
                    studentDashboard(),
                    studentAchievements(),
                ]);
                const apiData = dashRes.data || {};
                setDashboard({
                    totalEnrolledDisciplines: apiData.totalEnrolledDisciplines || 0,
                    totalActivities: apiData.totalActivities || 0,
                    totalCompletedActivities: apiData.totalCompletedActivities || 0,
                    totalPendingActivities: apiData.totalPendingActivities || 0,
                    data: apiData.data || [],
                });
                setAchievements(achievementsRes.data || []);
            } catch (err) {
                const message = err?.response?.data?.message || "Não foi possível carregar as atividades do aluno.";
                setError(message);
                setDashboard({
                    totalEnrolledDisciplines: 0,
                    totalActivities: 0,
                    totalCompletedActivities: 0,
                    totalPendingActivities: 0,
                    data: [],
                });
            } finally {
                setLoading(false);
            }
        }

        loadDashboard();
    }, []);

    const animatedDisciplines = useCountUp({
        target: dashboard.totalEnrolledDisciplines,
        startWhen: !loading,
    });

    const animatedCompletedActivities = useCountUp({
        target: dashboard.totalCompletedActivities,
        startWhen: !loading,
    });

    const animatedTotalScore = useCountUp({
        target: totalScore,
        startWhen: !loading,
    });

    const animatedCurrentLevel = useCountUp({
        target: currentLevel,
        startWhen: !loading,
    });

    return <>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div><h1 className="text-2xl font-bold">Olá, {user.name}!</h1><p
                className="text-muted-foreground">{motivationalPhrase}</p>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-card border">
                <div
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-primary-foreground">8
                </div>
                <div><p className="text-sm text-muted-foreground">Nível Atual</p><p
                    className="font-semibold">2450 XP</p>
                    <div className="flex items-center gap-2 mt-1">
                        <div aria-valuemax="100" aria-valuemin="0" role="progressbar"
                             data-state="indeterminate" data-max="100"
                             className="bg-primary/20 relative overflow-hidden rounded-full w-24 h-2">
                            <div data-state="indeterminate" data-max="100"
                                 className="bg-primary h-full w-full flex-1 transition-all"
                                 style={{transform: 'translateX(-83.3333%)'}}></div>
                        </div>
                        <span className="text-xs text-muted-foreground">250 XP para o próximo</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
                <div className="p-6">
                    <div className="flex items-start justify-between">
                        <div className="space-y-1"><p
                            className="text-sm font-medium text-muted-foreground">Disciplinas</p><p
                            className="text-3xl font-bold">{loading ? "..." : animatedDisciplines}</p><p
                            className="text-xs text-muted-foreground">Disciplinas matriculadas</p></div>
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
                            className="text-sm font-medium text-muted-foreground">Atividades
                            Concluídas</p><p className="text-3xl font-bold">{loading ? "..." : animatedCompletedActivities}</p><p
                            className="text-xs text-muted-foreground">{loading ? "..." : dashboard.totalPendingActivities} pendentes de {loading ? "..." : dashboard.totalActivities}</p></div>
                        <div className="p-3 rounded-xl bg-primary/10">
                            <Icon name={'FileText'} className="w-6 h-6 text-primary"/>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
                <div className="p-6">
                    <div className="flex items-start justify-between">
                        <div className="space-y-1"><p
                            className="text-sm font-medium text-muted-foreground">Pontuação Total</p><p
                            className="text-3xl font-bold">{loading ? "..." : animatedTotalScore}</p><p
                            className="text-xs font-medium text-success">+15% em relação ao mês
                            anterior</p></div>
                        <div className="p-3 rounded-xl bg-primary/10">
                            <Icon name={'Target'} className="w-6 h-6 text-primary"/>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
                <div className="p-6">
                    <div className="flex items-start justify-between">
                        <div className="space-y-1"><p
                            className="text-sm font-medium text-muted-foreground">Nível Atual</p><p
                            className="text-3xl font-bold">{loading ? "..." : animatedCurrentLevel}</p><p
                            className="text-xs text-muted-foreground">2450 XP acumulados</p></div>
                        <div className="p-3 rounded-xl bg-primary/10">
                            <Icon name={'Star'} className="w-6 h-6 text-primary"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div className="font-semibold flex items-center gap-2 text-base">
                    <Icon name={'Trophy'} className="w-4 h-4 text-primary"/>
                    Minhas Conquistas
                </div>
            </div>
            <div className="px-6">
                {loading ? (
                    <p className="text-sm text-muted-foreground">Carregando conquistas...</p>
                ) : achievements.length === 0 ? (
                    <p className="text-sm text-muted-foreground">Nenhuma conquista ainda.</p>
                ) : (
                    <div className="flex flex-wrap gap-3">
                        {achievements.map((achievement) => {
                            const style = typeBadge[achievement.type] || typeBadge.bronze;
                            return (
                                <div
                                    key={achievement.id}
                                    className={`flex items-center gap-2 p-3 rounded-lg border ${style.bg} ${style.border}`}
                                >
                                    <Icon name={'Trophy'} className={`w-5 h-5 ${style.iconColor}`}/>
                                    <div>
                                        <p className="text-sm font-medium">{achievement.name}</p>
                                        {achievement.text && (
                                            <p className="text-xs text-muted-foreground">{achievement.text}</p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
        <div
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div className="font-semibold text-base">Atividades Pendentes
                </div>
            </div>
            <div className="px-6">
                <div className="space-y-3">
                    {loading ? (
                        <p className="text-sm text-muted-foreground">Carregando atividades...</p>
                    ) : error ? (
                        <p className="text-sm text-muted-foreground">{error}</p>
                    ) : dashboard.data.length === 0 ? (
                        <p className="text-sm text-muted-foreground">Nenhuma atividade pendente.</p>
                    ) : (
                        dashboard.data.map((activity) => (
                            <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                <div>
                                    <p className="font-medium">{activity.name}</p>
                                    <p className="text-sm text-muted-foreground">{activity.disciplineName}</p>
                                </div>
                                <div className="text-right">
                                    <span
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90">
                                        Pendente
                                    </span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    </>
}
