export default function StudentDashboard() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">Dashboard do Estudante</h1>
                <p className="text-gray-400">
                    Acompanhe seu progresso, atividades e desempenho.
                </p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-900 p-4 rounded">
                    <p className="text-sm text-gray-400">Cursos ativos</p>
                    <p className="text-3xl font-semibold">3</p>
                </div>

                <div className="bg-gray-900 p-4 rounded">
                    <p className="text-sm text-gray-400">Atividades pendentes</p>
                    <p className="text-3xl font-semibold">5</p>
                </div>

                <div className="bg-gray-900 p-4 rounded">
                    <p className="text-sm text-gray-400">Progresso geral</p>
                    <p className="text-3xl font-semibold">72%</p>
                </div>
            </section>

            <section className="bg-gray-900 p-4 rounded">
                <h2 className="font-semibold mb-2">Próximas atividades</h2>
                <ul className="space-y-2 text-gray-400">
                    <li>• Projeto de Frontend</li>
                    <li>• Avaliação de Banco de Dados</li>
                    <li>• Quiz de APIs REST</li>
                </ul>
            </section>
        </div>
    )
}
