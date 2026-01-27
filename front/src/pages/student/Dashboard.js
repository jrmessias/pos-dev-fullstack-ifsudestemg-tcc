export default function StudentDashboard() {

    return (
        <div className="min-h-screen bg-background">
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"></div>
            <aside
                className="fixed left-0 top-0 z-40 h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col transition-all duration-300 ease-in-out w-64 max-lg:translate-x-0">
                <div className="h-16 flex items-center px-4 border-b border-sidebar-border relative"><a
                    className="flex items-center gap-3 transition-all duration-300" href="/dashboard">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-graduation-cap w-5 h-5 text-primary-foreground">
                            <path
                                d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                            <path d="M22 10v6"></path>
                            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                        </svg>
                    </div>
                    <span
                        className="font-bold text-lg whitespace-nowrap transition-all duration-300 opacity-100 translate-x-0">EduGame</span></a>
                    <button data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-panel-left-close w-4 h-4">
                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                            <path d="M9 3v18"></path>
                            <path d="m16 15-3-3 3-3"></path>
                        </svg>
                        <span className="sr-only">Colapsar menu</span></button>
                </div>
                <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto overflow-x-hidden">
                    <div><a
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 bg-sidebar-primary text-sidebar-primary-foreground"
                        href="/dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-layout-dashboard w-5 h-5 shrink-0">
                            <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                            <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                            <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                            <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                        </svg>
                        <span
                            className="text-sm font-medium whitespace-nowrap transition-all duration-300">Dashboard</span></a>
                    </div>
                    <div><a
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        href="/minhas-turmas">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-users w-5 h-5 shrink-0">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span className="text-sm font-medium whitespace-nowrap transition-all duration-300">Minhas Turmas</span></a>
                    </div>
                    <div><a
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        href="/minhas-disciplinas">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-book-open w-5 h-5 shrink-0">
                            <path d="M12 7v14"></path>
                            <path
                                d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                        </svg>
                        <span
                            className="text-sm font-medium whitespace-nowrap transition-all duration-300">Disciplinas</span></a>
                    </div>
                    <div><a
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        href="/minhas-atividades">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-file-text w-5 h-5 shrink-0">
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                            <path d="M10 9H8"></path>
                            <path d="M16 13H8"></path>
                            <path d="M16 17H8"></path>
                        </svg>
                        <span
                            className="text-sm font-medium whitespace-nowrap transition-all duration-300">Atividades</span></a>
                    </div>
                    <div><a
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        href="/meu-progresso">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-trophy w-5 h-5 shrink-0">
                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                            <path d="M4 22h16"></path>
                            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                        </svg>
                        <span className="text-sm font-medium whitespace-nowrap transition-all duration-300">Meu Progresso</span></a>
                    </div>
                </nav>
                <div
                    className="mx-3 mb-4 p-3 rounded-lg bg-sidebar-accent/50 border border-sidebar-border transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-gamepad2 w-4 h-4 text-primary shrink-0">
                            <line x1="6" x2="10" y1="11" y2="11"></line>
                            <line x1="8" x2="8" y1="9" y2="13"></line>
                            <line x1="15" x2="15.01" y1="12" y2="12"></line>
                            <line x1="18" x2="18.01" y1="10" y2="10"></line>
                            <path
                                d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path>
                        </svg>
                        <span
                            className="text-xs font-medium whitespace-nowrap transition-all duration-300">Nivel 8</span>
                    </div>
                    <div
                        className="w-full h-2 bg-sidebar-border rounded-full overflow-hidden transition-all duration-300">
                        <div
                            className="h-full bg-primary rounded-full transition-all"
                            style={{width: "16.6667%"}}
                        />
                    </div>
                    <p className="text-xs text-sidebar-foreground/60 mt-1 transition-all duration-300">2450 XP</p></div>
                <div className="p-2 border-t border-sidebar-border transition-all duration-300 lg:hidden">
                    <button data-slot="tooltip-trigger"
                            className="inline-flex items-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 w-full justify-center text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                            data-state="closed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-panel-left w-4 h-4">
                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                            <path d="M9 3v18"></path>
                        </svg>
                        <span className="sr-only">Expandir menu</span></button>
                </div>
            </aside>
            <aside
                className="fixed right-0 top-0 z-30 h-screen bg-card border-l border-border transition-all duration-300 flex flex-col pt-16 w-72">
                <button data-slot="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground dark:hover:bg-accent/50 size-9 absolute left-0 top-20 -translate-x-1/2 w-6 h-6 rounded-full bg-card border border-border shadow-sm hover:bg-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-chevron-right w-3 h-3">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </button>
                <div dir="ltr" data-slot="scroll-area" className="relative flex-1 px-4 py-4"
                     style={{
                         position: 'relative',
                         '--radixScrollAreaCornerWidth': 0,
                         '--radixScrollAreaCornerHeight': 0
                     }}>
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "[data-radix-scroll-area-viewport]{scrollbar - width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                        }}
                    />
                    <div
                        data-radix-scroll-area-viewport=""
                        data-slot="scroll-area-viewport"
                        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
                        style={{overflow: "hidden scroll"}}
                    >
                        <div style={{minWidth: '100%', display: 'table'}}>
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="lucide lucide-trophy w-4 h-4 text-primary">
                                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                        <path d="M4 22h16"></path>
                                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                    </svg>
                                    <h3 className="font-semibold text-sm">Ranking Geral</h3></div>
                                <div className="space-y-2">
                                    <div
                                        className="flex items-center gap-3 p-2 rounded-lg transition-colors bg-gold/10 border border-gold/20">
                                        <div className="w-6 flex justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="lucide lucide-crown w-4 h-4 text-gold">
                                                <path
                                                    d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                                                <path d="M5 21h14"></path>
                                            </svg>
                                        </div>
                                        <span data-slot="avatar"
                                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-8 h-8"><span
                                            data-slot="avatar-fallback"
                                            className="flex size-full items-center justify-center rounded-full text-xs bg-primary/10 text-primary">AC</span></span>
                                        <div className="flex-1 min-w-0"><p className="text-sm font-medium truncate">Ana
                                            Costa</p><p className="text-xs text-muted-foreground">Nível 10 • 3200 XP</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-2 rounded-lg transition-colors bg-silver/10 border border-silver/20">
                                        <div className="w-6 flex justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="lucide lucide-medal w-4 h-4 text-silver">
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
                                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-8 h-8"><span
                                            data-slot="avatar-fallback"
                                            className="flex size-full items-center justify-center rounded-full text-xs bg-primary/10 text-primary">JS</span></span>
                                        <div className="flex-1 min-w-0"><p className="text-sm font-medium truncate">João
                                            Santos</p><p className="text-xs text-muted-foreground">Nível 8 • 2450 XP</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-2 rounded-lg transition-colors bg-bronze/10 border border-bronze/20">
                                        <div className="w-6 flex justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="lucide lucide-award w-4 h-4 text-bronze">
                                                <path
                                                    d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                                <circle cx="12" cy="8" r="6"></circle>
                                            </svg>
                                        </div>
                                        <span data-slot="avatar"
                                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-8 h-8"><span
                                            data-slot="avatar-fallback"
                                            className="flex size-full items-center justify-center rounded-full text-xs bg-primary/10 text-primary">CM</span></span>
                                        <div className="flex-1 min-w-0"><p
                                            className="text-sm font-medium truncate">Carla Mendes</p><p
                                            className="text-xs text-muted-foreground">Nível 7 • 2100 XP</p></div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-2 rounded-lg transition-colors bg-muted/50">
                                        <div className="w-6 flex justify-center"><span
                                            className="text-xs font-bold text-muted-foreground">4</span></div>
                                        <span data-slot="avatar"
                                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-8 h-8"><span
                                            data-slot="avatar-fallback"
                                            className="flex size-full items-center justify-center rounded-full text-xs bg-primary/10 text-primary">PL</span></span>
                                        <div className="flex-1 min-w-0"><p
                                            className="text-sm font-medium truncate">Pedro Lima</p><p
                                            className="text-xs text-muted-foreground">Nível 6 • 1800 XP</p></div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-2 rounded-lg transition-colors bg-muted/50">
                                        <div className="w-6 flex justify-center"><span
                                            className="text-xs font-bold text-muted-foreground">5</span></div>
                                        <span data-slot="avatar"
                                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-8 h-8"><span
                                            data-slot="avatar-fallback"
                                            className="flex size-full items-center justify-center rounded-full text-xs bg-primary/10 text-primary">LO</span></span>
                                        <div className="flex-1 min-w-0"><p
                                            className="text-sm font-medium truncate">Lucas Oliveira</p><p
                                            className="text-xs text-muted-foreground">Nível 4 • 950 XP</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="lucide lucide-star w-4 h-4 text-accent">
                                        <path
                                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <h3 className="font-semibold text-sm">Seu Progresso</h3></div>
                                <div className="p-3 rounded-lg bg-muted/50 space-y-3">
                                    <div>
                                        <div className="flex justify-between items-center mb-1"><span
                                            className="text-xs text-muted-foreground">Nível 8</span><span
                                            className="text-xs text-muted-foreground">Nível 9</span></div>
                                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                                                style={{width: '16.6667%'}}></div>
                                        </div>
                                        <p className="text-xs text-center text-muted-foreground mt-1">2450 / 2400 XP</p>
                                    </div>
                                    <div className="flex flex-wrap gap-1"><span data-slot="badge"
                                                                                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-xs border-bronze text-bronze">Primeiro Passo</span><span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-xs border-silver text-silver">Estudante Dedicado</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <header
                className="fixed top-0 z-30 h-16 bg-card/80 backdrop-blur-sm border-b border-border transition-all duration-300 flex items-center justify-between px-4 left-64 right-72">
                <div className="flex items-center gap-2"><h1 className="text-lg font-semibold hidden sm:block">Área do
                    Aluno</h1><span data-slot="badge"
                                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-xs capitalize">aluno</span>
                </div>
                <div className="flex items-center gap-2">
                    <button data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-sun w-5 h-5">
                            <circle cx="12" cy="12" r="4"></circle>
                            <path d="M12 2v2"></path>
                            <path d="M12 20v2"></path>
                            <path d="m4.93 4.93 1.41 1.41"></path>
                            <path d="m17.66 17.66 1.41 1.41"></path>
                            <path d="M2 12h2"></path>
                            <path d="M20 12h2"></path>
                            <path d="m6.34 17.66-1.41 1.41"></path>
                            <path d="m19.07 4.93-1.41 1.41"></path>
                        </svg>
                        <span className="sr-only">Alternar tema</span></button>
                    <button data-slot="dropdown-menu-trigger"
                            className="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 py-2 has-[&gt;svg]:px-3 flex items-center gap-2 px-2"
                            type="button" id="radix-_r_g_" aria-haspopup="menu" aria-expanded="false"
                            data-state="closed"><span data-slot="avatar"
                                                      className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-8 h-8"><span
                        data-slot="avatar-fallback"
                        className="flex size-full items-center justify-center rounded-full bg-primary/10 text-primary text-sm">JS</span></span><span
                        className="text-sm font-medium hidden sm:inline">João Santos</span></button>
                </div>
            </header>
            <main className="pt-16 min-h-screen transition-all duration-300 ml-64 mr-72">
                <div className="p-6">
                    <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div><h1 className="text-2xl font-bold">Olá, João!</h1><p
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
                                             data-state="indeterminate" data-max="100" data-slot="progress"
                                             className="bg-primary/20 relative overflow-hidden rounded-full w-24 h-2">
                                            <div data-state="indeterminate" data-max="100"
                                                 data-slot="progress-indicator"
                                                 className="bg-primary h-full w-full flex-1 transition-all"
                                                 style={{transform: 'translateX(-83.3333%)'}}></div>
                                        </div>
                                        <span className="text-xs text-muted-foreground">250 XP para o próximo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <div data-slot="card"
                                 className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
                                <div data-slot="card-content" className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="space-y-1"><p
                                            className="text-sm font-medium text-muted-foreground">Disciplinas</p><p
                                            className="text-3xl font-bold">3</p><p
                                            className="text-xs text-muted-foreground">Disciplinas matriculadas</p></div>
                                        <div className="p-3 rounded-xl bg-primary/10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="lucide lucide-book-open w-6 h-6 text-primary">
                                                <path d="M12 7v14"></path>
                                                <path
                                                    d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-slot="card"
                                 className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
                                <div data-slot="card-content" className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="space-y-1"><p
                                            className="text-sm font-medium text-muted-foreground">Atividades
                                            Concluídas</p><p className="text-3xl font-bold">1</p><p
                                            className="text-xs text-muted-foreground">de 3 atividades</p></div>
                                        <div className="p-3 rounded-xl bg-primary/10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="lucide lucide-file-text w-6 h-6 text-primary">
                                                <path
                                                    d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                                <path d="M10 9H8"></path>
                                                <path d="M16 13H8"></path>
                                                <path d="M16 17H8"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-slot="card"
                                 className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
                                <div data-slot="card-content" className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="space-y-1"><p
                                            className="text-sm font-medium text-muted-foreground">Pontuação Total</p><p
                                            className="text-3xl font-bold">85</p><p
                                            className="text-xs font-medium text-success">+15% em relação ao mês
                                            anterior</p></div>
                                        <div className="p-3 rounded-xl bg-primary/10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="lucide lucide-target w-6 h-6 text-primary">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <circle cx="12" cy="12" r="6"></circle>
                                                <circle cx="12" cy="12" r="2"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-slot="card"
                                 className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
                                <div data-slot="card-content" className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="space-y-1"><p
                                            className="text-sm font-medium text-muted-foreground">Nível Atual</p><p
                                            className="text-3xl font-bold">8</p><p
                                            className="text-xs text-muted-foreground">2450 XP acumulados</p></div>
                                        <div className="p-3 rounded-xl bg-primary/10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="lucide lucide-star w-6 h-6 text-primary">
                                                <path
                                                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                        </div>
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
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="lucide lucide-trophy w-4 h-4 text-primary">
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
                                <div className="flex flex-wrap gap-3">
                                    <div
                                        className="flex items-center gap-2 p-3 rounded-lg border bg-bronze/10 border-bronze/30">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             className="lucide lucide-trophy w-5 h-5 text-bronze">
                                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                            <path d="M4 22h16"></path>
                                            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                            <path
                                                d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                        </svg>
                                        <div><p className="text-sm font-medium">Primeiro Passo</p><p
                                            className="text-xs text-muted-foreground">Complete sua primeira
                                            atividade</p></div>
                                    </div>
                                    <div
                                        className="flex items-center gap-2 p-3 rounded-lg border bg-silver/10 border-silver/30">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             className="lucide lucide-trophy w-5 h-5 text-silver">
                                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                            <path d="M4 22h16"></path>
                                            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                            <path
                                                d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                        </svg>
                                        <div><p className="text-sm font-medium">Estudante Dedicado</p><p
                                            className="text-xs text-muted-foreground">Complete 10 atividades</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-slot="card"
                             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                            <div data-slot="card-header"
                                 className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                                <div data-slot="card-title" className="font-semibold text-base">Atividades Pendentes
                                </div>
                            </div>
                            <div data-slot="card-content" className="px-6">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                        <div><p className="font-medium">Prova Bimestral</p><p
                                            className="text-sm text-muted-foreground">Matemática • Turma A - 9º Ano</p>
                                        </div>
                                        <div className="text-right"><span data-slot="badge"
                                                                          className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90">21 dias</span>
                                            <p className="text-xs text-muted-foreground mt-1">+150 XP</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
