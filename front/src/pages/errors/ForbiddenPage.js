import ThemeToggle from "../../components/ThemeToggle.js";
import Icon from "../../components/Icon.js";

export default function ForbiddenPage() {
    return (
        <main className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="absolute top-4 right-4">
                <ThemeToggle/>
            </div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/15 rounded-full blur-3xl"></div>
            </div>
            <div className="text-center">
                <p className="text-lg font-semibold text-primary flex justify-center items-center gap-2">
                    <Icon name={'UserX'} className="w-5 h-5" />
                </p>
                <p className="text-base font-semibold text-primary">403</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-slate-900 dark:text-slate-50 sm:text-7xl">Acesso proibido</h1>
                <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Você não tem permissão para visualizar este recurso.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href="/"
                       className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs bg-primary hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2">
                        Voltar para inicial
                    </a>
                </div>
            </div>
        </main>
    )
}
