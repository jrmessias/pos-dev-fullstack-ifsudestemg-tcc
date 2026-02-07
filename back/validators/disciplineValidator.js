const { z } = require("zod");

function parseBooleanInput(value) {
    if (typeof value === "boolean") return value;
    if (typeof value === "number" && (value === 0 || value === 1)) return value === 1;

    if (typeof value === "string") {
        const normalized = value.trim().toLowerCase();

        if (["true", "1", "on"].includes(normalized)) return true;
        if (["false", "0", "off"].includes(normalized)) return false;
    }

    return value;
}

const activeSchema = z.preprocess(parseBooleanInput, z.boolean());

const disciplineParamsSchema = z.object({
    id: z.coerce.number().int().positive(),
});

const disciplineStoreSchema = z.object({
    name: z.string().trim().min(1).max(45),
    description: z.string().trim().max(255).optional(),
    active: activeSchema.optional(),
}).strict();

const disciplineUpdateSchema = z.object({
    name: z.string().trim().min(1).max(45).optional(),
    description: z.string().trim().max(255).optional(),
    active: activeSchema.optional(),
}).strict().refine(
    (data) => data.name !== undefined || data.description !== undefined || data.active !== undefined,
    { message: "Envie ao menos um campo para atualizar" }
);

module.exports = {
    disciplineParamsSchema,
    disciplineStoreSchema,
    disciplineUpdateSchema,
};
