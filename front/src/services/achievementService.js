import { api } from "./api";

export const achievementIndex = (data) =>
    api.get("/achievement/", data);

export const achievementStore = (data) =>
    api.post("/achievement/store", data);

export const achievementShow = (id) =>
    api.get(`/achievement/${id}`);

export const achievementUpdate = (id, data) =>
    api.post(`/achievement/${id}`, data);

export const achievementDelete = (id) =>
    api.delete("/achievement/" + id);

export const achievementToggle = (id) =>
    api.get(`/achievement/toggle/${id}`);

export const achievementAssign = (id, data) =>
    api.post(`/achievement/${id}/assign`, data);

export const achievementUnassign = (id, userId) =>
    api.delete(`/achievement/${id}/unassign/${userId}`);

export const achievementUsers = (id) =>
    api.get(`/achievement/${id}/users`);

export const teacherStudents = () =>
    api.get("/teacher/students");
