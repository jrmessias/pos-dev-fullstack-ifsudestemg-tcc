import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginSchema} from "../validators/loginSchema";
import {loginRequest, meRequest} from "../services/authService";
import {useContext, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import ThemeToggle from "@/components//ThemeToggle.js";
import Icon from "@/components//Icon.js";
import {AuthContext} from "../contexts/AuthContext.js";
import {Toaster} from "@/components/ui/sonner.jsx";
import {toast} from "sonner";

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const { user, setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    useEffect(() => {
        if (user) {
            const role = user.role;
            const targetRoute = role === 'teacher' ? '/teacher' : '/student';
            navigate(targetRoute, { replace: true });
        }
    }, [user, navigate]);
    
    useEffect(() => {
        if (location.state?.message) {
            setSuccess(location.state.message);
            // Clear the message from location state
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate]);

    async function onSubmit(data) {
        try {
            setLoading(true);
            setError(null);

            await loginRequest(data);

            const meResponse = await meRequest('/me');

            const userData = meResponse?.data?.user || meResponse?.data;

            if (!userData) throw new Error("Dados do usuário não retornados pelo /me");

            setUser(userData);

            const role = userData.role;

            const targetRoute = role === 'teacher' ? '/teacher' : '/student';

            // const role = meResponse?.data?.role;
            navigate(targetRoute, {replace: true});
        } catch (err) {
            toast.error(err?.response?.data?.message || err.message || 'Erro ao autenticar', {position: "top-center", autoClose: 5000});
        } finally {
            setLoading(false);
        }
    }

    return <>
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="absolute top-4 right-4">
                <ThemeToggle/>
            </div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/15 rounded-full blur-3xl"></div>
            </div>
            <div
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 w-full max-w-md relative z-10 shadow-xl border-border/50">
                <div
                    className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center pb-2">
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-4">
                        <Icon name={'GraduationCap'} className="w-8 h-8 text-primary-foreground"/>
                    </div>
                    <div className="text-2xl font-bold">Rankio</div>
                    <div className="text-muted-foreground text-sm">Plataforma educacional
                        gamificada
                    </div>
                </div>
                <div className="px-6 space-y-4">
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-2"><label
                            className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                            htmlFor="email">Email</label>
                            <div className="relative">
                                <Icon name={'Mail'}
                                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"/>
                                <input
                                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10"
                                    id="email"
                                    {...register("email")}
                                    placeholder="seu@email.com" type="email" name="email"/>
                                {errors.email && (
                                    <div
                                        className="mb-3 text-sm p-2 rounded bg-red-100 text-red-800 dark:text-red-800 dark:bg-red-200 text-center">
                                        {errors.email.message}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="space-y-2"><label
                            className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                            htmlFor="password">Senha</label>
                            <div className="relative">
                                <Icon name={'Lock'}
                                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"/>
                                <input
                                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10"
                                    id="password"
                                    {...register("password")}
                                    placeholder="••••••••" type={showPassword ? 'text' : 'password'} name="password"/>
                                <button type="button" aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'} title={showPassword ? 'Ocultar senha' : 'Mostrar senha'} onClick={() => setShowPassword(s => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center p-1 rounded">
                                    <Icon name={showPassword ? 'EyeOff' : 'Eye'} className="w-4 h-4 text-muted-foreground" />
                                </button>
                                {errors.password && (
                                    <div
                                        className="mb-3 text-sm p-2 rounded bg-red-100 text-red-800 dark:text-red-800 dark:bg-red-200 text-center">
                                        {errors.password.message}
                                    </div>
                                )}
                            </div>
                            {error && (
                                <div
                                    className="mb-3 text-sm p-2 rounded bg-red-100 text-red-800 dark:text-red-800 dark:bg-red-200 text-center">
                                    {error}
                                </div>
                            )}
                            
                            {success && (
                                <div
                                    className="mb-3 text-sm p-2 rounded bg-green-100 text-green-800 dark:text-green-800 dark:bg-green-200 text-center">
                                    {success}
                                </div>
                            )}
                        </div>
                        <button
                            disabled={loading}
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 w-full"
                            type="submit">{loading ? "Entrando..." : "Entrar"}
                        </button>
                        
                        <div className="text-center text-sm">
                            Não tem uma conta?{" "}
                            <a href="/register" className="text-primary hover:underline">
                                Registre-se aqui
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Toaster richColors/>
    </>
}
