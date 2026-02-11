export default function ProgressIndexStudentPage() {
    return <>
        <div><h1 className="text-2xl font-bold">Meu Progresso</h1><p className="text-muted-foreground">Acompanhe
            sua evolução e conquistas</p></div>
        <div data-slot="card"
             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
            <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className="relative"><span data-slot="avatar"
                                                    className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-24 h-24 border-4 border-background"><span
                        data-slot="avatar-fallback"
                        className="flex size-full items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl">JS</span></span>
                        <div
                            className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold border-2 border-background">8
                        </div>
                    </div>
                    <div className="flex-1"><h2 className="text-2xl font-bold">João Santos</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-medal w-5 h-5 text-silver">
                                <path
                                    d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path>
                                <path d="M11 12 5.12 2.2"></path>
                                <path d="m13 12 5.88-9.8"></path>
                                <path d="M8 7h8"></path>
                                <circle cx="12" cy="17" r="5"></circle>
                                <path d="M12 18v-2h-.5"></path>
                            </svg>
                            <span className="text-muted-foreground">2º lugar no ranking geral</span></div>
                        <div className="mt-4">
                            <div className="flex justify-between items-center mb-2"><span
                                className="text-sm">Nível 8</span><span
                                className="text-sm">Nível 9</span></div>
                            <div aria-valuemax="100" aria-valuemin="0" role="progressbar"
                                 data-state="indeterminate" data-max="100" data-slot="progress"
                                 className="bg-primary/20 relative w-full overflow-hidden rounded-full h-3">
                                <div data-state="indeterminate" data-max="100" data-slot="progress-indicator"
                                     className="bg-primary h-full w-full flex-1 transition-all"
                                     style={{transform: 'translateX(-83.3333%)'}}></div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1 text-center">2450 XP • Faltam 250
                                XP para o próximo nível</p></div>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-star w-6 h-6 text-primary">
                                <path
                                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                        </div>
                        <div><p className="text-sm text-muted-foreground">XP Total</p><p
                            className="text-2xl font-bold">2.450</p></div>
                    </div>
                </div>
            </div>
            <div data-slot="card"
                 className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                <div data-slot="card-content" className="px-6 pt-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-accent/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-target w-6 h-6 text-accent">
                                <circle cx="12" cy="12" r="10"></circle>
                                <circle cx="12" cy="12" r="6"></circle>
                                <circle cx="12" cy="12" r="2"></circle>
                            </svg>
                        </div>
                        <div><p className="text-sm text-muted-foreground">Média Geral</p><p
                            className="text-2xl font-bold">85</p></div>
                    </div>
                </div>
            </div>
            <div data-slot="card"
                 className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                <div data-slot="card-content" className="px-6 pt-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-success/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="lucide lucide-trending-up w-6 h-6 text-success">
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                <polyline points="16 7 22 7 22 13"></polyline>
                            </svg>
                        </div>
                        <div><p className="text-sm text-muted-foreground">Atividades</p><p
                            className="text-2xl font-bold">1</p></div>
                    </div>
                </div>
            </div>
            <div data-slot="card"
                 className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                <div data-slot="card-content" className="px-6 pt-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-gold/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-trophy w-6 h-6 text-gold">
                                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                <path d="M4 22h16"></path>
                                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                            </svg>
                        </div>
                        <div><p className="text-sm text-muted-foreground">Medalhas</p><p
                            className="text-2xl font-bold">2</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div data-slot="card"
             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-header"
                 className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div data-slot="card-title" className="leading-none font-semibold flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round" className="lucide lucide-trophy w-5 h-5 text-primary">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                        <path d="M4 22h16"></path>
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                    </svg>
                    Minhas Conquistas
                </div>
            </div>
            <div data-slot="card-content" className="px-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div
                        className="flex items-center gap-3 p-4 rounded-xl border bg-bronze/10 border-bronze/30">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-bronze/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-trophy w-6 h-6 text-bronze">
                                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                <path d="M4 22h16"></path>
                                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                            </svg>
                        </div>
                        <div><p className="font-semibold">Primeiro Passo</p><p
                            className="text-sm text-muted-foreground">Complete sua primeira atividade</p></div>
                    </div>
                    <div
                        className="flex items-center gap-3 p-4 rounded-xl border bg-silver/10 border-silver/30">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-silver/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-trophy w-6 h-6 text-silver">
                                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                <path d="M4 22h16"></path>
                                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                            </svg>
                        </div>
                        <div><p className="font-semibold">Estudante Dedicado</p><p
                            className="text-sm text-muted-foreground">Complete 10 atividades</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div data-slot="card"
             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-header"
                 className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div data-slot="card-title" className="font-semibold flex items-center gap-2 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round" className="lucide lucide-trophy w-4 h-4 text-primary">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                        <path d="M4 22h16"></path>
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                    </svg>
                    Sua Posição no Ranking
                </div>
            </div>
            <div data-slot="card-content" className="px-6">
                <div className="space-y-3">
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                        <div className="w-8 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-crown w-5 h-5 text-gold">
                                <path
                                    d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                                <path d="M5 21h14"></path>
                            </svg>
                        </div>
                        <span data-slot="avatar"
                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-10 h-10"><span
                            data-slot="avatar-fallback"
                            className="flex size-full items-center justify-center rounded-full bg-muted">AC</span></span>
                        <div className="flex-1"><p className="font-medium">Ana Costa</p><p
                            className="text-sm text-muted-foreground">Nível 10</p></div>
                        <div className="text-right"><p className="font-bold">3.200 XP</p></div>
                    </div>
                    <div
                        className="flex items-center gap-4 p-3 rounded-lg bg-primary/10 border border-primary/30">
                        <div className="w-8 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-medal w-5 h-5 text-silver">
                                <path
                                    d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path>
                                <path d="M11 12 5.12 2.2"></path>
                                <path d="m13 12 5.88-9.8"></path>
                                <path d="M8 7h8"></path>
                                <circle cx="12" cy="17" r="5"></circle>
                                <path d="M12 18v-2h-.5"></path>
                            </svg>
                        </div>
                        <span data-slot="avatar"
                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-10 h-10"><span
                            data-slot="avatar-fallback"
                            className="flex size-full items-center justify-center rounded-full bg-primary text-primary-foreground">JS</span></span>
                        <div className="flex-1"><p className="font-medium text-primary">João Santos (Você)</p><p
                            className="text-sm text-muted-foreground">Nível 8</p></div>
                        <div className="text-right"><p className="font-bold">2.450 XP</p></div>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                        <div className="w-8 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-award w-5 h-5 text-bronze">
                                <path
                                    d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                <circle cx="12" cy="8" r="6"></circle>
                            </svg>
                        </div>
                        <span data-slot="avatar"
                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-10 h-10"><span
                            data-slot="avatar-fallback"
                            className="flex size-full items-center justify-center rounded-full bg-muted">CM</span></span>
                        <div className="flex-1"><p className="font-medium">Carla Mendes</p><p
                            className="text-sm text-muted-foreground">Nível 7</p></div>
                        <div className="text-right"><p className="font-bold">2.100 XP</p></div>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                        <div className="w-8 flex justify-center"><span
                            className="font-bold text-muted-foreground">4</span></div>
                        <span data-slot="avatar"
                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-10 h-10"><span
                            data-slot="avatar-fallback"
                            className="flex size-full items-center justify-center rounded-full bg-muted">PL</span></span>
                        <div className="flex-1"><p className="font-medium">Pedro Lima</p><p
                            className="text-sm text-muted-foreground">Nível 6</p></div>
                        <div className="text-right"><p className="font-bold">1.800 XP</p></div>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                        <div className="w-8 flex justify-center"><span
                            className="font-bold text-muted-foreground">5</span></div>
                        <span data-slot="avatar"
                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-10 h-10"><span
                            data-slot="avatar-fallback"
                            className="flex size-full items-center justify-center rounded-full bg-muted">LO</span></span>
                        <div className="flex-1"><p className="font-medium">Lucas Oliveira</p><p
                            className="text-sm text-muted-foreground">Nível 4</p></div>
                        <div className="text-right"><p className="font-bold">950 XP</p></div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
