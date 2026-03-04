import { api } from "./api";

export const studentDashboard = () =>
    api.get("/student/");

export const studentDisciplines = () =>
    api.get("/student/disciplines");

export const studentEnroll = (data) =>
    api.post("/student/enroll", data);

export const studentAchievements = () =>
    api.get("/student/achievements");

export const studentRanking = () =>
    api.get("/student/ranking");
