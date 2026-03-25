import { useEffect, useState, useCallback } from "react";
import Icon from "@/components/Icon.js";
import { Loading } from "@/components/Loading.js";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";
import { teacherGamification, teacherRanking, teacherDisciplinesWithActivities } from "@/services/teacherService.js";

const TOP3_CONFIG = [
    { position: 2, borderColor: "border-silver", bgColor: "bg-silver/20", size: "w-16 h-16", podiumHeight: "h-20", icon: "Medal", iconColor: "text-silver", badgeClass: "bg-secondary text-secondary-foreground", label: "2º Lugar" },
    { position: 1, borderColor: "border-gold", bgColor: "bg-gold/20", size: "w-20 h-20", podiumHeight: "h-28", icon: "Crown", iconColor: "text-gold", badgeClass: "bg-gold text-gold-foreground hover:bg-gold/90", label: "1º Lugar", featured: true },
    { position: 3, borderColor: "border-bronze", bgColor: "bg-bronze/20", size: "w-14 h-14", podiumHeight: "h-14", icon: "Award", iconColor: "text-bronze", badgeClass: "border-bronze text-bronze", label: "3º Lugar" },
];

const POSITION_CONFIG = {
    1: { icon: "Crown", iconColor: "text-gold", bg: "bg-gold/20", border: "border border-gold/20", rowBg: "bg-gold/5" },
    2: { icon: "Medal", iconColor: "text-silver", bg: "bg-silver/20", border: "border border-silver/20", rowBg: "bg-silver/5" },
    3: { icon: "Award", iconColor: "text-bronze", bg: "bg-bronze/20", border: "border border-bronze/20", rowBg: "bg-bronze/5" },
};

export default function GameIndexTeacherPage() {
    const [top3, setTop3] = useState([]);
    const [stats, setStats] = useState(null);
    const [loadingTop3, setLoadingTop3] = useState(true);

    const [disciplines, setDisciplines] = useState([]);
    const [activeTab, setActiveTab] = useState("geral");
    const [selectedDiscipline, setSelectedDiscipline] = useState("");
    const [selectedActivity, setSelectedActivity] = useState("");
    const [ranking, setRanking] = useState([]);
    const [loadingRanking, setLoadingRanking] = useState(false);

    useEffect(() => {
        teacherGamification()
            .then((res) => {
                setTop3(res.data.top3 || []);
                setStats(res.data.stats || null);
            })
            .finally(() => setLoadingTop3(false));

        teacherDisciplinesWithActivities()
            .then((res) => setDisciplines(res.data || []));
    }, []);

    const availableActivities = selectedDiscipline
        ? (disciplines.find((d) => String(d.id) === selectedDiscipline)?.activities || [])
        : disciplines.flatMap((d) => d.activities);

    const fetchRanking = useCallback((tab, disciplineId, activityId) => {
        const params = {};
        if (tab === "disciplina" && disciplineId) params.disciplineId = disciplineId;
        if (tab === "atividade") {
            if (activityId) params.activityId = activityId;
            else if (disciplineId) params.disciplineId = disciplineId;
        }
        if (tab === "geral") {
            if (disciplineId) params.disciplineId = disciplineId;
            if (activityId) params.activityId = activityId;
        }
        setLoadingRanking(true);
        teacherRanking(Object.keys(params).length ? params : undefined)
            .then((res) => setRanking(res.data || []))
            .finally(() => setLoadingRanking(false));
    }, []);

    useEffect(() => {
        fetchRanking(activeTab, selectedDiscipline, selectedActivity);
    }, [activeTab, selectedDiscipline, selectedActivity, fetchRanking]);

    function handleDisciplineChange(value) {
        const next = value === "__all__" ? "" : value;
        setSelectedDiscipline(next);
        setSelectedActivity("");
    }

    function handleActivityChange(value) {
        setSelectedActivity(value === "__all__" ? "" : value);
    }

    function handleTabChange(value) {
        setActiveTab(value);
        setSelectedActivity("");
    }

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
                        {loadingTop3 ? (
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
                                        {loadingTop3 ? "—" : (stats?.totalXpDistributed ?? 0).toLocaleString("pt-BR")}
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
                                        {loadingTop3 ? "—" : (stats?.averageLevel ?? 1)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                        <div data-slot="card-content" className="px-6 pt-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-gold/10">
                                    <Icon name="Medal" className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Total de Medalhas</p>
                                    <p className="text-2xl font-bold">
                                        {loadingTop3 ? "—" : (stats?.totalAchievements ?? 0)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Tabs value={activeTab} onValueChange={handleTabChange}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <TabsList>
                            <TabsTrigger value="geral">Ranking Geral</TabsTrigger>
                            <TabsTrigger value="disciplina">Por Disciplina</TabsTrigger>
                            <TabsTrigger value="atividade">Por Atividade</TabsTrigger>
                        </TabsList>
                        <div className="flex gap-2">
                            <Select value={selectedDiscipline || "__all__"} onValueChange={handleDisciplineChange}>
                                <SelectTrigger className="w-48">
                                    <SelectValue placeholder="Todas as Turmas" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="__all__">Todas as Turmas</SelectItem>
                                    {disciplines.map((d) => (
                                        <SelectItem key={d.id} value={String(d.id)}>{d.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select value={selectedActivity || "__all__"} onValueChange={handleActivityChange}>
                                <SelectTrigger className="w-48">
                                    <SelectValue placeholder="Todas as Atividades" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="__all__">Todas as Atividades</SelectItem>
                                    {availableActivities.map((a) => (
                                        <SelectItem key={a.id} value={String(a.id)}>{a.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {["geral", "disciplina", "atividade"].map((tab) => (
                        <TabsContent key={tab} value={tab}>
                            <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                                <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                                    <div data-slot="card-title" className="font-semibold flex items-center gap-2 text-base">
                                        <Icon name="Users" className="w-4 h-4 text-primary" />
                                        Ranking de Alunos
                                    </div>
                                </div>
                                <div data-slot="card-content" className="px-6">
                                    {loadingRanking ? (
                                        <div className="py-6 flex justify-center"><Loading /></div>
                                    ) : ranking.length === 0 ? (
                                        <p className="text-sm text-muted-foreground text-center py-6">Nenhum aluno com XP registrado para este filtro.</p>
                                    ) : (
                                        <div className="space-y-3">
                                            {ranking.map((student) => {
                                                const cfg = POSITION_CONFIG[student.position];
                                                return (
                                                    <div key={student.position} className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${cfg ? `${cfg.rowBg} ${cfg.border}` : "bg-muted/30"}`}>
                                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${cfg ? cfg.bg : "bg-muted"}`}>
                                                            {cfg ? (
                                                                <Icon name={cfg.icon} className={`w-5 h-5 ${cfg.iconColor}`} />
                                                            ) : (
                                                                <span className="font-bold text-muted-foreground">{student.position}</span>
                                                            )}
                                                        </div>
                                                        <span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-12 h-12">
                                                            <span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-primary/10 text-primary">{student.initials}</span>
                                                        </span>
                                                        <div className="flex-1">
                                                            <p className="font-semibold">{student.name}</p>
                                                            <div className="flex items-center gap-2 mt-1">
                                                                <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap border-transparent bg-secondary text-secondary-foreground">
                                                                    Nível {student.level}
                                                                </span>
                                                                <span className="text-sm text-muted-foreground">{student.xp.toLocaleString("pt-BR")} XP</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </div>
    </>;
}
