import { api } from "./api";

export const disciplineIndex = (data) =>
    api.get("/discipline/", data);

export const disciplineDelete = (id) =>
    api.delete("/discipline/"+id);

export const disciplineStudents = (id) =>
    api.get(`/discipline/${id}/students`);

export const disciplineStore = (data) =>
    api.post("/discipline/store", data);

export const disciplineUpdate = (id, data) =>
    api.post(`/discipline/${id}`, data);

export const disciplineToggle = (id) =>
    api.get(`/discipline/toggle/${id}`);
