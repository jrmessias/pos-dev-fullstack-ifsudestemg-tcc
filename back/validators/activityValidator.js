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

const booleanSchema = z.preprocess(parseBooleanInput, z.boolean());

const activityIndexQuerySchema = z.object({
    discipline: z.coerce.number().int().positive().optional(),
}).strict();

const activityParamsSchema = z.object({
    id: z.coerce.number().int().positive(),
});

const answerSchema = z.object({
    title: z.string().trim().min(1).max(45),
    text: z.string().trim().min(1).max(45),
    correct: booleanSchema,
});

const questionSchema = z.object({
    name: z.string().trim().min(1).max(255),
    text: z.string().trim().max(255).optional(),
    type: z.enum(["choose", "boolean"]),
    answers: z.array(answerSchema).min(4),
}).superRefine((question, ctx) => {
    if (question.text) {
        const validImagePath = /^\/uploads\/questions\/.+\.(jpg|jpeg|png)$/i.test(question.text);
        if (!validImagePath) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Imagem da pergunta deve ser JPG ou PNG",
                path: ["text"],
            });
        }
    }

    const correctCount = question.answers.filter((answer) => answer.correct).length;

    if (correctCount !== 1) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Cada pergunta deve ter exatamente uma resposta correta",
            path: ["answers"],
        });
    }

    if (question.type === "choose") {
        if (question.answers.length < 4) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Perguntas do tipo escolha devem ter pelo menos 4 respostas",
                path: ["answers"],
            });
        }

        return;
    }

    if (question.answers.length !== 2) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Perguntas verdadeiro ou falso devem ter exatamente 2 respostas",
            path: ["answers"],
        });
        return;
    }

    const normalizedTexts = question.answers.map((answer) => answer.text.trim().toLowerCase());
    const hasTrue = normalizedTexts.includes("verdadeiro");
    const hasFalse = normalizedTexts.includes("falso");

    if (!hasTrue || !hasFalse) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Perguntas verdadeiro ou falso devem usar apenas as respostas Verdadeiro e Falso",
            path: ["answers"],
        });
    }
});

const activityStoreSchema = z.object({
    discipline_id: z.coerce.number().int().positive(),
    name: z.string().trim().min(1).max(45),
    text: z.string().trim().max(65535).optional(),
    active: booleanSchema.optional(),
    time_limit: z.enum(["00:00:20", "00:00:30", "00:01:00"]),
    questions: z.array(questionSchema).min(1, "A atividade deve ter ao menos uma pergunta"),
}).strict();

module.exports = {
    activityIndexQuerySchema,
    activityParamsSchema,
    activityStoreSchema,
};
