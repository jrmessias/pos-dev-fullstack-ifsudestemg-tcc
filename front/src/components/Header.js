export default function Header({ dark, setDark, collapsed, setCollapsed }) {
    return (
        <header className={`fixed top-0 right-0 h-16 bg-card border-b flex items-center justify-between px-4 transition-all ${collapsed ? "left-20" : "left-64"}`}>
            <h1 className="font-semibold">Área do Aluno</h1>

            <div className="flex items-center gap-2">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="px-3 py-1 border rounded"
                >
                    {collapsed ? "➡" : "⬅"}
                </button>

                <button
                    onClick={() => setDark(!dark)}
                    className="px-3 py-1 border rounded"
                >
                    {dark ? "🌙" : "☀"}
                </button>
            </div>
        </header>
    );
}
