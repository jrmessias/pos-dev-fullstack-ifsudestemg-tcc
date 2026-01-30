import {Link, useLocation} from 'react-router-dom';
import {cn} from "../../lib/utils.js";
import Icon from "../../components/Icon.js";

const links = [
    { href: "/teacher/dashboard", label: "Dashboard", icon: 'LayoutDashboard' },
    { href: "/teacher/turmas", label: "Turmas", icon: 'Users' },
    { href: "/teacher/disciplinas", label: "Disciplinas", icon: 'BookOpen' },
    { href: "/teacher/atividades", label: "Atividades", icon: 'FileText' },
    { href: "/teacher/respostas", label: "Respostas", icon: 'ClipboardCheck' },
    { href: "/teacher/gamificacao", label: "Gamificação", icon: 'Trophy' },
];

export default function LeftSidebar({leftOpen, setLeftOpen}) {
    const location = useLocation();
    const pathname = location.pathname;

    return <>
        <aside
            className={`fixed left-0 top-0 z-40 h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col transition-all duration-300 ease-in-out max-lg:translate-x-0 ${leftOpen ? 'w-64' : 'w-16 max-lg:-translate-x-full max-lg:w-64'}`}>
            <div className="h-16 flex items-center px-4 border-b border-sidebar-border relative">
                <a                className="flex items-center gap-3 transition-all duration-300" href="/teacher/dashboard">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <Icon name={'GraduationCap'} className="w-5 h-5 text-primary-foreground"/>
                </div>
                <span
                    className={`font-bold text-lg whitespace-nowrap transition-all duration-300 ${leftOpen ? 'opacity-100 translate-x-0' : 'lg:opacity-0 lg:absolute lg:-translate-x-4 lg:pointer-events-none'}`}>Rankio</span></a>
                <button
                        className={`cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-300 ${!leftOpen ? 'lg:hidden' : ''}`}
                        onClick={() => setLeftOpen(!leftOpen)}>
                    <Icon name={'PanelLeftClose'} className="w-4 h-4 self-center"/>
                    <span className="sr-only">Fechar menu</span>
                </button>
            </div>
            <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto overflow-x-hidden">
                {links.map((link) => {
                    const Icon_ = link.icon;
                    const isActive = pathname === link.href;

                    const linkContent = (
                        <Link
                            to={link.href}
                            title={link.label}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                                isActive
                                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                                !leftOpen && "lg:justify-center lg:px-2.5"
                            )}
                        >
                            <Icon name={Icon_} className="w-5 h-5 shrink-0" />
                            <span
                                className={cn(
                                    "text-sm font-medium whitespace-nowrap transition-all duration-300",
                                    !leftOpen && "lg:hidden"
                                )}
                            >
                  {link.label}
                </span>
                        </Link>
                    );

                    return <div key={link.href}>{linkContent}</div>;
                })}

            </nav>

            <div className={`p-2 border-t border-sidebar-border transition-all duration-300 ${leftOpen ? 'lg:hidden' : ''}`}>
                <button
                        className={`cursor-pointer inline-flex items-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 w-full justify-center text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent rotate-180 ${leftOpen ? 'lg:hidden' : ''}`}
                        onClick={() => setLeftOpen(!leftOpen)}>
                    <Icon name={'PanelLeft'} className="w-4 h-4 self-center"/>
                    <span className="sr-only">Abrir menu</span>
                </button>
            </div>
        </aside>
    </>
}
