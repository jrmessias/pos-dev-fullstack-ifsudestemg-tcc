import { z } from "zod";

export const achievementSchema = z.object({
    name: z.string()
        .trim()
        .min(1, "O nome da conquista é obrigatório")
        .max(45, "O nome deve ter no máximo 45 caracteres"),
    type: z.enum(['gold', 'silver', 'bronze'], {
        required_error: "O tipo da conquista é obrigatório",
        invalid_type_error: "Selecione um tipo válido",
    }),
    text: z
        .string()
        .trim()
        .max(100, "A descrição deve ter no máximo 100 caracteres")
        .optional()
        .or(z.literal("")),
});
