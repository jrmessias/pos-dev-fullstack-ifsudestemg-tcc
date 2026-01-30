import Icon from "../../components/Icon.js";
import {userStore} from "../../stores/userStore.js";

export default function HomeTeacher({leftOpen, rightOpen}) {
    const user = userStore((state) => state.user);

    return <>
        <main className={`pt-16 min-h-screen transition-all duration-300 ${leftOpen ? 'ml-64' : 'ml-16'} ${rightOpen ? 'mr-72' : 'mr-12'}`}>
            <div className="p-6">
                <div className="space-y-6">
                    <div><h1 className="text-2xl font-bold">Dashboard do Professor</h1><p
                        className="text-muted-foreground">Visão geral do desempenho das turmas e atividades</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div
                             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1"><p
                                        className="text-sm font-medium text-muted-foreground">Total de Turmas</p><p
                                        className="text-3xl font-bold">3</p><p
                                        className="text-xs font-medium text-success">+12% em relação ao mês
                                        anterior</p></div>
                                    <div className="p-3 rounded-xl bg-primary/10">
                                        <Icon name={'Users'} className="w-6 h-6 text-primary"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1"><p
                                        className="text-sm font-medium text-muted-foreground">Total de Alunos</p><p
                                        className="text-3xl font-bold">5</p><p
                                        className="text-xs font-medium text-success">+8% em relação ao mês
                                        anterior</p></div>
                                    <div className="p-3 rounded-xl bg-primary/10">
                                        <Icon name={'GraduationCap'} className="w-6 h-6 text-primary"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1"><p
                                        className="text-sm font-medium text-muted-foreground">Total de
                                        Disciplinas</p><p className="text-3xl font-bold">4</p></div>
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
                                        className="text-sm font-medium text-muted-foreground">Total de
                                        Atividades</p><p className="text-3xl font-bold">5</p><p
                                        className="text-xs font-medium text-success">+15% em relação ao mês
                                        anterior</p></div>
                                    <div className="p-3 rounded-xl bg-primary/10">
                                        <Icon name={'FileText'} className="w-6 h-6 text-primary"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                         className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                        <div
                             className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                            <div className="font-semibold text-base">Atividades Recentes
                            </div>
                        </div>
                        <div className="px-6">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                    <div><p className="font-medium">Quiz de Equações</p><p
                                        className="text-sm text-muted-foreground">Matemática • Turma A - 9º Ano</p>
                                    </div>
                                    <div className="text-right"><p
                                        className="text-sm font-medium capitalize">quiz</p><p
                                        className="text-xs text-muted-foreground">100 pts • 50 XP</p></div>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                    <div><p className="font-medium">Redação sobre Machado de Assis</p><p
                                        className="text-sm text-muted-foreground">Português • Turma A - 9º Ano</p>
                                    </div>
                                    <div className="text-right"><p
                                        className="text-sm font-medium capitalize">tarefa</p><p
                                        className="text-xs text-muted-foreground">150 pts • 75 XP</p></div>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                    <div><p className="font-medium">Desafio de Lógica</p><p
                                        className="text-sm text-muted-foreground">Matemática • Turma B - 8º Ano</p>
                                    </div>
                                    <div className="text-right"><p
                                        className="text-sm font-medium capitalize">desafio</p><p
                                        className="text-xs text-muted-foreground">200 pts • 100 XP</p></div>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                    <div><p className="font-medium">Prova Bimestral</p><p
                                        className="text-sm text-muted-foreground">Matemática • Turma A - 9º Ano</p>
                                    </div>
                                    <div className="text-right"><p
                                        className="text-sm font-medium capitalize">prova</p><p
                                        className="text-xs text-muted-foreground">300 pts • 150 XP</p></div>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                    <div><p className="font-medium">Experimento de Ciências</p><p
                                        className="text-sm text-muted-foreground">Ciências • Turma B - 8º Ano</p>
                                    </div>
                                    <div className="text-right"><p
                                        className="text-sm font-medium capitalize">tarefa</p><p
                                        className="text-xs text-muted-foreground">120 pts • 60 XP</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
}
