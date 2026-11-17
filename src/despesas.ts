export type Despesa = {
    descricao: string,
    categoria: string,
    valor: string,
    id: string,
    criado_em: Date
}

export type NovaDespesa = {
    descricao: string,
    categoria: string,
    valor: number
} 

export type AtualizarDespesa = {
    descricao?: string,
    categoria?: string,
    valor?: number
}