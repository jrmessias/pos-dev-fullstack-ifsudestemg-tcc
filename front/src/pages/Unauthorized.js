import { Link } from 'react-router-dom'

export default function Unauthorized() {
    return (
        <div className="h-full min-h-[60vh] flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-4xl font-bold">403</h1>

            <p className="text-gray-400 max-w-md">
                Você não possui permissão para acessar esta página.
                Caso isso seja um erro, entre em contato com o responsável.
            </p>

            <Link
                to="/"
                className="px-4 py-2 bg-blue-600 rounded"
            >
                Voltar para o início
            </Link>
        </div>
    )
}
