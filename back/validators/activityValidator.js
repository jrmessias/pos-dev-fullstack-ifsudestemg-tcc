const { z } = require("zod");

const activityIndexQuerySchema = z.object({
    discipline: z.coerce.number().int().positive().optional(),
}).strict();

const activityParamsSchema = z.object({
    id: z.coerce.number().int().positive(),
});

module.exports = {
    activityIndexQuerySchema,
    activityParamsSchema,
};
