import Icon from "../../components/Icon.js";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip.jsx";
import {useEffect, useState} from "react";
import {studentAchievements, studentDashboard, studentRanking} from "@/services/studentService.js";

export default function RightSidebar({type, rightOpen, setRightOpen}) {
    const isStudent = type === 'student';
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [achievements, setAchievements] = useState([]);
    const [ranking, setRanking] = useState([]);
    const [totalXp, setTotalXp] = useState(0);
    const [maxXp, setMaxXp] = useState(0);

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

    const positionConfig = {
        1: {icon: 'Crown', colorClass: 'text-gold', wrapperClass: 'bg-gold/10 border border-gold/20'},
        2: {icon: 'Medal', colorClass: 'text-silver', wrapperClass: 'bg-silver/10 border border-silver/20'},
        3: {icon: 'Award', colorClass: 'text-bronze', wrapperClass: 'bg-bronze/10 border border-bronze/20'},
    };

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            setError(null);

            try {
                const calls = [studentAchievements(), studentRanking()];
                if (isStudent) calls.push(studentDashboard());

                const results = await Promise.all(calls);
                setAchievements(results[0].data || []);
                setRanking(results[1].data || []);

                if (isStudent && results[2]) {
                    setTotalXp(results[2].data?.totalXp ?? 0);
                    setMaxXp(results[2].data?.maxXp ?? 0);
                }
            } catch (err) {
                const message = err?.response?.data?.message || "Não foi possível carregar os dados.";
                setError(message);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, [isStudent]);

    const xpPercent = maxXp > 0 ? Math.min((totalXp / maxXp) * 100, 100) : 0;

    return <>
        <aside
            className={`fixed right-0 top-0 z-30 h-screen bg-card border-l border-border transition-all duration-300 flex flex-col pt-16 ${rightOpen ? 'w-72' : 'w-12'}`}
            onClick={() => setRightOpen(!rightOpen)}>
            <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground dark:hover:bg-accent/50 size-9 absolute left-0 top-20 -translate-x-1/2 w-6 h-6 rounded-full bg-card border border-border shadow-sm hover:bg-accent/50 cursor-pointer z-40">
                <Icon name={rightOpen ? 'ChevronRight' : 'ChevronLeft'} className="w-3 h-3"/>
            </button>
            <div dir="ltr" className="relative flex-1 px-4 py-4">
                <div className={`flex flex-col items-center gap-4 py-4 ${rightOpen ? 'hidden' : 'block'}`}>
                    <Tooltip>
                        <TooltipTrigger><Icon name={'Trophy'} className="w-5 h-5 text-primary"/></TooltipTrigger>
                        <TooltipContent side={'left'}>
                            <p>Ranking Geral</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
                {isStudent &&
                    <div className={`flex flex-col items-center gap-4 py-4 ${rightOpen ? 'hidden' : 'block'}`}>
                        <Tooltip>
                            <TooltipTrigger>
                                <Icon name={'Star'} className="w-5 h-5 text-accent"/>
                            </TooltipTrigger>
                            <TooltipContent side={'left'}>
                                <p>Seu progresso</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>}
                <div
                    className={`focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1 overflow-y-auto ${rightOpen ? 'block' : 'hidden'}`}>
                    <div className="min-w-full table">
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Icon name={'Trophy'} className="w-4 h-4 text-primary"/>
                                <h3 className="font-semibold text-sm">Ranking Geral</h3>
                            </div>
                            <div className="space-y-2">
                                {loading ? (
                                    <p className="text-sm text-muted-foreground">Carregando ranking...</p>
                                ) : error ? (
                                    <p className="text-sm text-destructive">{error}</p>
                                ) : ranking.length === 0 ? (
                                    <p className="text-sm text-muted-foreground">Nenhum dado de ranking ainda.</p>
                                ) : (
                                    ranking.map((entry) => {
                                        const config = positionConfig[entry.position];
                                        const displayName = entry.isCurrentUser
                                            ? `${entry.name} (Você)`
                                            : entry.name;

                                        return (
                                            <div
                                                key={entry.position}
                                                className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${config ? config.wrapperClass : 'bg-muted/50'}`}>
                                                <div className="w-6 flex justify-center">
                                                    {config ? (
                                                        <Icon name={config.icon} className={`w-4 h-4 ${config.colorClass}`}/>
                                                    ) : (
                                                        <span className="text-xs font-bold text-muted-foreground">{entry.position}</span>
                                                    )}
                                                </div>
                                                <span className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-8 h-8">
                                                    <span className="flex size-full items-center justify-center rounded-full text-xs bg-primary/10 text-primary">
                                                        {entry.initials}
                                                    </span>
                                                </span>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium truncate">{displayName}</p>
                                                    <p className="text-xs text-muted-foreground">Nível 1 • {entry.xp.toLocaleString('pt-BR')} XP</p>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </div>
                        {isStudent &&
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Icon name={'Star'} className="w-4 h-4 text-accent"/>
                                    <h3 className="font-semibold text-sm">Seu Progresso</h3>
                                </div>
                                <div className="p-3 rounded-lg bg-muted/50 space-y-3">
                                    <div>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-xs text-muted-foreground">0 XP</span>
                                            <span className="text-xs text-muted-foreground">Máximo</span>
                                        </div>
                                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                                                style={{width: `${xpPercent}%`}}/>
                                        </div>
                                        <p className="text-xs text-center text-muted-foreground mt-1">
                                            {totalXp.toLocaleString('pt-BR')} / {maxXp.toLocaleString('pt-BR')} XP
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {loading ? (
                                            <p className="text-sm text-muted-foreground">Carregando conquistas...</p>
                                        ) : achievements.length === 0 ? (
                                            <p className="text-sm text-muted-foreground">Nenhuma conquista ainda.</p>
                                        ) : (
                                            <div className="flex flex-wrap gap-3">
                                                {achievements.map((achievement) => {
                                                    const style = typeBadge[achievement.type] || typeBadge.bronze;
                                                    return (
                                                        <span key={achievement.id}
                                                              className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-accent [a&]:hover:text-accent-foreground text-xs ${style.bg} ${style.border}`}>{achievement.name}</span>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </aside>
    </>
}
