import Icon from "../../components/Icon.js";
import {userStore} from "../../stores/userStore.js";

export default function HomeStudent({leftOpen, rightOpen}) {
    const user = userStore((state) => state.user);

    return <>
        <main className={`pt-16 min-h-screen transition-all duration-300 ${leftOpen ? 'ml-64' : 'ml-16'} ${rightOpen ? 'mr-72' : 'mr-12'}`}>
            <div className="p-6">
                <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div><h1 className="text-2xl font-bold">Olá, {user.name}!</h1><p
                            className="text-muted-foreground">Continue evoluindo e conquistando novos objetivos</p>
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
                                        className="text-3xl font-bold">3</p><p
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
                                        Concluídas</p><p className="text-3xl font-bold">1</p><p
                                        className="text-xs text-muted-foreground">de 3 atividades</p></div>
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
                                        className="text-3xl font-bold">85</p><p
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
                                        className="text-3xl font-bold">8</p><p
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
                            <div className="flex flex-wrap gap-3">
                                <div
                                    className="flex items-center gap-2 p-3 rounded-lg border bg-bronze/10 border-bronze/30">
                                    <Icon name={'Trophy'} className="w-5 h-5 text-bronze"/>
                                    <div><p className="text-sm font-medium">Primeiro Passo</p><p
                                        className="text-xs text-muted-foreground">Completou sua primeira
                                        atividade</p></div>
                                </div>
                                <div
                                    className="flex items-center gap-2 p-3 rounded-lg border bg-silver/10 border-silver/30">
                                    <Icon name={'Trophy'} className="w-6 h-6 text-silver"/>
                                    <div><p className="text-sm font-medium">Estudante Dedicado</p><p
                                        className="text-xs text-muted-foreground">Completou 10 atividades</p></div>
                                </div>
                            </div>
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
                                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                    <div><p className="font-medium">Prova Bimestral</p><p
                                        className="text-sm text-muted-foreground">Matemática • Turma A - 9º Ano</p>
                                    </div>
                                    <div className="text-right"><span
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90">21 dias</span>
                                        <p className="text-xs text-muted-foreground mt-1">+150 XP</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
}
