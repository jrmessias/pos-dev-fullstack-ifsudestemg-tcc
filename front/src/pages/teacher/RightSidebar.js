import Icon from "../../components/Icon.js";

export default function RightSidebar({rightOpen, setRightOpen}) {
    return <>
        <aside
            className={`fixed right-0 top-0 z-30 h-screen bg-card border-l border-border transition-all duration-300 flex flex-col pt-16 ${rightOpen ? 'w-72' : 'w-12'}`}>
            <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground dark:hover:bg-accent/50 size-9 absolute left-0 top-20 -translate-x-1/2 w-6 h-6 rounded-full bg-card border border-border shadow-sm hover:bg-accent cursor-pointer"
                    onClick={() => setRightOpen(!rightOpen)}>
                <Icon name={rightOpen ? 'ChevronRight' : 'ChevronLeft'} className="w-3 h-3"/>
            </button>
            <div dir="ltr" className="relative flex-1 px-4 py-4"
                 style={{position: "relative"}}>
                <div className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
                                              style={{overflowY: 'auto'}}>
                    <div style={{minWidth: '100%', display: 'table'}}>
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

                    </div>
                </div>
            </div>
        </aside>
    </>
}
