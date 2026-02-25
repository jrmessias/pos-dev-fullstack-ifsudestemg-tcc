import { api } from './api';

export const startActivity = (activityId) =>
    api.get(`/student/activity/${activityId}/start`);

export const submitAnswer = (activityId, data) =>
    api.post(`/student/activity/${activityId}/answer`, data);

export const getQuestionRanking = (activityId, questionId) =>
    api.get(`/student/activity/${activityId}/question/${questionId}/ranking`);
