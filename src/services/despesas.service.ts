import type { AtualizarDespesa, Despesa, CadastrarDespesa } from "../despesas.js";
import { atualizar, criar, deletar, listar } from "../repositories/despesas.repository.js";

export const cadastrarDespesa = async  (novaDespesa : CadastrarDespesa) : Promise<Despesa> =>{
    return await criar(novaDespesa)
} 

export const listarDespesas = async () : Promise<Despesa[]> => {
    return await listar()
}

export const deletarDespesa = async (id: string) : Promise<boolean> => {
    return await deletar(id)
}

export const atualizarDespesa = async (id:string, dados: AtualizarDespesa) : Promise<boolean> => {
    return await atualizar(id, dados)
}