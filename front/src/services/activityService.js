import { api } from "./api";

export const activityIndex = (data) =>
    api.get("/activity/", data);

export const activityToggle = (id) =>
    api.get(`/activity/toggle/${id}`);

export const activityDelete = (id) =>
    api.delete(`/activity/${id}`);
