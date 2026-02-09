import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

let isRefreshing = false;
let refreshPromise = null;

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        const status = error?.response?.status;
        const code = error?.response?.data?.code;
        const isRefreshEndpoint = originalRequest?.url?.includes('/auth/refresh');

        if (status !== 401 || code !== 'TOKEN_EXPIRED' || originalRequest?._retry || isRefreshEndpoint) {
            return Promise.reject(error);
        }

        originalRequest._retry = true;

        try {
            if (!isRefreshing) {
                isRefreshing = true;
                refreshPromise = api.post('/auth/refresh');
            }

            await refreshPromise;
            return api(originalRequest);
        } catch (refreshError) {
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('auth:session-expired'));
            }
            return Promise.reject(refreshError);
        } finally {
            isRefreshing = false;
            refreshPromise = null;
        }
    }
);
