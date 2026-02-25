const { z } = require('zod');

const submitAnswerSchema = z.object({
    question_id: z.number({ required_error: 'question_id é obrigatório' }).int().positive(),
    answer_id: z.number().int().positive().nullable(),
    answer_time: z.number({ required_error: 'answer_time é obrigatório' }).int().min(0),
});

module.exports = { submitAnswerSchema };
