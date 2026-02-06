import { api } from "./api";

export const activityIndex = (data) =>
    api.get("/activity/", data);
