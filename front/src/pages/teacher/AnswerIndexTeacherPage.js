export default function AnswerIndexTeacherPage (){
    return <>
        <div className="p-6">
            <div className="space-y-6">
                <div><h1 className="text-2xl font-bold">Respostas</h1><p className="text-muted-foreground">Visualize e
                    corrija as respostas dos alunos</p></div>
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
                                <div><p className="text-sm text-muted-foreground">Aguardando Correção</p><p
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
                                <div><p className="text-sm text-muted-foreground">Corrigidas</p><p
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
                                         strokeLinejoin="round" className="lucide lucide-send w-6 h-6 text-primary">
                                        <path
                                            d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                        <path d="m21.854 2.147-10.94 10.939"></path>
                                    </svg>
                                </div>
                                <div><p className="text-sm text-muted-foreground">Total Enviadas</p><p
                                    className="text-2xl font-bold">3</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-slot="card"
                     className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                    <div data-slot="card-content" className="px-6 pt-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="relative flex-1 max-w-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round"
                                         className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </svg>
                                    <input data-slot="input"
                                           className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-9"
                                           placeholder="Buscar por aluno..." value=""/></div>
                            </div>
                            <div className="rounded-lg border overflow-hidden">
                                <div data-slot="table-container" className="relative w-full overflow-x-auto">
                                    <table data-slot="table" className="w-full caption-bottom text-sm">
                                        <thead data-slot="table-header" className="[&amp;_tr]:border-b">
                                        <tr data-slot="table-row"
                                            className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors bg-muted/50">
                                            <th data-slot="table-head"
                                                className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] cursor-pointer select-none">
                                                <div className="flex items-center gap-1">Aluno</div>
                                            </th>
                                            <th data-slot="table-head"
                                                className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <div className="flex items-center gap-1">Atividade</div>
                                            </th>
                                            <th data-slot="table-head"
                                                className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <div className="flex items-center gap-1">Disciplina</div>
                                            </th>
                                            <th data-slot="table-head"
                                                className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <div className="flex items-center gap-1">Status</div>
                                            </th>
                                            <th data-slot="table-head"
                                                className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <div className="flex items-center gap-1">Nota</div>
                                            </th>
                                            <th data-slot="table-head"
                                                className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <div className="flex items-center gap-1">Enviado em</div>
                                            </th>
                                            <th data-slot="table-head"
                                                className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <div className="flex items-center gap-1">Ações</div>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody data-slot="table-body" className="[&amp;_tr:last-child]:border-0">
                                        <tr data-slot="table-row"
                                            className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                        <span className="text-xs font-medium text-primary">JS</span>
                                                    </div>
                                                    <span className="font-medium">João Santos</span></div>
                                            </td>
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <span>Quiz de Equações</span></td>
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <span>Matemática</span></td>
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <span data-slot="badge"
                                                      className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-success/20 text-success border-success/30"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="lucide lucide-circle-check-big w-3 h-3 mr-1"><path
                                                    d="M21.801 10A10 10 0 1 1 17 3.335"></path><path
                                                    d="m9 11 3 3L22 4"></path></svg>Corrigida</span></td>
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <div className="flex items-center gap-2"><span
                                                    className="font-medium">85</span><span
                                                    className="text-muted-foreground">/ 100</span></div>
                                            </td>
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <span className="text-sm">31/01/2026</span></td>
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <div className="flex items-center gap-1">
                                                    <button data-slot="button"
                                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round"
                                                             className="lucide lucide-eye w-4 h-4">
                                                            <path
                                                                d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-slot="table-row"
                                            className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                        <span className="text-xs font-medium text-primary">AC</span>
                                                    </div>
                                                    <span className="font-medium">Ana Costa</span></div>
                                            </td>
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <span>Quiz de Equações</span></td>
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <span>Matemática</span></td>
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <span data-slot="badge"
                                                      className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-success/20 text-success border-success/30"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="lucide lucide-circle-check-big w-3 h-3 mr-1"><path
                                                    d="M21.801 10A10 10 0 1 1 17 3.335"></path><path
                                                    d="m9 11 3 3L22 4"></path></svg>Corrigida</span></td>
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <div className="flex items-center gap-2"><span
                                                    className="font-medium">95</span><span
                                                    className="text-muted-foreground">/ 100</span></div>
                                            </td>
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <span className="text-sm">30/01/2026</span></td>
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <div className="flex items-center gap-1">
                                                    <button data-slot="button"
                                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round"
                                                             className="lucide lucide-eye w-4 h-4">
                                                            <path
                                                                d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-slot="table-row"
                                            className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                        <span className="text-xs font-medium text-primary">JS</span>
                                                    </div>
                                                    <span className="font-medium">João Santos</span></div>
                                            </td>
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <span>Redação sobre Machado de Assis</span></td>
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <span>Português</span></td>
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <span data-slot="badge"
                                                      className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-chart-2/20 text-chart-2 border-chart-2/30"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="lucide lucide-circle-alert w-3 h-3 mr-1"><circle cx="12"
                                                                                                                cy="12"
                                                                                                                r="10"></circle><line
                                                    x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01"
                                                                                                y1="16" y2="16"></line></svg>Aguardando Correção</span>
                                            </td>
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <span className="text-muted-foreground">-</span></td>
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <span className="text-sm">01/02/2026</span></td>
                                            <td data-slot="table-cell"
                                                className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                <div className="flex items-center gap-1">
                                                    <button data-slot="button"
                                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round"
                                                             className="lucide lucide-eye w-4 h-4">
                                                            <path
                                                                d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>
                                                    </button>
                                                    <button data-slot="button"
                                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent dark:hover:bg-accent/50 size-9 text-primary hover:text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round"
                                                             className="lucide lucide-star w-4 h-4">
                                                            <path
                                                                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
