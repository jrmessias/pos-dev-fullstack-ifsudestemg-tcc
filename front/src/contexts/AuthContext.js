import {createContext, useEffect, useState} from 'react';
import {meRequest} from "../services/authService.js";
import {setAuthToken} from "../services/api.js";

export const AuthContext = createContext({});

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    async function loadUser() {
        try {
            const res = await meRequest();
            const userData = res.data.user || res.data;
            setUser(userData);
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
        <AuthContext.Provider value={{user, loading, setUser}}>
            {children}
        </AuthContext.Provider>
    );
}
