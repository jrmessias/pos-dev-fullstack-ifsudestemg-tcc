import {Spinner} from "@/components/ui/spinner";

const sizeClasses = {
    sm: "size-3",
    md: "size-4",
    lg: "size-6",
    xl: "size-8",
    "2xl": "size-12"
};

/**
 * @param {string} size - 'sm', 'md', 'lg', 'xl', '2xl' (Padrão: 'md')
 * @param {string} color - Classe de cor do Tailwind (ex: 'text-blue-500')
 * @param {string} className - Classes extras opcionais
 */
export function Loading({size = "md", color = "text-current", className = ""}) {
    // Seleciona a classe de tamanho baseada na prop, ou usa 'md' se não encontrar
    const sizeClass = sizeClasses[size] || sizeClasses.md;

    return (
        <div className={'flex items-center justify-center'}>
            <Spinner
                className={`${sizeClass} ${color} ${className}`}
            />
        </div>
    );
}
