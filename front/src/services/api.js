import axios from "axios";
console.log(import.meta.env.VITE_API_URL)
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        const message =
            error.response?.data?.message || "Erro inesperado";
        return Promise.reject(new Error(message));
    }
);
