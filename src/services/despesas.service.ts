import type { Despesa } from "../despesas.js";
import { criar, listar } from "../repositories/despesas.repository.js";


export const cadastrarDespesa = async  (novaDespesa : Despesa) =>{
    const resultado = await criar(novaDespesa)
    return resultado
} 

export const listarDespesas = async () => {
    const resultado = await listar()
    return resultado
}