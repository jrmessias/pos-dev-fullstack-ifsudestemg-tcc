import {useContext, useEffect, useState} from "react";
import {AuthContext} from "@/contexts/AuthContext.js";
import {studentDashboard, studentAchievements} from "@/services/studentService.js";
import {Loading} from "@/components/Loading.js";
import Icon from "@/components/Icon.js";

function getInitials(name) {
    if (!name) return "?";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const typeBadge = {
    gold: {
        border: "border-yellow-400/30",
        bg: "bg-yellow-400/10",
        iconBg: "bg-yellow-400/20",
        iconColor: "text-yellow-500",
        label: "Ouro",
    },
    silver: {
        border: "border-gray-400/30",
        bg: "bg-gray-400/10",
        iconBg: "bg-gray-400/20",
        iconColor: "text-gray-400",
        label: "Prata",
    },
    bronze: {
        border: "border-orange-400/30",
        bg: "bg-orange-400/10",
        iconBg: "bg-orange-400/20",
        iconColor: "text-orange-500",
        label: "Bronze",
    },
};

export default function ProgressIndexStudentPage() {
    const {user} = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [completedActivities, setCompletedActivities] = useState(0);
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        async function load() {
            try {
                setLoading(true);
                const [dashRes, achievementsRes] = await Promise.all([
                    studentDashboard(),
                    studentAchievements(),
                ]);
                setCompletedActivities(dashRes.data?.totalCompletedActivities ?? 0);
                setAchievements(achievementsRes.data || []);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    const initials = getInitials(user?.name);

    return <>
        <div>
            <h1 className="text-2xl font-bold">Meu Progresso</h1>
            <p className="text-muted-foreground">Acompanhe sua evolução e conquistas</p>
        </div>

        <div data-slot="card"
             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
            <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className="relative">
                        <span data-slot="avatar"
                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-24 h-24 border-4 border-background">
                            <span data-slot="avatar-fallback"
                                  className="flex size-full items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl">
                                {initials}
                            </span>
                        </span>
                        <div
                            className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold border-2 border-background">
                            8
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold">{user?.name || "—"}</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <Icon name="Medal" className="w-5 h-5 text-silver"/>
                            <span className="text-muted-foreground">2º lugar no ranking geral</span>
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm">Nível 8</span>
                                <span className="text-sm">Nível 9</span>
                            </div>
                            <div aria-valuemax="100" aria-valuemin="0" role="progressbar"
                                 data-state="indeterminate" data-max="100" data-slot="progress"
                                 className="bg-primary/20 relative w-full overflow-hidden rounded-full h-3">
                                <div data-state="indeterminate" data-max="100" data-slot="progress-indicator"
                                     className="bg-primary h-full w-full flex-1 transition-all"
                                     style={{transform: "translateX(-83.3333%)"}}></div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1 text-center">
                                2450 XP • Faltam 250 XP para o próximo nível
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div data-slot="card"
                 className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                <div data-slot="card-content" className="px-6 pt-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-primary/10">
                            <Icon name="Star" className="w-6 h-6 text-primary"/>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">XP Total</p>
                            <p className="text-2xl font-bold">2.450</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-slot="card"
                 className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                <div data-slot="card-content" className="px-6 pt-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-accent/10">
                            <Icon name="Target" className="w-6 h-6 text-accent"/>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Média Geral</p>
                            <p className="text-2xl font-bold">85</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-slot="card"
                 className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                <div data-slot="card-content" className="px-6 pt-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-success/10">
                            <Icon name="TrendingUp" className="w-6 h-6 text-success"/>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Atividades</p>
                            <p className="text-2xl font-bold">
                                {loading ? "—" : completedActivities}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-slot="card"
                 className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                <div data-slot="card-content" className="px-6 pt-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-gold/10">
                            <Icon name="Trophy" className="w-6 h-6 text-gold"/>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Medalhas</p>
                            <p className="text-2xl font-bold">
                                {loading ? "—" : achievements.length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div data-slot="card"
             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-header"
                 className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div data-slot="card-title" className="leading-none font-semibold flex items-center gap-2">
                    <Icon name="Trophy" className="w-5 h-5 text-primary"/>
                    Minhas Conquistas
                </div>
            </div>
            <div data-slot="card-content" className="px-6">
                {loading ? (
                    <Loading/>
                ) : achievements.length === 0 ? (
                    <p className="text-sm text-muted-foreground">Nenhuma conquista ainda.</p>
                ) : (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {achievements.map((achievement) => {
                            const style = typeBadge[achievement.type] || typeBadge.bronze;
                            return (
                                <div
                                    key={achievement.id}
                                    className={`flex items-center gap-3 p-4 rounded-xl border ${style.bg} ${style.border}`}
                                >
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${style.iconBg}`}>
                                        <Icon name="Trophy" className={`w-6 h-6 ${style.iconColor}`}/>
                                    </div>
                                    <div>
                                        <p className="font-semibold">{achievement.name}</p>
                                        {achievement.text && (
                                            <p className="text-sm text-muted-foreground">{achievement.text}</p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>

        <div data-slot="card"
             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-header"
                 className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div data-slot="card-title" className="font-semibold flex items-center gap-2 text-base">
                    <Icon name="Trophy" className="w-4 h-4 text-primary"/>
                    Sua Posição no Ranking
                </div>
            </div>
            <div data-slot="card-content" className="px-6">
                <div className="space-y-3">
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                        <div className="w-8 flex justify-center">
                            <Icon name="Crown" className="w-5 h-5 text-gold"/>
                        </div>
                        <span data-slot="avatar"
                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-10 h-10">
                            <span data-slot="avatar-fallback"
                                  className="flex size-full items-center justify-center rounded-full bg-muted">AC</span>
                        </span>
                        <div className="flex-1">
                            <p className="font-medium">Ana Costa</p>
                            <p className="text-sm text-muted-foreground">Nível 10</p>
                        </div>
                        <div className="text-right"><p className="font-bold">3.200 XP</p></div>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-primary/10 border border-primary/30">
                        <div className="w-8 flex justify-center">
                            <Icon name="Medal" className="w-5 h-5 text-silver"/>
                        </div>
                        <span data-slot="avatar"
                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-10 h-10">
                            <span data-slot="avatar-fallback"
                                  className="flex size-full items-center justify-center rounded-full bg-primary text-primary-foreground">
                                {initials}
                            </span>
                        </span>
                        <div className="flex-1">
                            <p className="font-medium text-primary">{user?.name || "Você"} (Você)</p>
                            <p className="text-sm text-muted-foreground">Nível 8</p>
                        </div>
                        <div className="text-right"><p className="font-bold">2.450 XP</p></div>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                        <div className="w-8 flex justify-center">
                            <Icon name="Award" className="w-5 h-5 text-bronze"/>
                        </div>
                        <span data-slot="avatar"
                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-10 h-10">
                            <span data-slot="avatar-fallback"
                                  className="flex size-full items-center justify-center rounded-full bg-muted">CM</span>
                        </span>
                        <div className="flex-1">
                            <p className="font-medium">Carla Mendes</p>
                            <p className="text-sm text-muted-foreground">Nível 7</p>
                        </div>
                        <div className="text-right"><p className="font-bold">2.100 XP</p></div>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                        <div className="w-8 flex justify-center">
                            <span className="font-bold text-muted-foreground">4</span>
                        </div>
                        <span data-slot="avatar"
                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-10 h-10">
                            <span data-slot="avatar-fallback"
                                  className="flex size-full items-center justify-center rounded-full bg-muted">PL</span>
                        </span>
                        <div className="flex-1">
                            <p className="font-medium">Pedro Lima</p>
                            <p className="text-sm text-muted-foreground">Nível 6</p>
                        </div>
                        <div className="text-right"><p className="font-bold">1.800 XP</p></div>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                        <div className="w-8 flex justify-center">
                            <span className="font-bold text-muted-foreground">5</span>
                        </div>
                        <span data-slot="avatar"
                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-10 h-10">
                            <span data-slot="avatar-fallback"
                                  className="flex size-full items-center justify-center rounded-full bg-muted">LO</span>
                        </span>
                        <div className="flex-1">
                            <p className="font-medium">Lucas Oliveira</p>
                            <p className="text-sm text-muted-foreground">Nível 4</p>
                        </div>
                        <div className="text-right"><p className="font-bold">950 XP</p></div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
