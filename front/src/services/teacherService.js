import { api } from "./api";

export const teacherDashboard = () =>
    api.get("/teacher/");

export const teacherGamification = () =>
    api.get("/teacher/gamification");

export const teacherRanking = (params) =>
    api.get("/teacher/ranking", { params });

export const teacherDisciplinesWithActivities = () =>
    api.get("/teacher/disciplines-with-activities");
