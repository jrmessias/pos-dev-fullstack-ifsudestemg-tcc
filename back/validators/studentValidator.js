const { z } = require("zod");

const studentActivitiesQuerySchema = z.object({
    status: z.enum(["pending", "completed", "all"]).optional(),
    page: z.coerce.number().int().positive().optional(),
    pageSize: z.coerce.number().int().positive().optional(),
}).strict();

module.exports = {
    studentActivitiesQuerySchema,
};
