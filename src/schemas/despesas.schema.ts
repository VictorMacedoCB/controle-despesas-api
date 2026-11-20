import z from 'zod'

export const cadastrarDespesaSchema = z.object({
    descricao: z.string().trim().min(2),
    categoria : z.string().trim().min(2),
    valor: z.number().positive(),
})

export const atualizarDespesaSchema = cadastrarDespesaSchema
    .partial()
    .refine(
        (dados) => Object.keys(dados).length >= 1, {
        message: 'Dados insuficientes'
})

export const idSchema = z.uuid()