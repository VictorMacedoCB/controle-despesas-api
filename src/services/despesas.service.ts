import type { AtualizarDespesa, Despesa, NovaDespesa } from "../despesas.js";
import { atualizar, criar, deletar, listar } from "../repositories/despesas.repository.js";


export const cadastrarDespesa = async  (novaDespesa : NovaDespesa) : Promise<Despesa> =>{
    const resultado = await criar(novaDespesa)
    return resultado
} 

export const listarDespesas = async () : Promise<Despesa[]> => {
    const resultado = await listar()
    return resultado
}

export const deletarDespesa = async (id: string) : Promise<boolean> => {
    return await deletar(id)
}

export const atualizarDespesa = async (id:string, dados: AtualizarDespesa) : Promise<boolean> => {
    return await atualizar(id, dados)
}