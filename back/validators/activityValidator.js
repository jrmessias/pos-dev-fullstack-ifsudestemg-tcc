const { z } = require("zod");

const activityIndexQuerySchema = z.object({
    discipline: z.coerce.number().int().positive().optional(),
}).strict();

module.exports = {
    activityIndexQuerySchema,
};
