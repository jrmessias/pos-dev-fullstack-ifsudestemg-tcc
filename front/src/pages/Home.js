import {useNavigate} from "react-router-dom";
import Icon from "../components/Icon.js";

export default function Login() {

    return (
        <div className="min-h-screen bg-background">
            <header
                className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-graduation-cap w-5 h-5 text-primary-foreground">
                                    <path
                                        d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                                    <path d="M22 10v6"></path>
                                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-foreground">Rankio</span></div>
                        <nav className="hidden md:flex items-center gap-8"><a href="#recursos"
                                                                              className="text-sm text-muted-foreground hover:text-foreground transition-colors">Recursos</a><a
                            href="#como-funciona"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors">Como
                            Funciona</a><a href="#depoimentos"
                                           className="text-sm text-muted-foreground hover:text-foreground transition-colors">Depoimentos</a>
                        </nav>
                        <div className="flex items-center gap-3">
                            <button data-slot="button"
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="lucide lucide-moon w-5 h-5">
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                </svg>
                            </button>
                            <a href="/login">
                                <button data-slot="button"
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 text-sm">Entrar
                                </button>
                            </a><a href="/login">
                            <button data-slot="button"
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 text-sm">Comecar
                                Agora
                            </button>
                        </a></div>
                    </div>
                </div>
            </header>
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="lucide lucide-sparkles w-4 h-4">
                                    <path
                                        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                                    <path d="M20 3v4"></path>
                                    <path d="M22 5h-4"></path>
                                    <path d="M4 17v2"></path>
                                    <path d="M5 18H3"></path>
                                </svg>
                                Plataforma Educacional Gamificada
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">Transforme
                                o aprendizado em uma <span className="text-primary">aventura</span></h1><p
                            className="text-lg text-muted-foreground max-w-lg leading-relaxed">O Rankio combina
                            educacao e gamificacao para criar experiencias de aprendizado envolventes. XP, medalhas,
                            rankings e muito mais para motivar seus alunos.</p>
                            <div className="flex flex-col sm:flex-row gap-4"><a href="/login">
                                <button data-slot="button"
                                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 has-[&gt;svg]:px-4 w-full sm:w-auto gap-2">Comecar
                                    Gratuitamente
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="lucide lucide-chevron-right w-4 h-4">
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                </button>
                            </a>
                                <button data-slot="button"
                                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[&gt;svg]:px-4 w-full sm:w-auto gap-2 bg-transparent">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="lucide lucide-play w-4 h-4">
                                        <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                    </svg>
                                    Ver Demonstracao
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative bg-card rounded-2xl border border-border p-6 shadow-xl">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">JD
                                            </div>
                                            <div><p className="font-semibold text-foreground">Joao da Silva</p><p
                                                className="text-xs text-muted-foreground">Nivel 12 - Explorador</p>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="lucide lucide-zap w-3 h-3 text-accent">
                                                <path
                                                    d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                            </svg>
                                            <span className="font-medium">2,450 XP</span></div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex justify-between text-xs text-muted-foreground"><span>Progresso para Nivel 13</span><span>75%</span>
                                        </div>
                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <div className="h-full bg-primary rounded-full transition-all duration-500" ></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="bg-secondary/50 rounded-lg p-3 text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="lucide lucide-medal w-5 h-5 text-[var(--gold)] mx-auto mb-1">
                                                <path
                                                    d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path>
                                                <path d="M11 12 5.12 2.2"></path>
                                                <path d="m13 12 5.88-9.8"></path>
                                                <path d="M8 7h8"></path>
                                                <circle cx="12" cy="17" r="5"></circle>
                                                <path d="M12 18v-2h-.5"></path>
                                            </svg>
                                            <p className="text-lg font-bold text-foreground">5</p><p
                                            className="text-xs text-muted-foreground">Ouros</p></div>
                                        <div className="bg-secondary/50 rounded-lg p-3 text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="lucide lucide-trophy w-5 h-5 text-primary mx-auto mb-1">
                                                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                                <path d="M4 22h16"></path>
                                                <path
                                                    d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                                <path
                                                    d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                            </svg>
                                            <p className="text-lg font-bold text-foreground">3o</p><p
                                            className="text-xs text-muted-foreground">Ranking</p></div>
                                        <div className="bg-secondary/50 rounded-lg p-3 text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="lucide lucide-zap w-5 h-5 text-accent mx-auto mb-1">
                                                <path
                                                    d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                            </svg>
                                            <p className="text-lg font-bold text-foreground">7</p><p
                                            className="text-xs text-muted-foreground">Dias</p></div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                                        <div
                                            className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="lucide lucide-star w-5 h-5 text-primary">
                                                <path
                                                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-1"><p className="text-sm font-medium text-foreground">Nova
                                            Conquista!</p><p className="text-xs text-muted-foreground">Mestre em
                                            Matematica - 10 atividades perfeitas</p></div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute -top-4 -right-4 bg-card rounded-xl border border-border p-3 shadow-lg animate-pulse">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-8 h-8 rounded-full bg-[var(--gold)]/20 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             className="lucide lucide-medal w-4 h-4 text-[var(--gold)]">
                                            <path
                                                d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path>
                                            <path d="M11 12 5.12 2.2"></path>
                                            <path d="m13 12 5.88-9.8"></path>
                                            <path d="M8 7h8"></path>
                                            <circle cx="12" cy="17" r="5"></circle>
                                            <path d="M12 18v-2h-.5"></path>
                                        </svg>
                                    </div>
                                    <div><p className="text-xs font-medium text-foreground">+50 XP</p><p
                                        className="text-[10px] text-muted-foreground">Medalha de Ouro!</p></div>
                                </div>
                            </div>
                            <div
                                className="absolute -bottom-4 -left-4 bg-card rounded-xl border border-border p-3 shadow-lg">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             className="lucide lucide-trending-up w-4 h-4 text-primary">
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                    </div>
                                    <div><p className="text-xs font-medium text-foreground">Ranking</p><p
                                        className="text-[10px] text-primary">Subiu 2 posicoes!</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div
                                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="lucide lucide-users w-6 h-6">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <p className="text-3xl lg:text-4xl font-bold text-foreground">50k+</p><p
                            className="text-sm text-muted-foreground mt-1">Alunos ativos</p></div>
                        <div className="text-center">
                            <div
                                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="lucide lucide-trending-up w-6 h-6">
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                    <polyline points="16 7 22 7 22 13"></polyline>
                                </svg>
                            </div>
                            <p className="text-3xl lg:text-4xl font-bold text-foreground">98%</p><p
                            className="text-sm text-muted-foreground mt-1">Taxa de engajamento</p></div>
                        <div className="text-center">
                            <div
                                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="lucide lucide-target w-6 h-6">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <circle cx="12" cy="12" r="6"></circle>
                                    <circle cx="12" cy="12" r="2"></circle>
                                </svg>
                            </div>
                            <p className="text-3xl lg:text-4xl font-bold text-foreground">2M+</p><p
                            className="text-sm text-muted-foreground mt-1">Atividades completadas</p></div>
                        <div className="text-center">
                            <div
                                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="lucide lucide-star w-6 h-6">
                                    <path
                                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                            </div>
                            <p className="text-3xl lg:text-4xl font-bold text-foreground">4.9</p><p
                            className="text-sm text-muted-foreground mt-1">Avaliacao media</p></div>
                    </div>
                </div>
            </section>
            <section id="recursos" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16"><h2
                        className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Recursos que
                        transformam a educacao</h2><p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto">Ferramentas poderosas para
                        professores e experiencias envolventes para alunos.</p></div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div data-slot="card"
                             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div data-slot="card-content" className="p-6">
                                <div
                                    className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="lucide lucide-trophy w-6 h-6">
                                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                        <path d="M4 22h16"></path>
                                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Sistema de XP e Niveis</h3><p
                                className="text-sm text-muted-foreground leading-relaxed">Alunos ganham experiencia ao
                                completar atividades, subindo de nivel e desbloqueando conquistas.</p></div>
                        </div>
                        <div data-slot="card"
                             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div data-slot="card-content" className="p-6">
                                <div
                                    className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="lucide lucide-medal w-6 h-6">
                                        <path
                                            d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path>
                                        <path d="M11 12 5.12 2.2"></path>
                                        <path d="m13 12 5.88-9.8"></path>
                                        <path d="M8 7h8"></path>
                                        <circle cx="12" cy="17" r="5"></circle>
                                        <path d="M12 18v-2h-.5"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Medalhas e Conquistas</h3><p
                                className="text-sm text-muted-foreground leading-relaxed">Premie os melhores desempenhos
                                com medalhas de ouro, prata e bronze. Motive atraves de reconhecimento.</p></div>
                        </div>
                        <div data-slot="card"
                             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div data-slot="card-content" className="p-6">
                                <div
                                    className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="lucide lucide-chart-column w-6 h-6">
                                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                        <path d="M18 17V9"></path>
                                        <path d="M13 17V5"></path>
                                        <path d="M8 17v-3"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Rankings em Tempo Real</h3><p
                                className="text-sm text-muted-foreground leading-relaxed">Competicao saudavel com
                                rankings por turma, disciplina e geral. Acompanhe o progresso de todos.</p></div>
                        </div>
                        <div data-slot="card"
                             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div data-slot="card-content" className="p-6">
                                <div
                                    className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="lucide lucide-zap w-6 h-6">
                                        <path
                                            d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Feedback Instantaneo</h3><p
                                className="text-sm text-muted-foreground leading-relaxed">Correcao automatica e feedback
                                imediato para manter os alunos engajados e motivados.</p></div>
                        </div>
                        <div data-slot="card"
                             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div data-slot="card-content" className="p-6">
                                <div
                                    className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="lucide lucide-book-open w-6 h-6">
                                        <path d="M12 7v14"></path>
                                        <path
                                            d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Gestao Completa</h3><p
                                className="text-sm text-muted-foreground leading-relaxed">Crie turmas, disciplinas e
                                atividades facilmente. Acompanhe o desempenho em um so lugar.</p></div>
                        </div>
                        <div data-slot="card"
                             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div data-slot="card-content" className="p-6">
                                <div
                                    className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="lucide lucide-award w-6 h-6">
                                        <path
                                            d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                        <circle cx="12" cy="8" r="6"></circle>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Sequencias de Estudo</h3><p
                                className="text-sm text-muted-foreground leading-relaxed">Incentive a constancia com
                                streaks diarios e semanais. Recompense a dedicacao dos alunos.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16"><h2
                        className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Como funciona</h2><p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto">Comece em minutos e transforme suas
                        aulas.</p></div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="relative">
                            <div className="text-6xl font-bold text-primary/10 absolute -top-4 left-0">01</div>
                            <div className="pt-8 pl-4"><h3 className="text-xl font-semibold text-foreground mb-2">Crie
                                sua conta</h3><p className="text-muted-foreground">Cadastre-se como professor e
                                configure sua escola em poucos minutos.</p></div>
                        </div>
                        <div className="relative">
                            <div className="text-6xl font-bold text-primary/10 absolute -top-4 left-0">02</div>
                            <div className="pt-8 pl-4"><h3
                                className="text-xl font-semibold text-foreground mb-2">Configure suas turmas</h3><p
                                className="text-muted-foreground">Adicione turmas, disciplinas e convide seus alunos
                                para a plataforma.</p></div>
                        </div>
                        <div className="relative">
                            <div className="text-6xl font-bold text-primary/10 absolute -top-4 left-0">03</div>
                            <div className="pt-8 pl-4"><h3 className="text-xl font-semibold text-foreground mb-2">Engaje
                                com gamificacao</h3><p className="text-muted-foreground">Crie atividades, defina
                                recompensas e veja seus alunos se superarem.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16"><h2
                        className="text-3xl sm:text-4xl font-bold text-foreground mb-4">O que dizem sobre nos</h2><p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto">Professores e alunos ja
                        transformaram suas experiencias com o Rankio.</p></div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div data-slot="card"
                             className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card">
                            <div data-slot="card-content" className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">MS
                                    </div>
                                    <div><p className="font-medium text-foreground">Prof. Maria Santos</p><p
                                        className="text-xs text-muted-foreground">Professora de Matematica</p></div>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">"O Rankio
                                    transformou minhas aulas. Os alunos estao muito mais engajados e motivados a
                                    aprender."</p>
                                <div className="flex gap-1 mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-star w-4 h-4 fill-accent text-accent">
                                        <path
                                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-star w-4 h-4 fill-accent text-accent">
                                        <path
                                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-star w-4 h-4 fill-accent text-accent">
                                        <path
                                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-star w-4 h-4 fill-accent text-accent">
                                        <path
                                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-star w-4 h-4 fill-accent text-accent">
                                        <path
                                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div data-slot="card"
                             className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card">
                            <div data-slot="card-content" className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">CL
                                    </div>
                                    <div><p className="font-medium text-foreground">Prof. Carlos Lima</p><p
                                        className="text-xs text-muted-foreground">Professor de Ciencias</p></div>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">"A gamificacao fez
                                    toda a diferenca. Meus alunos competem de forma saudavel e aprendem
                                    mais."</p>
                                <div className="flex gap-1 mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-star w-4 h-4 fill-accent text-accent">
                                        <path
                                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-star w-4 h-4 fill-accent text-accent">
                                        <path
                                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-star w-4 h-4 fill-accent text-accent">
                                        <path
                                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-star w-4 h-4 fill-accent text-accent">
                                        <path
                                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-star w-4 h-4 fill-accent text-accent">
                                        <path
                                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div data-slot="card"
                             className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card">
                            <div data-slot="card-content" className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">AJ
                                    </div>
                                    <div><p className="font-medium text-foreground">Ana Julia, 15 anos</p><p
                                        className="text-xs text-muted-foreground">Aluna do 9o ano</p></div>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">"Adoro colecionar
                                    medalhas e ver meu progresso. Estudar virou algo divertido!"</p>
                                <div className="flex gap-1 mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-star w-4 h-4 fill-accent text-accent">
                                        <path
                                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-star w-4 h-4 fill-accent text-accent">
                                        <path
                                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-star w-4 h-4 fill-accent text-accent">
                                        <path
                                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-star w-4 h-4 fill-accent text-accent">
                                        <path
                                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-star w-4 h-4 fill-accent text-accent">
                                        <path
                                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
                <div className="max-w-4xl mx-auto text-center"><h2
                    className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 text-balance">Pronto para
                    transformar suas aulas?</h2><p
                    className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Junte-se a milhares de
                    professores que ja estao usando o Rankio para engajar seus alunos.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center"><a href="/login">
                        <button data-slot="button"
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 rounded-md px-6 has-[&gt;svg]:px-4 w-full sm:w-auto gap-2">Comecar
                            Agora - e Gratis
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-chevron-right w-4 h-4">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </button>
                    </a></div>
                </div>
            </section>
            <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-graduation-cap w-5 h-5 text-primary-foreground">
                                        <path
                                            d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                                        <path d="M22 10v6"></path>
                                        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                                    </svg>
                                </div>
                                <span className="text-lg font-bold text-foreground">Rankio</span></div>
                            <p className="text-sm text-muted-foreground">Transformando a educacao atraves da
                                gamificacao.</p></div>
                        <div><h4 className="font-semibold text-foreground mb-4">Produto</h4>
                            <ul className="space-y-2">
                                <li><a href="#recursos"
                                       className="text-sm text-muted-foreground hover:text-foreground transition-colors">Recursos</a>
                                </li>
                                <li><a href="#"
                                       className="text-sm text-muted-foreground hover:text-foreground transition-colors">Precos</a>
                                </li>
                                <li><a href="#"
                                       className="text-sm text-muted-foreground hover:text-foreground transition-colors">Integrações</a>
                                </li>
                            </ul>
                        </div>
                        <div><h4 className="font-semibold text-foreground mb-4">Empresa</h4>
                            <ul className="space-y-2">
                                <li><a href="#"
                                       className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sobre
                                    nos</a></li>
                                <li><a href="#"
                                       className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a>
                                </li>
                                <li><a href="#"
                                       className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contato</a>
                                </li>
                            </ul>
                        </div>
                        <div><h4 className="font-semibold text-foreground mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#"
                                       className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacidade</a>
                                </li>
                                <li><a href="#"
                                       className="text-sm text-muted-foreground hover:text-foreground transition-colors">Termos
                                    de Uso</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground"><p>©
                        2026 Rankio. Todos os direitos reservados.</p></div>
                </div>
            </footer>
        </div>
    );
}
