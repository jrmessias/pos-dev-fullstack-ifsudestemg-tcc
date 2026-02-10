import Icon from "../../components/Icon.js";
import {Link, useLocation} from "react-router-dom";
import {cn} from "../../lib/utils.js";

const linksStudent = [
    {href: "/student", label: "Dashboard", icon: 'LayoutDashboard'},
    {href: "/student/discipline", label: "Disciplinas", icon: 'BookOpen'},
    {href: "/student/activity", label: "Atividades", icon: 'FileText'},
    {href: "/student/progress", label: "Meu Progresso", icon: 'Trophy'},
];

const linksTeacher = [
    {href: "/teacher", label: "Dashboard", icon: 'LayoutDashboard'},
    {href: "/teacher/discipline", label: "Disciplinas", icon: 'BookOpen'},
    {href: "/teacher/activity", label: "Atividades", icon: 'FileText'},
    {href: "/teacher/game", label: "Gamificação", icon: 'Trophy'},
];

export default function LeftSidebar({type, leftOpen, setLeftOpen}) {
    const location = useLocation();
    const linkHref = location.pathname.split('/').slice(0, 3).join('/');
    const links = type.includes("teacher") ? linksTeacher : linksStudent;
    const isStudent = type === 'student';

    return <>
        <aside
            className={`fixed left-0 top-0 z-40 h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col transition-all duration-300 ease-in-out max-lg:translate-x-0 ${leftOpen ? 'w-64' : 'w-16 max-lg:-translate-x-full max-lg:w-64'}`}>
            <div className="h-16 flex items-center px-4 border-b border-sidebar-border relative">
                <a
                    className="flex items-center gap-3 transition-all duration-300"
                    href={type === 'student' ? '/student' : '/teacher'}>
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
                        <Icon name={'GraduationCap'} className="w-5 h-5 text-primary-foreground"/>
                    </div>
                    <span
                        className={`font-bold text-lg whitespace-nowrap transition-all duration-300 ${leftOpen ? 'opacity-100 translate-x-0' : 'lg:opacity-0 lg:absolute lg:-translate-x-4 lg:pointer-events-none'}`}>Rankio</span></a>
                <button
                    className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent/50 size-9 absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-sidebar-foreground/70 hover:text-sidebar-foreground transition-all duration-300 cursor-pointer ${!leftOpen ? 'lg:hidden' : ''}`}
                    onClick={() => setLeftOpen(!leftOpen)}>
                    <Icon name={'PanelLeftClose'} className="w-4 h-4"/>
                    <span className="sr-only">Fechar menu</span></button>
            </div>
            <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto overflow-x-hidden">
                {links.map((link) => {
                    const Icon_ = link.icon;
                    const isActive = linkHref === link.href;

                    const linkContent = (
                        <Link
                            to={link.href}
                            title={link.label}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                                isActive
                                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                                    : "text-sidebar-foreground/70 hover:bg-primary/10 dark:hover:text-sidebar-accent-foreground hover:text-sidebar-accent",
                                !leftOpen && "lg:justify-center lg:px-2.5"
                            )}
                        >
                            <Icon name={Icon_} className="w-5 h-5 shrink-0"/>
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
            {isStudent &&
                <div
                    className="mx-3 mb-4 p-3 rounded-lg bg-muted/50 border border-sidebar-border transition-all duration-300">
                    <div className={`flex items-center gap-2 mb-2 ${!leftOpen ? 'lg:justify-center lg:mb-0' : ''}`}>
                        <Icon name={'Gamepad2'} className="w-4 h-4 text-primary shrink-0"/>
                        <span
                            className={`text-xs font-medium whitespace-nowrap transition-all duration-300 text-muted-foreground ${!leftOpen ? 'lg:hidden' : ''}`}>Nivel 8</span>
                    </div>
                    <div className={!leftOpen ? 'lg:hidden' : ''}>
                        <div
                            className="w-full h-2 bg-sidebar-border rounded-full overflow-hidden transition-all duration-300">
                            <div
                                className="h-full bg-primary rounded-full transition-all w-1/6"
                            />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 transition-all duration-300">2450 XP</p>
                    </div>
                </div>
            }
            <div
                className={`p-2 border-t border-sidebar-border transition-all duration-300 ${leftOpen ? 'lg:hidden' : ''}`}>
                <button
                    className={`cursor-pointer inline-flex items-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 w-full justify-center text-sidebar-foreground/70 hover:text-sidebar-foreground rotate-180 ${leftOpen ? 'lg:hidden' : ''}`}
                    onClick={() => setLeftOpen(!leftOpen)}>
                    <Icon name={'PanelLeft'} className="w-4 h-4 self-center"/>
                    <span className="sr-only">Abrir menu</span>
                </button>
            </div>
        </aside>
    </>
}
