import {z} from "zod";

export const disciplineSchema = z.object({
    name: z.string()
        .trim()
        .min(10, "O nome da disciplina deve ter no mínimo 10 caracteres")
        .max(45, "O nome deve ter no máximo 45 caracteres"),
    description: z
        .string()
        .trim()
        .max(255, "A descrição deve ter no máximo 255 caracteres")
        .optional()
        .or(z.literal("")),
    active: z.boolean().default(false),
});
