import z from 'zod'
import { atualizarDespesaSchema, cadastrarDespesaSchema } from './schemas/despesas.schema.js'
export type Despesa = {
    descricao: string,
    categoria: string,
    valor: string,
    id: string,
    criado_em: Date
}

export type CadastrarDespesa = z.infer<typeof cadastrarDespesaSchema>
export type AtualizarDespesa = z.infer<typeof atualizarDespesaSchema>
