import Icon from "../components/Icon";
import ThemeToggle from "../components/ThemeToggle.js";

export default function Login() {

    return (
        <div className="min-h-screen bg-background">
            <header
                className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                <Icon name={'GraduationCap'} className="text-primary-foreground"/>
                            </div>
                            <span className="text-xl font-bold text-foreground">Rankio</span>
                        </div>
                        <nav className="hidden md:flex items-center gap-8">
                            <a href="#recursos"
                               className="text-sm text-muted-foreground hover:text-foreground transition-colors">Recursos</a>
                            <a href="#como-funciona"
                               className="text-sm text-muted-foreground hover:text-foreground transition-colors">Como
                                Funciona</a>
                            <a href="#depoimentos"
                               className="text-sm text-muted-foreground hover:text-foreground transition-colors">Depoimentos</a>
                        </nav>
                        <div className="flex items-center gap-3">
                            <button
                                className="inline-flex">
                                <ThemeToggle/>
                            </button>
                            <a href="/login">
                                <button
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 text-sm cursor-pointer">Entrar
                                </button>
                            </a>
                            <a href="/login">
                                <button
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 text-sm cursor-pointer">
                                    Começar Agora
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
                                <Icon name={'Sparkles'} className="w-4 h-4"/>
                                Plataforma Educacional Gamificada
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                                Transforme o aprendizado em uma <span className="text-primary">aventura</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">O Rankio combina
                                educacao e gamificação para criar experiências de aprendizado envolventes. XP, medalhas,
                                rankings e muito mais para motivar seus alunos.</p>
                            <div className="flex flex-col sm:flex-row gap-4"><a href="/login">
                                <button
                                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 has-[&gt;svg]:px-4 w-full sm:w-auto gap-2 cursor-pointer">
                                    Começar                                    Gratuitamente
                                    <Icon name={'ChevronRight'} className="w-4 h-4"/>
                                </button>
                            </a>
                                <button
                                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 dark:hover:text-white h-10 rounded-md px-6 has-[&gt;svg]:px-4 w-full sm:w-auto gap-2 bg-transparent cursor-pointer">
                                    <Icon name={'Play'} className="w-4 h-4"/>
                                    Ver Demonstração
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
                                            <Icon name={'Zap'} className="w-3 h-3 text-accent"/>
                                            <span className="font-medium">2.450 XP</span></div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex justify-between text-xs text-muted-foreground"><span>Progresso para Nivel 13</span><span>75%</span>
                                        </div>
                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary rounded-full transition-all duration-500"></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="bg-secondary/50 rounded-lg p-3 text-center">
                                            <Icon name={'Medal'} className="w-5 h-5 text-[var(--gold)] mx-auto mb-1"/>
                                            <p className="text-lg font-bold text-foreground">5</p><p
                                            className="text-xs text-muted-foreground">Ouros</p></div>
                                        <div className="bg-secondary/50 rounded-lg p-3 text-center">
                                            <Icon name={'Trophy'} className="w-5 h-5 text-primary mx-auto mb-1"/>
                                            <p className="text-lg font-bold text-foreground">3o</p><p
                                            className="text-xs text-muted-foreground">Ranking</p></div>
                                        <div className="bg-secondary/50 rounded-lg p-3 text-center">
                                            <Icon name={'Zap'} className="w-5 h-5 text-accent mx-auto mb-1"/>
                                            <p className="text-lg font-bold text-foreground">7</p><p
                                            className="text-xs text-muted-foreground">Dias</p></div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                                        <div
                                            className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                                            <Icon name={'Zap'} className="w-5 h-5 text-primary"/>
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
                                        <Icon name={'Medal'} className="w-4 h-4 text-[var(--gold)]"/>
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
                                        <Icon name={'TrendingUp'} className="w-4 h-4 text-primary"/>
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
                                <Icon name={'Users'} className="w-6 h-6"/>
                            </div>
                            <p className="text-3xl lg:text-4xl font-bold text-foreground">50k+</p><p
                            className="text-sm text-muted-foreground mt-1">Alunos ativos</p></div>
                        <div className="text-center">
                            <div
                                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                                <Icon name={'TrendingUp'} className="w-6 h-6"/>
                            </div>
                            <p className="text-3xl lg:text-4xl font-bold text-foreground">98%</p><p
                            className="text-sm text-muted-foreground mt-1">Taxa de engajamento</p></div>
                        <div className="text-center">
                            <div
                                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                                <Icon name={'Target'} className="w-6 h-6"/>
                            </div>
                            <p className="text-3xl lg:text-4xl font-bold text-foreground">2M+</p><p
                            className="text-sm text-muted-foreground mt-1">Atividades completadas</p></div>
                        <div className="text-center">
                            <div
                                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                                <Icon name={'Star'} className="w-6 h-6"/>
                            </div>
                            <p className="text-3xl lg:text-4xl font-bold text-foreground">4.9</p><p
                            className="text-sm text-muted-foreground mt-1">Avaliação média</p></div>
                    </div>
                </div>
            </section>
            <section id="recursos" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16"><h2
                        className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Recursos que
                        transformam a educação</h2><p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto">Ferramentas poderosas para
                        professores e experiências envolventes para alunos.</p></div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div
                             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="p-6">
                                <div
                                    className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Icon name={'Trophy'} className="w-6 h-6"/>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Sistema de XP e Níveis</h3><p
                                className="text-sm text-muted-foreground leading-relaxed">Alunos ganham experiência ao
                                completar atividades, subindo de nível e desbloqueando conquistas.</p></div>
                        </div>
                        <div
                             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="p-6">
                                <div
                                    className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Icon name={'Medal'} className="w-6 h-6"/>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Medalhas e Conquistas</h3><p
                                className="text-sm text-muted-foreground leading-relaxed">Premie os melhores desempenhos
                                com medalhas de ouro, prata e bronze. Motive através de reconhecimento.</p></div>
                        </div>
                        <div
                             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="p-6">
                                <div
                                    className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Icon name={'ChartColumn'} className="w-6 h-6"/>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Rankings em Tempo Real</h3><p
                                className="text-sm text-muted-foreground leading-relaxed">Competição saudável com
                                rankings por turma, disciplina e geral. Acompanhe o progresso de todos.</p></div>
                        </div>
                        <div
                             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="p-6">
                                <div
                                    className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Icon name={'Zap'} className="w-6 h-6"/>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Feedback Instantâneo</h3><p
                                className="text-sm text-muted-foreground leading-relaxed">Correção automática e feedback
                                imediato para manter os alunos engajados e motivados.</p></div>
                        </div>
                        <div
                             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="p-6">
                                <div
                                    className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Icon name={'BookOpen'} className="w-6 h-6"/>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Gestão Completa</h3><p
                                className="text-sm text-muted-foreground leading-relaxed">Crie turmas, disciplinas e
                                atividades facilmente. Acompanhe o desempenho em um só lugar.</p></div>
                        </div>
                        <div
                             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="p-6">
                                <div
                                    className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Icon name={'Award'} className="w-6 h-6"/>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Sequências de Estudo</h3><p
                                className="text-sm text-muted-foreground leading-relaxed">Incentive a constância com
                                streaks diários e semanais. Recompense a dedicação dos alunos.</p></div>
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
                        className="text-3xl sm:text-4xl font-bold text-foreground mb-4">O que dizem sobre nós</h2><p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto">Professores e alunos já
                        transformaram suas experiências com o Rankio.</p></div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div
                             className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card">
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">MS
                                    </div>
                                    <div><p className="font-medium text-foreground">Prof. Maria Santos</p><p
                                        className="text-xs text-muted-foreground">Professora de Matemática</p></div>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">"O Rankio
                                    transformou minhas aulas. Os alunos estão muito mais engajados e motivados a
                                    aprender."</p>
                                <div className="flex gap-1 mt-4">
                                    <Icon name={'Star'} className="w-4 h-4 fill-accent text-accent"/>
                                    <Icon name={'Star'} className="w-4 h-4 fill-accent text-accent"/>
                                    <Icon name={'Star'} className="w-4 h-4 fill-accent text-accent"/>
                                    <Icon name={'Star'} className="w-4 h-4 fill-accent text-accent"/>
                                    <Icon name={'Star'} className="w-4 h-4 fill-accent text-accent"/>
                                </div>
                            </div>
                        </div>
                        <div
                             className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card">
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">CL
                                    </div>
                                    <div><p className="font-medium text-foreground">Prof. Carlos Lima</p><p
                                        className="text-xs text-muted-foreground">Professor de Ciências</p></div>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">"A gamificação fez
                                    toda a diferença. Meus alunos competem de forma saudável e aprendem
                                    mais."</p>
                                <div className="flex gap-1 mt-4">
                                    <Icon name={'Star'} className="w-4 h-4 fill-accent text-accent"/>
                                    <Icon name={'Star'} className="w-4 h-4 fill-accent text-accent"/>
                                    <Icon name={'Star'} className="w-4 h-4 fill-accent text-accent"/>
                                    <Icon name={'Star'} className="w-4 h-4 fill-accent text-accent"/>
                                    <Icon name={'Star'} className="w-4 h-4 fill-accent text-accent"/>
                                </div>
                            </div>
                        </div>
                        <div
                             className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card">
                            <div className="p-6">
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
                                    <Icon name={'Star'} className="w-4 h-4 fill-accent text-accent"/>
                                    <Icon name={'Star'} className="w-4 h-4 fill-accent text-accent"/>
                                    <Icon name={'Star'} className="w-4 h-4 fill-accent text-accent"/>
                                    <Icon name={'Star'} className="w-4 h-4 fill-accent text-accent"/>
                                    <Icon name={'Star'} className="w-4 h-4 fill-accent text-accent"/>
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
                    professores que já estão usando o Rankio para engajar seus alunos.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center"><a href="/login">
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 rounded-md px-6 has-[&gt;svg]:px-4 w-full sm:w-auto gap-2 cursor-pointer">Começar
                            Agora - é Grátis
                            <Icon name={'ChevronRight'} className="w-4 h-4"/>
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
                                    <Icon name={'GraduationCap'} className="w-5 h-5 text-primary-foreground"/>
                                </div>
                                <span className="text-lg font-bold text-foreground">Rankio</span></div>
                            <p className="text-sm text-muted-foreground">Transformando a educação através da
                                gamificação.</p></div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Produto</h4>
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
