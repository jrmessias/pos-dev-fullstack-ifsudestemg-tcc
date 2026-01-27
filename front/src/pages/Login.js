import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginSchema} from "../validators/loginSchema";
import {loginRequest} from "../services/authService";
import { useState} from "react";
import logo from "../assets/react.svg";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    async function onSubmit(data) {
        try {
            setLoading(true);
            setError(null);

            const result = await loginRequest(data);
            console.log("Login sucesso:", result.data);

            // exemplo: persistência simples
            // localStorage.setItem("token", result.token);

            // const { user } = await meRequest('/me');
            // console.log(user)
            // setUser(user);
            if (result.data.user.role === 'teacher') navigate('/teacher');
            else navigate('/student');
        } catch (err) {

            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-900">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-sm bg-white p-6 rounded-xl shadow dark:bg-slate-800"
            >
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img
                        src={logo}
                        alt="Logo do sistema"
                        className="h-14 object-contain"
                    />
                </div>

                <h1 className="text-lg font-semibold mb-4 text-center">
                    Acesso ao sistema
                </h1>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        {...register("email")}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                    />
                    {errors.email && (
                        <div
                            className="mb-3 text-sm p-2 rounded bg-red-100 text-red-800 dark:text-red-800 dark:bg-red-200 text-center">
                            {errors.email.message}
                        </div>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Senha</label>
                    <input
                        type="password"
                        {...register("password")}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                    />
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
                )
                }

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-900 text-white py-2 rounded-md hover:bg-slate-700 transition disabled:opacity-60"
                >
                    {loading ? "Entrando..." : "Entrar"}
                </button>
            </form>
        </div>
    );
}
