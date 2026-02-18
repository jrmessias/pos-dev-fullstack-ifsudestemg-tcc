const { z } = require("zod");

const achievementParamsSchema = z.object({
    id: z.coerce.number().int().positive(),
});

const achievementStoreSchema = z.object({
    name: z.string().trim().min(1).max(45),
    type: z.enum(['gold', 'silver', 'bronze']),
    text: z.string().trim().max(100).optional(),
}).strict();

const achievementUpdateSchema = z.object({
    name: z.string().trim().min(1).max(45).optional(),
    type: z.enum(['gold', 'silver', 'bronze']).optional(),
    text: z.string().trim().max(100).optional(),
}).strict().refine(
    (data) => data.name !== undefined || data.type !== undefined || data.text !== undefined,
    { message: "Envie ao menos um campo para atualizar" }
);

const achievementAssignSchema = z.object({
    user_ids: z.array(z.number().int().positive()).min(1, "Selecione ao menos um aluno"),
}).strict();

module.exports = {
    achievementParamsSchema,
    achievementStoreSchema,
    achievementUpdateSchema,
    achievementAssignSchema,
};
