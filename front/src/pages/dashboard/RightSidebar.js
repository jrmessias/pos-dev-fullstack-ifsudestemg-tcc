import Icon from "../../components/Icon.js";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip.jsx";
import {useEffect, useState} from "react";
import {studentAchievements} from "@/services/studentService.js";

export default function RightSidebar({type, rightOpen, setRightOpen}) {
    const isStudent = type === 'student';
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [achievements, setAchievements] = useState([]);
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

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            setError(null);

            try {
                const achievementsRes = await studentAchievements();
                setAchievements(achievementsRes.data || []);
            } catch (err) {
                const message = err?.response?.data?.message || "Não foi possível carregar as atividades do aluno.";
                setError(message);
            } finally {
                setLoading(false);
            }
        }

        loadData();

    }, []);

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
                                <h3 className="font-semibold text-sm">Ranking Geral</h3></div>
                            <div className="space-y-2">
                                <div
                                    className="flex items-center gap-3 p-2 rounded-lg transition-colors bg-gold/10 border border-gold/20">
                                    <div className="w-6 flex justify-center">
                                        <Icon name={'Crown'} className="w-4 h-4 text-gold"/>
                                    </div>
                                    <span
                                        className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-8 h-8"><span
                                        className="flex size-full items-center justify-center rounded-full text-xs bg-primary/10 text-primary">AC</span></span>
                                    <div className="flex-1 min-w-0"><p className="text-sm font-medium truncate">Ana
                                        Costa</p><p className="text-xs text-muted-foreground">Nível 10 • 3200 XP</p>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center gap-3 p-2 rounded-lg transition-colors bg-silver/10 border border-silver/20">
                                    <div className="w-6 flex justify-center">
                                        <Icon name={'Medal'} className="w-4 h-4 text-silver"/>
                                    </div>
                                    <span
                                        className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-8 h-8"><span

                                        className="flex size-full items-center justify-center rounded-full text-xs bg-primary/10 text-primary">JS</span></span>
                                    <div className="flex-1 min-w-0"><p className="text-sm font-medium truncate">João
                                        Santos</p><p className="text-xs text-muted-foreground">Nível 8 • 2450 XP</p>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center gap-3 p-2 rounded-lg transition-colors bg-bronze/10 border border-bronze/20">
                                    <div className="w-6 flex justify-center">
                                        <Icon name={'Award'} className="w-4 h-4 text-bronze"/>
                                    </div>
                                    <span
                                        className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-8 h-8"><span

                                        className="flex size-full items-center justify-center rounded-full text-xs bg-primary/10 text-primary">CM</span></span>
                                    <div className="flex-1 min-w-0"><p
                                        className="text-sm font-medium truncate">Carla Mendes</p><p
                                        className="text-xs text-muted-foreground">Nível 7 • 2100 XP</p></div>
                                </div>
                                <div
                                    className="flex items-center gap-3 p-2 rounded-lg transition-colors bg-muted/50">
                                    <div className="w-6 flex justify-center"><span
                                        className="text-xs font-bold text-muted-foreground">4</span></div>
                                    <span
                                        className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-8 h-8"><span
                                        className="flex size-full items-center justify-center rounded-full text-xs bg-primary/10 text-primary">PL</span></span>
                                    <div className="flex-1 min-w-0"><p
                                        className="text-sm font-medium truncate">Pedro Lima</p><p
                                        className="text-xs text-muted-foreground">Nível 6 • 1800 XP</p></div>
                                </div>
                                <div
                                    className="flex items-center gap-3 p-2 rounded-lg transition-colors bg-muted/50">
                                    <div className="w-6 flex justify-center"><span
                                        className="text-xs font-bold text-muted-foreground">5</span></div>
                                    <span
                                        className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-8 h-8"><span

                                        className="flex size-full items-center justify-center rounded-full text-xs bg-primary/10 text-primary">LO</span></span>
                                    <div className="flex-1 min-w-0"><p
                                        className="text-sm font-medium truncate">Lucas Oliveira</p><p
                                        className="text-xs text-muted-foreground">Nível 4 • 950 XP</p></div>
                                </div>
                            </div>
                        </div>
                        {isStudent &&
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Icon name={'Star'} className="w-4 h-4 text-accent"/>
                                    <h3 className="font-semibold text-sm">Seu Progresso</h3></div>
                                <div className="p-3 rounded-lg bg-muted/50 space-y-3">
                                    <div>
                                        <div className="flex justify-between items-center mb-1"><span
                                            className="text-xs text-muted-foreground">Nível 8</span><span
                                            className="text-xs text-muted-foreground">Nível 9</span></div>
                                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all w-1/6"></div>
                                        </div>
                                        <p className="text-xs text-center text-muted-foreground mt-1">2450 / 2400 XP</p>
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
