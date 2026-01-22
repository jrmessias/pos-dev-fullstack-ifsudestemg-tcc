export default function TeacherDashboard() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">Dashboard do Professor</h1>
                <p className="text-gray-400">
                    Gerencie turmas, conteúdos e avaliações.
                </p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-900 p-4 rounded">
                    <p className="text-sm text-gray-400">Turmas ativas</p>
                    <p className="text-3xl font-semibold">4</p>
                </div>

                <div className="bg-gray-900 p-4 rounded">
                    <p className="text-sm text-gray-400">Estudantes</p>
                    <p className="text-3xl font-semibold">128</p>
                </div>

                <div className="bg-gray-900 p-4 rounded">
                    <p className="text-sm text-gray-400">Atividades criadas</p>
                    <p className="text-3xl font-semibold">26</p>
                </div>
            </section>

            <section className="bg-gray-900 p-4 rounded">
                <h2 className="font-semibold mb-2">Ações rápidas</h2>
                <ul className="space-y-2 text-gray-400">
                    <li>• Criar nova atividade</li>
                    <li>• Publicar material</li>
                    <li>• Corrigir submissões</li>
                </ul>
            </section>
        </div>
    )
}
