import { api } from "./api";

export const teacherDashboard = () =>
    api.get("/teacher/");
