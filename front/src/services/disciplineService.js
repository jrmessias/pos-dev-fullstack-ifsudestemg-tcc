import { api } from "./api";

export const disciplineIndex = (data) =>
    api.get("/discipline/", data);
