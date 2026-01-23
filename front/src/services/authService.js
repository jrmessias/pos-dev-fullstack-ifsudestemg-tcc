import { api } from "./api";

export const loginRequest = (data) =>
    api.post("/auth/login", data);

export const meRequest = () =>
    api.get("/auth/me");

export const logoutRequest = () =>
    api.post("/auth/logout");
