const { z } = require("zod");

const studentActivitiesQuerySchema = z.object({
    status: z.enum(["pending", "completed", "all"]).optional(),
    page: z.coerce.number().int().positive().optional(),
    pageSize: z.coerce.number().int().positive().optional(),
}).strict();

const enrollSchema = z.object({
    key: z.string().min(1, "A chave da disciplina é obrigatória.").max(50),
}).strict();

module.exports = {
    studentActivitiesQuerySchema,
    enrollSchema,
};
