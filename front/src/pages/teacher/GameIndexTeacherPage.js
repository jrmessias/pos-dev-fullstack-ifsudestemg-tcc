export default function GameIndexTeacherPage (){
    return <>
        <div className="p-6">
            <div className="space-y-6">
                <div><h1 className="text-2xl font-bold">Gamificação</h1><p className="text-muted-foreground">Acompanhe o
                    desempenho e premiações dos alunos</p></div>
                <div data-slot="card"
                     className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
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
                            Top 3 Geral
                        </div>
                    </div>
                    <div data-slot="card-content" className="px-6 pt-6">
                        <div className="flex items-end justify-center gap-4">
                            <div className="flex flex-col items-center"><span data-slot="avatar"
                                                                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-16 h-16 border-4 border-silver"><span
                                data-slot="avatar-fallback"
                                className="flex size-full items-center justify-center rounded-full bg-silver/20 text-lg">JS</span></span>
                                <div className="mt-2 text-center"><p className="font-semibold">João Santos</p><span
                                    data-slot="badge"
                                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-medal w-3 h-3 mr-1 text-silver"><path
                                    d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path><path
                                    d="M11 12 5.12 2.2"></path><path d="m13 12 5.88-9.8"></path><path d="M8 7h8"></path><circle
                                    cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></svg>2º Lugar</span>
                                    <p className="text-sm text-muted-foreground mt-1">2450 XP</p></div>
                                <div className="w-24 h-20 bg-silver/20 rounded-t-lg mt-2"></div>
                            </div>
                            <div className="flex flex-col items-center -mt-8"><span data-slot="avatar"
                                                                                    className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-20 h-20 border-4 border-gold"><span
                                data-slot="avatar-fallback"
                                className="flex size-full items-center justify-center rounded-full bg-gold/20 text-xl">AC</span></span>
                                <div className="mt-2 text-center"><p className="font-semibold text-lg">Ana Costa</p>
                                    <span data-slot="badge"
                                          className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-gold text-gold-foreground hover:bg-gold/90"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-crown w-3 h-3 mr-1"><path
                                        d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path
                                        d="M5 21h14"></path></svg>1º Lugar</span><p
                                        className="text-sm text-muted-foreground mt-1">3200 XP</p></div>
                                <div className="w-24 h-28 bg-gold/20 rounded-t-lg mt-2"></div>
                            </div>
                            <div className="flex flex-col items-center"><span data-slot="avatar"
                                                                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-14 h-14 border-4 border-bronze"><span
                                data-slot="avatar-fallback"
                                className="flex size-full items-center justify-center rounded-full bg-bronze/20">CM</span></span>
                                <div className="mt-2 text-center"><p className="font-semibold">Carla Mendes</p><span
                                    data-slot="badge"
                                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-bronze text-bronze"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-award w-3 h-3 mr-1"><path
                                    d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle
                                    cx="12" cy="8" r="6"></circle></svg>3º Lugar</span><p
                                    className="text-sm text-muted-foreground mt-1">2100 XP</p></div>
                                <div className="w-24 h-14 bg-bronze/20 rounded-t-lg mt-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
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
                                <div><p className="text-sm text-muted-foreground">XP Total Distribuído</p><p
                                    className="text-2xl font-bold">10.500</p></div>
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
                                         strokeLinejoin="round"
                                         className="lucide lucide-trending-up w-6 h-6 text-accent">
                                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                        <polyline points="16 7 22 7 22 13"></polyline>
                                    </svg>
                                </div>
                                <div><p className="text-sm text-muted-foreground">Nível Médio</p><p
                                    className="text-2xl font-bold">7</p></div>
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
                                <div><p className="text-sm text-muted-foreground">Total de Medalhas</p><p
                                    className="text-2xl font-bold">9</p></div>
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
                                    aria-controls="radix-_r_1e_-content-geral" data-state="active"
                                    id="radix-_r_1e_-trigger-geral" data-slot="tabs-trigger"
                                    className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4"
                                    tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="">Ranking
                                Geral
                            </button>
                            <button type="button" role="tab" aria-selected="false"
                                    aria-controls="radix-_r_1e_-content-turma" data-state="inactive"
                                    id="radix-_r_1e_-trigger-turma" data-slot="tabs-trigger"
                                    className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4"
                                    tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="">Por Turma
                            </button>
                            <button type="button" role="tab" aria-selected="false"
                                    aria-controls="radix-_r_1e_-content-disciplina" data-state="inactive"
                                    id="radix-_r_1e_-trigger-disciplina" data-slot="tabs-trigger"
                                    className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4"
                                    tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="">Por
                                Disciplina
                            </button>
                        </div>
                        <div className="flex gap-2">
                            <button type="button" role="combobox" aria-controls="radix-_r_1i_" aria-expanded="false"
                                    aria-autocomplete="none" dir="ltr" data-state="closed" data-slot="select-trigger"
                                    data-size="default"
                                    className="border-input data-[placeholder]:text-muted-foreground [&amp;_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 w-40">
                                <span data-slot="select-value" className={'pointer-events-none'}>Todas as Turmas</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-chevron-down size-4 opacity-50"
                                     aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                            </button>
                            <button type="button" role="combobox" aria-controls="radix-_r_1j_" aria-expanded="false"
                                    aria-autocomplete="none" dir="ltr" data-state="closed" data-slot="select-trigger"
                                    data-size="default"
                                    className="border-input data-[placeholder]:text-muted-foreground [&amp;_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 w-40">
                                <span data-slot="select-value" className={'pointer-events-none'}>Todas</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-chevron-down size-4 opacity-50"
                                     aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div data-state="active" data-orientation="horizontal" role="tabpanel"
                         aria-labelledby="radix-_r_1e_-trigger-geral" id="radix-_r_1e_-content-geral" tabIndex="0"
                         data-slot="tabs-content" className="flex-1 outline-none" style={{animationDuration: 0}}>
                        <div data-slot="card"
                             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                            <div data-slot="card-header"
                                 className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                                <div data-slot="card-title" className="font-semibold flex items-center gap-2 text-base">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="lucide lucide-users w-4 h-4 text-primary">
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
                                    <div
                                        className="flex items-center gap-4 p-4 rounded-lg transition-colors bg-gold/5 border border-gold/20">
                                        <div
                                            className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-crown w-5 h-5 text-gold">
                                                <path
                                                    d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                                                <path d="M5 21h14"></path>
                                            </svg>
                                        </div>
                                        <span data-slot="avatar"
                                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-12 h-12"><span
                                            data-slot="avatar-fallback"
                                            className="flex size-full items-center justify-center rounded-full bg-primary/10 text-primary">AC</span></span>
                                        <div className="flex-1"><p className="font-semibold">Ana Costa</p>
                                            <div className="flex items-center gap-2 mt-1"><span data-slot="badge"
                                                                                                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90">Nível 10</span><span
                                                className="text-sm text-muted-foreground">3.200 XP</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex flex-wrap gap-1 justify-end mb-2"><span
                                                data-slot="badge"
                                                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-xs border-bronze text-bronze">Primeiro Passo</span><span
                                                data-slot="badge"
                                                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-xs border-silver text-silver">Estudante Dedicado</span><span
                                                data-slot="badge"
                                                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-xs border-gold text-gold">Mestre do Conhecimento</span>
                                            </div>
                                            <div className="w-32">
                                                <div aria-valuemax="100" aria-valuemin="0" role="progressbar"
                                                     data-state="indeterminate" data-max="100" data-slot="progress"
                                                     className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2">
                                                    <div data-state="indeterminate" data-max="100"
                                                         data-slot="progress-indicator"
                                                         className="bg-primary h-full w-full flex-1 transition-all"
                                                         style={{transform: 'translateX(-33.3333%)'}}></div>
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-1 text-right">100 XP para
                                                    nível 11</p></div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-4 p-4 rounded-lg transition-colors bg-silver/5 border border-silver/20">
                                        <div
                                            className="w-10 h-10 rounded-full bg-silver/20 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-medal w-5 h-5 text-silver">
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
                                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-12 h-12"><span
                                            data-slot="avatar-fallback"
                                            className="flex size-full items-center justify-center rounded-full bg-primary/10 text-primary">JS</span></span>
                                        <div className="flex-1"><p className="font-semibold">João Santos</p>
                                            <div className="flex items-center gap-2 mt-1"><span data-slot="badge"
                                                                                                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90">Nível 8</span><span
                                                className="text-sm text-muted-foreground">2.450 XP</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex flex-wrap gap-1 justify-end mb-2"><span
                                                data-slot="badge"
                                                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-xs border-bronze text-bronze">Primeiro Passo</span><span
                                                data-slot="badge"
                                                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-xs border-silver text-silver">Estudante Dedicado</span>
                                            </div>
                                            <div className="w-32">
                                                <div aria-valuemax="100" aria-valuemin="0" role="progressbar"
                                                     data-state="indeterminate" data-max="100" data-slot="progress"
                                                     className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2">
                                                    <div data-state="indeterminate" data-max="100"
                                                         data-slot="progress-indicator"
                                                         className="bg-primary h-full w-full flex-1 transition-all"
                                                         style={{transform: 'translateX(-83.3333%)'}}></div>
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-1 text-right">250 XP para
                                                    nível 9</p></div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-4 p-4 rounded-lg transition-colors bg-bronze/5 border border-bronze/20">
                                        <div
                                            className="w-10 h-10 rounded-full bg-bronze/20 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-award w-5 h-5 text-bronze">
                                                <path
                                                    d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                                <circle cx="12" cy="8" r="6"></circle>
                                            </svg>
                                        </div>
                                        <span data-slot="avatar"
                                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-12 h-12"><span
                                            data-slot="avatar-fallback"
                                            className="flex size-full items-center justify-center rounded-full bg-primary/10 text-primary">CM</span></span>
                                        <div className="flex-1"><p className="font-semibold">Carla Mendes</p>
                                            <div className="flex items-center gap-2 mt-1"><span data-slot="badge"
                                                                                                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90">Nível 7</span><span
                                                className="text-sm text-muted-foreground">2.100 XP</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex flex-wrap gap-1 justify-end mb-2"><span
                                                data-slot="badge"
                                                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-xs border-bronze text-bronze">Primeiro Passo</span><span
                                                data-slot="badge"
                                                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-xs border-silver text-silver">Estudante Dedicado</span>
                                            </div>
                                            <div className="w-32">
                                                <div aria-valuemax="100" aria-valuemin="0" role="progressbar"
                                                     data-state="indeterminate" data-max="100" data-slot="progress"
                                                     className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2">
                                                    <div data-state="indeterminate" data-max="100"
                                                         data-slot="progress-indicator"
                                                         className="bg-primary h-full w-full flex-1 transition-all"
                                                         style={{transform: 'translateX(-100%)'}}></div>
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-1 text-right">300 XP para
                                                    nível 8</p></div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-4 p-4 rounded-lg transition-colors bg-muted/30">
                                        <div
                                            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                            <span className="font-bold text-muted-foreground">4</span></div>
                                        <span data-slot="avatar"
                                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-12 h-12"><span
                                            data-slot="avatar-fallback"
                                            className="flex size-full items-center justify-center rounded-full bg-primary/10 text-primary">PL</span></span>
                                        <div className="flex-1"><p className="font-semibold">Pedro Lima</p>
                                            <div className="flex items-center gap-2 mt-1"><span data-slot="badge"
                                                                                                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90">Nível 6</span><span
                                                className="text-sm text-muted-foreground">1.800 XP</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex flex-wrap gap-1 justify-end mb-2"><span
                                                data-slot="badge"
                                                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-xs border-bronze text-bronze">Primeiro Passo</span>
                                            </div>
                                            <div className="w-32">
                                                <div aria-valuemax="100" aria-valuemin="0" role="progressbar"
                                                     data-state="indeterminate" data-max="100" data-slot="progress"
                                                     className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2">
                                                    <div data-state="indeterminate" data-max="100"
                                                         data-slot="progress-indicator"
                                                         className="bg-primary h-full w-full flex-1 transition-all"
                                                         style={{transform: 'translateX(-100%)'}}></div>
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-1 text-right">300 XP para
                                                    nível 7</p></div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-4 p-4 rounded-lg transition-colors bg-muted/30">
                                        <div
                                            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                            <span className="font-bold text-muted-foreground">5</span></div>
                                        <span data-slot="avatar"
                                              className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-12 h-12"><span
                                            data-slot="avatar-fallback"
                                            className="flex size-full items-center justify-center rounded-full bg-primary/10 text-primary">LO</span></span>
                                        <div className="flex-1"><p className="font-semibold">Lucas Oliveira</p>
                                            <div className="flex items-center gap-2 mt-1"><span data-slot="badge"
                                                                                                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90">Nível 4</span><span
                                                className="text-sm text-muted-foreground">950 XP</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex flex-wrap gap-1 justify-end mb-2"><span
                                                data-slot="badge"
                                                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-xs border-bronze text-bronze">Primeiro Passo</span>
                                            </div>
                                            <div className="w-32">
                                                <div aria-valuemax="100" aria-valuemin="0" role="progressbar"
                                                     data-state="indeterminate" data-max="100" data-slot="progress"
                                                     className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2">
                                                    <div data-state="indeterminate" data-max="100"
                                                         data-slot="progress-indicator"
                                                         className="bg-primary h-full w-full flex-1 transition-all"
                                                         style={{transform: 'translateX(-83.3333%)'}}></div>
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-1 text-right">250 XP para
                                                    nível 5</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-state="inactive" data-orientation="horizontal" role="tabpanel"
                         aria-labelledby="radix-_r_1e_-trigger-turma" hidden="" id="radix-_r_1e_-content-turma"
                         tabIndex="0" data-slot="tabs-content" className="flex-1 outline-none"></div>
                    <div data-state="inactive" data-orientation="horizontal" role="tabpanel"
                         aria-labelledby="radix-_r_1e_-trigger-disciplina" hidden=""
                         id="radix-_r_1e_-content-disciplina" tabIndex="0" data-slot="tabs-content"
                         className="flex-1 outline-none"></div>
                </div>
            </div>
        </div>
    </>
}
