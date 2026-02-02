import {createContext, useEffect, useState} from 'react';
import {logoutRequest, meRequest} from "../services/authService.js";
import {api, setAuthToken} from "../services/api.js";
import {userStore} from "../stores/userStore.js";

export const AuthContext = createContext({});

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const setUserStore = userStore((state) => state.setUser);

    async function logout() {
        try {
            await logoutRequest();
        } catch (error) {
            console.error("Erro ao encerrar sessão no servidor", error);
        }
        console.log('logout executado');
        setUser(null);
        setUserStore(null); // É boa prática limpar a store do Zustand também
        localStorage.removeItem("token");
        localStorage.clear();
        delete api.defaults.headers.Authorization; // Forma correta de limpar header no axios
    }

    async function loadUser() {
        try {
            const res = await meRequest();
            const userData = res.data.user || res.data;
            setUser(userData);
            setUserStore(userData);
        } catch {
            setUser(null);
            localStorage.removeItem("token");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setAuthToken(token);
            loadUser();
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{user, loading, setUser, logout}}>
            {children}
        </AuthContext.Provider>
    );
}
