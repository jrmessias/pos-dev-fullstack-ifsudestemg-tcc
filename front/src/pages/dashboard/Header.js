import ThemeToggle from "../../components/ThemeToggle.js";
import Icon from "../../components/Icon.js";
import {useContext} from "react";
import {AuthContext} from "@/contexts/AuthContext.js";
import {useNavigate} from "react-router-dom";
import {getInitials} from "@/lib/stringUtils.js";
import {Avatar, AvatarFallback} from "@/components/ui/avatar.jsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.jsx";
import {Button} from "@base-ui/react";
import Greeting from "@/components/Greeting.js";

export default function Header({type, leftOpen, rightOpen}) {
    const {logout, user} = useContext(AuthContext);
    const navigate = useNavigate();
    if (!user) return null;
    const initials = getInitials(user.name);
    const isTeacher = type.includes("teacher");
    const subject = isTeacher ? "Professor" : "Aluno";

    const handleLogout = async () => {
        try {
            await logout();
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
                <h1 className="text-lg font-semibold hidden sm:block">Área do {subject}</h1>
                {/*<span*/}
                {/*    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground text-xs capitalize">{subject}</span>*/}
            </div>
            <div className="flex items-center gap-2">
                <Greeting/>
                <ThemeToggle/>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost"
                                className="flex items-center gap-2 px-2 hover:bg-accent dark:hover:bg-accent/50 rounded-lg cursor-pointer shrink-0 p-1 outline-none dark:outline-none">
                            <Avatar className="w-8 h-8">
                                <AvatarFallback className="bg-primary/10 text-primary text-sm">
                                    {initials}
                                </AvatarFallback>
                            </Avatar>

                            <span className="text-sm font-medium hidden sm:inline">
                                {isTeacher && "Prof. "}
                {user?.name || "Usuário"}
                            </span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>
                            <div className="flex flex-col">
                                <span>{user?.name}</span>
                                <span className="text-xs font-normal text-muted-foreground">
                  {user?.email}
                </span>
                            </div>
                        </DropdownMenuLabel>
                        {/*<DropdownMenuSeparator/>*/}
                        {/*<DropdownMenuItem*/}
                        {/*    className="dark:hover:text-slate-50 hover:bg-accent dark:hover:bg-accent/30 rounded-lg cursor-pointer">*/}
                        {/*    <Icon name={'User'} className="w-4 h-4 mr-2"/>*/}
                        {/*    Perfil*/}
                        {/*</DropdownMenuItem>*/}
                        {/*<DropdownMenuItem*/}
                        {/*    className="dark:hover:text-slate-50 hover:bg-accent dark:hover:bg-accent/30 rounded-lg cursor-pointer">*/}
                        {/*    <Icon name={'Settings'} className="w-4 h-4 mr-2"/>*/}
                        {/*    Configurações*/}
                        {/*</DropdownMenuItem>*/}
                        {/*<DropdownMenuSeparator/>*/}
                        <DropdownMenuItem onClick={handleLogout}
                                          className="text-destructive hover:text-destructive hover:bg-accent dark:hover:bg-accent/30 rounded-lg cursor-pointer">
                            <Icon name={'LogOut'} className="w-4 h-4 mr-2"/>
                            Sair
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    </>
}
