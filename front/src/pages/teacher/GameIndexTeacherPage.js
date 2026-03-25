import { useEffect, useState } from "react";
import Icon from "@/components/Icon.js";
import { Loading } from "@/components/Loading.js";
import { teacherGamification } from "@/services/teacherService.js";

const TOP3_CONFIG = [
    { position: 2, borderColor: "border-silver", bgColor: "bg-silver/20", size: "w-16 h-16", podiumHeight: "h-20", icon: "Medal", iconColor: "text-silver", badgeClass: "bg-secondary text-secondary-foreground", label: "2º Lugar" },
    { position: 1, borderColor: "border-gold", bgColor: "bg-gold/20", size: "w-20 h-20", podiumHeight: "h-28", icon: "Crown", iconColor: "text-gold", badgeClass: "bg-gold/20 text-gold-foreground hover:bg-gold/90", label: "1º Lugar", featured: true },
    { position: 3, borderColor: "border-bronze", bgColor: "bg-bronze/20", size: "w-14 h-14", podiumHeight: "h-14", icon: "Award", iconColor: "text-bronze", badgeClass: "border-bronze text-bronze", label: "3º Lugar" },
];

export default function GameIndexTeacherPage() {
    const [top3, setTop3] = useState([]);
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        teacherGamification()
            .then((res) => {
                setTop3(res.data.top3 || []);
                setStats(res.data.stats || null);
            })
            .finally(() => setLoading(false));
    }, []);

    const podiumOrder = TOP3_CONFIG.map((cfg) => ({
        ...cfg,
        student: top3.find((s) => s.position === cfg.position) || null,
    }));

    return <>
        <div className="p-6">
            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold">Gamificação</h1>
                    <p className="text-muted-foreground">Acompanhe o desempenho e premiações dos alunos</p>
                </div>

                <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
                    <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                        <div data-slot="card-title" className="leading-none font-semibold flex items-center gap-2">
                            <Icon name="Crown" className="w-5 h-5 text-primary" />
                            Top 3 Geral
                        </div>
                    </div>
                    <div data-slot="card-content" className="px-6 pt-6">
                        {loading ? (
                            <div className="py-6 flex justify-center"><Loading /></div>
                        ) : top3.length === 0 ? (
                            <p className="text-sm text-muted-foreground text-center py-6">Nenhum aluno com XP registrado.</p>
                        ) : (
                            <div className="flex items-end justify-center gap-4">
                                {podiumOrder.map((cfg) => {
                                    if (!cfg.student) return null;
                                    const s = cfg.student;
                                    return (
                                        <div key={cfg.position} className={`flex flex-col items-center${cfg.featured ? " -mt-8" : ""}`}>
                                            <span data-slot="avatar" className={`relative flex size-8 shrink-0 overflow-hidden rounded-full ${cfg.size} border-4 ${cfg.borderColor}`}>
                                                <span data-slot="avatar-fallback" className={`flex size-full items-center justify-center rounded-full ${cfg.bgColor} ${cfg.featured ? "text-xl" : "text-lg"}`}>{s.initials}</span>
                                            </span>
                                            <div className="mt-2 text-center">
                                                <p className={`font-semibold${cfg.featured ? " text-lg" : ""}`}>{s.name}</p>
                                                <span data-slot="badge" className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden border-transparent ${cfg.badgeClass}`}>
                                                    <Icon name={cfg.icon} className={`w-3 h-3 mr-1 ${cfg.iconColor}`} />
                                                    {cfg.label}
                                                </span>
                                                <p className="text-sm text-muted-foreground mt-1">{s.xp.toLocaleString("pt-BR")} XP</p>
                                            </div>
                                            <div className={`w-24 ${cfg.podiumHeight} ${cfg.bgColor} rounded-t-lg mt-2`}></div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                    <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                        <div data-slot="card-content" className="px-6 pt-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-primary/10">
                                    <Icon name="Star" className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">XP Total Distribuído</p>
                                    <p className="text-2xl font-bold">
                                        {loading ? "—" : (stats?.totalXpDistributed ?? 0).toLocaleString("pt-BR")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                        <div data-slot="card-content" className="px-6 pt-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-accent/10">
                                    <Icon name="TrendingUp" className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Nível Médio</p>
                                    <p className="text-2xl font-bold">
                                        {loading ? "—" : (stats?.averageLevel ?? 1)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                        <div data-slot="card-content" className="px-6 pt-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-gold/10">
                                    <Icon name="Trophy" className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Total de Conquistas</p>
                                    <p className="text-2xl font-bold">
                                        {loading ? "—" : (stats?.totalAchievements ?? 0)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div dir="ltr" data-orientation="horizontal" data-slot="tabs" className="flex flex-col gap-2 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div role="tablist" aria-orientation="horizontal" data-slot="tabs-list"
                             className="bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px] outline-none"
                             tabIndex="0" data-orientation="horizontal">
                            <button type="button" role="tab" aria-selected="true"
                                    data-state="active"
                                    data-slot="tabs-trigger"
                                    className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                                    tabIndex="-1" data-orientation="horizontal">Ranking Geral
                            </button>
                            <button type="button" role="tab" aria-selected="false"
                                    data-state="inactive"
                                    data-slot="tabs-trigger"
                                    className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                                    tabIndex="-1" data-orientation="horizontal">Por Turma
                            </button>
                            <button type="button" role="tab" aria-selected="false"
                                    data-state="inactive"
                                    data-slot="tabs-trigger"
                                    className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                                    tabIndex="-1" data-orientation="horizontal">Por Disciplina
                            </button>
                        </div>
                        <div className="flex gap-2">
                            <button type="button" role="combobox" aria-expanded="false" dir="ltr" data-state="closed" data-slot="select-trigger" data-size="default"
                                    className="border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 w-40">
                                <span data-slot="select-value" className="pointer-events-none">Todas as Turmas</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down size-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                            </button>
                            <button type="button" role="combobox" aria-expanded="false" dir="ltr" data-state="closed" data-slot="select-trigger" data-size="default"
                                    className="border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 w-40">
                                <span data-slot="select-value" className="pointer-events-none">Todas</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down size-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div data-state="active" data-orientation="horizontal" role="tabpanel" tabIndex="0" data-slot="tabs-content" className="flex-1 outline-none" style={{ animationDuration: 0 }}>
                        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                                <div data-slot="card-title" className="font-semibold flex items-center gap-2 text-base">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-4 h-4 text-primary">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                    Ranking de Alunos
                                </div>
                            </div>
                            <div data-slot="card-content" className="px-6">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-4 p-4 rounded-lg transition-colors bg-gold/5 border border-gold/20">
                                        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crown w-5 h-5 text-gold"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
                                        </div>
                                        <span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-12 h-12"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-primary/10 text-primary">AC</span></span>
                                        <div className="flex-1"><p className="font-semibold">Ana Costa</p>
                                            <div className="flex items-center gap-2 mt-1"><span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground">Nível 10</span><span className="text-sm text-muted-foreground">3.200 XP</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex flex-wrap gap-1 justify-end mb-2">
                                                <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden text-xs border-bronze text-bronze">Primeiro Passo</span>
                                                <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden text-xs border-silver text-silver">Estudante Dedicado</span>
                                                <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden text-xs border-gold text-gold">Mestre do Conhecimento</span>
                                            </div>
                                            <div className="w-32">
                                                <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-slot="progress" className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2"><div data-slot="progress-indicator" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: "translateX(-33.3333%)" }}></div></div>
                                                <p className="text-xs text-muted-foreground mt-1 text-right">100 XP para nível 11</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-lg transition-colors bg-silver/5 border border-silver/20">
                                        <div className="w-10 h-10 rounded-full bg-silver/20 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-medal w-5 h-5 text-silver"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path><path d="M11 12 5.12 2.2"></path><path d="m13 12 5.88-9.8"></path><path d="M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></svg>
                                        </div>
                                        <span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-12 h-12"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-primary/10 text-primary">JS</span></span>
                                        <div className="flex-1"><p className="font-semibold">João Santos</p>
                                            <div className="flex items-center gap-2 mt-1"><span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground">Nível 8</span><span className="text-sm text-muted-foreground">2.450 XP</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex flex-wrap gap-1 justify-end mb-2">
                                                <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden text-xs border-bronze text-bronze">Primeiro Passo</span>
                                                <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden text-xs border-silver text-silver">Estudante Dedicado</span>
                                            </div>
                                            <div className="w-32">
                                                <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-slot="progress" className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2"><div data-slot="progress-indicator" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: "translateX(-83.3333%)" }}></div></div>
                                                <p className="text-xs text-muted-foreground mt-1 text-right">250 XP para nível 9</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-lg transition-colors bg-bronze/5 border border-bronze/20">
                                        <div className="w-10 h-10 rounded-full bg-bronze/20 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-5 h-5 text-bronze"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                                        </div>
                                        <span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-12 h-12"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-primary/10 text-primary">CM</span></span>
                                        <div className="flex-1"><p className="font-semibold">Carla Mendes</p>
                                            <div className="flex items-center gap-2 mt-1"><span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground">Nível 7</span><span className="text-sm text-muted-foreground">2.100 XP</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex flex-wrap gap-1 justify-end mb-2">
                                                <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden text-xs border-bronze text-bronze">Primeiro Passo</span>
                                                <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden text-xs border-silver text-silver">Estudante Dedicado</span>
                                            </div>
                                            <div className="w-32">
                                                <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-slot="progress" className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2"><div data-slot="progress-indicator" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: "translateX(-100%)" }}></div></div>
                                                <p className="text-xs text-muted-foreground mt-1 text-right">300 XP para nível 8</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-lg transition-colors bg-muted/30">
                                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"><span className="font-bold text-muted-foreground">4</span></div>
                                        <span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-12 h-12"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-primary/10 text-primary">PL</span></span>
                                        <div className="flex-1"><p className="font-semibold">Pedro Lima</p>
                                            <div className="flex items-center gap-2 mt-1"><span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground">Nível 6</span><span className="text-sm text-muted-foreground">1.800 XP</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex flex-wrap gap-1 justify-end mb-2">
                                                <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden text-xs border-bronze text-bronze">Primeiro Passo</span>
                                            </div>
                                            <div className="w-32">
                                                <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-slot="progress" className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2"><div data-slot="progress-indicator" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: "translateX(-100%)" }}></div></div>
                                                <p className="text-xs text-muted-foreground mt-1 text-right">300 XP para nível 7</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-lg transition-colors bg-muted/30">
                                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"><span className="font-bold text-muted-foreground">5</span></div>
                                        <span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-12 h-12"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-primary/10 text-primary">LO</span></span>
                                        <div className="flex-1"><p className="font-semibold">Lucas Oliveira</p>
                                            <div className="flex items-center gap-2 mt-1"><span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground">Nível 4</span><span className="text-sm text-muted-foreground">950 XP</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex flex-wrap gap-1 justify-end mb-2">
                                                <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden text-xs border-bronze text-bronze">Primeiro Passo</span>
                                            </div>
                                            <div className="w-32">
                                                <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-slot="progress" className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2"><div data-slot="progress-indicator" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: "translateX(-83.3333%)" }}></div></div>
                                                <p className="text-xs text-muted-foreground mt-1 text-right">250 XP para nível 5</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-state="inactive" data-orientation="horizontal" role="tabpanel" hidden tabIndex="0" data-slot="tabs-content" className="flex-1 outline-none"></div>
                    <div data-state="inactive" data-orientation="horizontal" role="tabpanel" hidden tabIndex="0" data-slot="tabs-content" className="flex-1 outline-none"></div>
                </div>
            </div>
        </div>
    </>;
}
