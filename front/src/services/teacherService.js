import { api } from "./api";

export const teacherDashboard = () =>
    api.get("/teacher/");

export const teacherGamification = () =>
    api.get("/teacher/gamification");
