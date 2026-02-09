export default function ActivityIndexStudentPage() {
    return <>
        <div className="p-6">
            <div className="space-y-6">
                <div><h1 className="text-2xl font-bold">Minhas Atividades</h1><p
                    className="text-muted-foreground">Visualize e envie suas atividades</p></div>
                <div className="grid gap-4 sm:grid-cols-3">
                    <div data-slot="card"
                         className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                        <div data-slot="card-content" className="px-6 pt-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-warning/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="lucide lucide-clock w-6 h-6 text-warning">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </div>
                                <div><p className="text-sm text-muted-foreground">Pendentes</p><p
                                    className="text-2xl font-bold">1</p></div>
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
                                         className="lucide lucide-circle-check-big w-6 h-6 text-success">
                                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                        <path d="m9 11 3 3L22 4"></path>
                                    </svg>
                                </div>
                                <div><p className="text-sm text-muted-foreground">Concluídas</p><p
                                    className="text-2xl font-bold">2</p></div>
                            </div>
                        </div>
                    </div>
                    <div data-slot="card"
                         className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                        <div data-slot="card-content" className="px-6 pt-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-primary/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round"
                                         className="lucide lucide-file-text w-6 h-6 text-primary">
                                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                        <path d="M10 9H8"></path>
                                        <path d="M16 13H8"></path>
                                        <path d="M16 17H8"></path>
                                    </svg>
                                </div>
                                <div><p className="text-sm text-muted-foreground">Total</p><p
                                    className="text-2xl font-bold">3</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div dir="ltr" data-orientation="horizontal" data-slot="tabs" className="flex flex-col gap-2 space-y-4">
                    <div role="tablist" aria-orientation="horizontal" data-slot="tabs-list"
                         className="bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px] outline-none"
                         tabIndex="0" data-orientation="horizontal">
                        <button type="button" role="tab" aria-selected="true"
                                aria-controls="radix-_r_j_-content-pendentes" data-state="active"
                                id="radix-_r_j_-trigger-pendentes" data-slot="tabs-trigger"
                                className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4"
                                tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="">Pendentes (1)
                        </button>
                        <button type="button" role="tab" aria-selected="false"
                                aria-controls="radix-_r_j_-content-concluidas" data-state="inactive"
                                id="radix-_r_j_-trigger-concluidas" data-slot="tabs-trigger"
                                className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4"
                                tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="">Concluídas (2)
                        </button>
                        <button type="button" role="tab" aria-selected="false" aria-controls="radix-_r_j_-content-todas"
                                data-state="inactive" id="radix-_r_j_-trigger-todas" data-slot="tabs-trigger"
                                className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4"
                                tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="">Todas (3)
                        </button>
                    </div>
                    <div data-state="active" data-orientation="horizontal" role="tabpanel"
                         aria-labelledby="radix-_r_j_-trigger-pendentes" id="radix-_r_j_-content-pendentes" tabIndex="0"
                         data-slot="tabs-content" className="flex-1 outline-none" style={{animationDuration: 0}}>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <div data-slot="card"
                                 className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:border-primary/50 transition-colors">
                                <div data-slot="card-header"
                                     className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3">
                                    <div className="flex items-start justify-between"><span data-slot="badge"
                                                                                            className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-chart-4/20 text-chart-4 border-chart-4/30">Prova</span><span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-clock w-3 h-3 mr-1"><circle
                                        cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>21 dias</span>
                                    </div>
                                    <div data-slot="card-title" className="font-semibold text-lg mt-2">Prova Bimestral
                                    </div>
                                    <p className="text-sm text-muted-foreground">Matemática • sadfrsfd</p></div>
                                <div data-slot="card-content" className="px-6"><p
                                    className="text-sm text-muted-foreground line-clamp-2 mb-4">Prova sobre todo o
                                    conteúdo do bimestre</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2"><span data-slot="badge"
                                                                                       className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90">300 pts</span><span
                                            data-slot="badge"
                                            className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-accent text-accent"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            className="lucide lucide-trophy w-3 h-3 mr-1"><path
                                            d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path
                                            d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path
                                            d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path
                                            d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path
                                            d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>150 XP</span></div>
                                        <div className="flex gap-1">
                                            <button data-slot="button"
                                                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                     className="lucide lucide-eye w-4 h-4">
                                                    <path
                                                        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                            </button>
                                            <button data-slot="button"
                                                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                     className="lucide lucide-send w-4 h-4 mr-1">
                                                    <path
                                                        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                                    <path d="m21.854 2.147-10.94 10.939"></path>
                                                </svg>
                                                Enviar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-state="inactive" data-orientation="horizontal" role="tabpanel"
                         aria-labelledby="radix-_r_j_-trigger-concluidas" hidden="" id="radix-_r_j_-content-concluidas"
                         tabIndex="0" data-slot="tabs-content" className="flex-1 outline-none"></div>
                    <div data-state="inactive" data-orientation="horizontal" role="tabpanel"
                         aria-labelledby="radix-_r_j_-trigger-todas" hidden="" id="radix-_r_j_-content-todas"
                         tabIndex="0" data-slot="tabs-content" className="flex-1 outline-none"></div>
                </div>
            </div>
        </div>
    </>
}
