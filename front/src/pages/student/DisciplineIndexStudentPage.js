export default function DisciplineIndexStudentPage() {
    return <>
        <div className="p-6">
            <div className="space-y-6">
                <div><h1 className="text-2xl font-bold">Minhas Disciplinas</h1><p
                    className="text-muted-foreground">Acompanhe seu progresso em cada disciplina</p></div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div data-slot="card"
                         className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:border-primary/50 transition-colors">
                        <div data-slot="card-header"
                             className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                            <div className="flex items-start justify-between">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round"
                                         className="lucide lucide-book-open w-6 h-6 text-primary">
                                        <path d="M12 7v14"></path>
                                        <path
                                            d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                    </svg>
                                </div>
                                <span data-slot="badge"
                                      className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-success text-success-foreground">Média: 85</span>
                            </div>
                            <div data-slot="card-title" className="leading-none font-semibold mt-4">Matemática</div>
                            <p className="text-sm text-muted-foreground line-clamp-2">Fundamentos de matemática e
                                álgebra</p></div>
                        <div data-slot="card-content" className="px-6">
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-center mb-2"><span
                                        className="text-sm text-muted-foreground">Progresso</span><span
                                        className="text-sm font-medium">33%</span></div>
                                    <div aria-valuemax="100" aria-valuemin="0" role="progressbar"
                                         data-state="indeterminate" data-max="100" data-slot="progress"
                                         className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2">
                                        <div data-state="indeterminate" data-max="100" data-slot="progress-indicator"
                                             className="bg-primary h-full w-full flex-1 transition-all"
                                             style={{transform: 'translateX(-66.6667%)'}}></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                             strokeLinecap="round" strokeLinejoin="round"
                                             className="lucide lucide-file-text w-4 h-4 text-muted-foreground">
                                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                            <path d="M10 9H8"></path>
                                            <path d="M16 13H8"></path>
                                            <path d="M16 17H8"></path>
                                        </svg>
                                        <span>3 atividades</span></div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                             strokeLinecap="round" strokeLinejoin="round"
                                             className="lucide lucide-trophy w-4 h-4 text-accent">
                                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                            <path d="M4 22h16"></path>
                                            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                            <path
                                                d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                        </svg>
                                        <span className="text-accent font-medium">+42 XP</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-slot="card"
                         className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:border-primary/50 transition-colors">
                        <div data-slot="card-header"
                             className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                            <div className="flex items-start justify-between">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round"
                                         className="lucide lucide-book-open w-6 h-6 text-primary">
                                        <path d="M12 7v14"></path>
                                        <path
                                            d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div data-slot="card-title" className="leading-none font-semibold mt-4">Português</div>
                            <p className="text-sm text-muted-foreground line-clamp-2">Língua portuguesa e literatura</p>
                        </div>
                        <div data-slot="card-content" className="px-6">
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-center mb-2"><span
                                        className="text-sm text-muted-foreground">Progresso</span><span
                                        className="text-sm font-medium">100%</span></div>
                                    <div aria-valuemax="100" aria-valuemin="0" role="progressbar"
                                         data-state="indeterminate" data-max="100" data-slot="progress"
                                         className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2">
                                        <div data-state="indeterminate" data-max="100" data-slot="progress-indicator"
                                             className="bg-primary h-full w-full flex-1 transition-all"
                                             style={{transform: 'translateX(0%)'}}></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                             strokeLinecap="round" strokeLinejoin="round"
                                             className="lucide lucide-file-text w-4 h-4 text-muted-foreground">
                                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                            <path d="M10 9H8"></path>
                                            <path d="M16 13H8"></path>
                                            <path d="M16 17H8"></path>
                                        </svg>
                                        <span>1 atividades</span></div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                             strokeLinecap="round" strokeLinejoin="round"
                                             className="lucide lucide-trophy w-4 h-4 text-accent">
                                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                            <path d="M4 22h16"></path>
                                            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                            <path
                                                d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                        </svg>
                                        <span className="text-accent font-medium">+0 XP</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-slot="card"
                         className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:border-primary/50 transition-colors">
                        <div data-slot="card-header"
                             className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                            <div className="flex items-start justify-between">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round"
                                         className="lucide lucide-book-open w-6 h-6 text-primary">
                                        <path d="M12 7v14"></path>
                                        <path
                                            d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div data-slot="card-title" className="leading-none font-semibold mt-4">História</div>
                            <p className="text-sm text-muted-foreground line-clamp-2">História do Brasil e do mundo</p>
                        </div>
                        <div data-slot="card-content" className="px-6">
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-center mb-2"><span
                                        className="text-sm text-muted-foreground">Progresso</span><span
                                        className="text-sm font-medium">0%</span></div>
                                    <div aria-valuemax="100" aria-valuemin="0" role="progressbar"
                                         data-state="indeterminate" data-max="100" data-slot="progress"
                                         className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2">
                                        <div data-state="indeterminate" data-max="100" data-slot="progress-indicator"
                                             className="bg-primary h-full w-full flex-1 transition-all"
                                             style={{transform: 'translateX(-100%)'}}></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                             strokeLinecap="round" strokeLinejoin="round"
                                             className="lucide lucide-file-text w-4 h-4 text-muted-foreground">
                                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                            <path d="M10 9H8"></path>
                                            <path d="M16 13H8"></path>
                                            <path d="M16 17H8"></path>
                                        </svg>
                                        <span>0 atividades</span></div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                             strokeLinecap="round" strokeLinejoin="round"
                                             className="lucide lucide-trophy w-4 h-4 text-accent">
                                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                            <path d="M4 22h16"></path>
                                            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                            <path
                                                d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                        </svg>
                                        <span className="text-accent font-medium">+0 XP</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
