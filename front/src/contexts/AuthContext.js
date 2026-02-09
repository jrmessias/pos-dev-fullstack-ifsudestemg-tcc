import {createContext, useCallback, useEffect, useState} from 'react';
import {logoutRequest, meRequest} from "../services/authService.js";
import {userStore} from "../stores/userStore.js";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const setUserStore = userStore((state) => state.setUser);
    const navigate = useNavigate();

    const clearAuthState = useCallback(() => {
        setUser(null);
        setUserStore(null);
    }, [setUserStore]);

    async function logout() {
        try {
            await logoutRequest();
        } catch (error) {
            console.error("Erro ao encerrar sessão no servidor", error);
        }
        clearAuthState();
        navigate('/login', {replace: true});
    }

    const loadUser = useCallback(async () => {
        try {
            const res = await meRequest();
            const userData = res.data.user || res.data;
            setUser(userData);
            setUserStore(userData);
        } catch {
            clearAuthState();
        } finally {
            setLoading(false);
        }
    }, [clearAuthState]);

    useEffect(() => {
        loadUser();
    }, [loadUser]);

    useEffect(() => {
        const handleSessionExpired = () => {
            clearAuthState();
            navigate('/login', {replace: true});
        };

        window.addEventListener('auth:session-expired', handleSessionExpired);

        return () => {
            window.removeEventListener('auth:session-expired', handleSessionExpired);
        };
    }, [clearAuthState, navigate]);

    return (
        <AuthContext.Provider value={{user, loading, setUser, logout}}>
            {children}
        </AuthContext.Provider>
    );
}
