import { api } from "./api";

export const activityIndex = (data) =>
    api.get("/activity/", data);

export const activityToggle = (id) =>
    api.get(`/activity/toggle/${id}`);

export const activityDelete = (id) =>
    api.delete(`/activity/${id}`);

export const activityStore = (data) =>
    api.post("/activity/store", data);

export const activityShow = (id) =>
    api.get(`/activity/${id}`);

export const studentActivities = (params) =>
    api.get('/student/activities', { params });

export const activityUploadQuestionImage = (formData) =>
    api.post("/activity/upload-question-image", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
