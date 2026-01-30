import ThemeToggle from "../../components/ThemeToggle.js";
import Icon from "../../components/Icon.js";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../contexts/AuthContext.js";
import {userStore} from "../../stores/userStore.js";
import {getInitials} from "../../lib/stringUtils.js";

export default function Header({leftOpen, rightOpen}) {
    const {logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const user = userStore((state) => state.user);
    const initials = getInitials(user.name);

    const handleLogout = async () => {
        try {
            logout();
            navigate('/login');
        } catch (error) {
            console.error("Erro ao fazer logout", error);
            navigate('/login');
        }
    };

    return <>
        <header
            className={`fixed top-0 z-30 h-16 bg-card/80 backdrop-blur-sm border-b border-border transition-all duration-300 flex items-center justify-between px-4 ${leftOpen ? "left-64" : "left-16"} ${rightOpen ? "right-72" : "right-12"}`}>
            <div className="flex items-center gap-2">
                <h1 className="text-lg font-semibold hidden sm:block">Área do Professor</h1>
                <span
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-xs capitalize">professor</span>
            </div>
            <div className="flex items-center gap-2">
                <ThemeToggle/>
                <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 rounded-full cursor-pointer"
                    onClick={handleLogout}>
                    <Icon name={'LogOut'}/>
                </button>
                <button
                    className="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 py-2 flex items-center gap-2 px-2"
                    type="button" id="radix-_r_1_" aria-haspopup="menu" aria-expanded="false"
                    data-state="closed">
                    <span className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-8 h-8">
                        <span
                            className="flex size-full items-center justify-center rounded-full bg-primary/10 text-primary text-sm">{initials}</span>
                    </span>
                    <span
                        className="text-sm font-medium hidden sm:inline">Prof. {user.name}</span>
                </button>
            </div>
        </header>
    </>
}
