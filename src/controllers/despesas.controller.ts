import { type Request,  type Response } from "express";
import { atualizarDespesa, cadastrarDespesa, deletarDespesa, listarDespesas } from "../services/despesas.service.js";

export const listarDespesasController = async (req: Request, res: Response) => {
    try {
        const resultado = await listarDespesas()
        res.status(200).json({ resultado })
    } catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" })
        console.error(error)
    }
}

export const novaDespesa = async (req: Request, res: Response) =>{
    try {
        const despesa = req.body
        if (!despesa.categoria || (!despesa.valor || typeof despesa.valor !== 'number' || despesa.valor <= 0) || !despesa.descricao || despesa.categoria.trim() === '' || despesa.descricao.trim() === '') {
            return res.status(400).json({
                message: "Dados inválidos"
            })
        }
        const resultado = await cadastrarDespesa(despesa)
        res.status(201).json({ resultado })
    } catch (error) {
        res.status(500).json({message: "Erro interno do servidor"})
        console.error(error)
    } 
} 

export const deletarDespesaController = async (req : Request, res : Response) => {
    try {
        const despesa = req.params.id
        if (!despesa) return res.status(404).json({message: "Despesa nao encontrada"})
        const resultado = await deletarDespesa(despesa as string)
        if(!resultado) return res.status(404).json({message: "Despesa nao encontrada"})
        res.status(200).json({ message: 'Despesa excluida com sucesso'})
    } catch (error) {
        res.status(500).json({message: "Erro interno do servidor"})
        console.error(error)
    }
}

export const atualizarDespesaController = async (req: Request, res: Response) => {
    try {
        const despesa = req.body
        const despesaId = req.params.id
        if(!despesaId) return res.status(400).json({message: "Despesa nao encontrada"})
        if(Object.keys(despesa).length <= 0) return res.status(400).json({message: "Dados ausentes"})
        if(
            despesa.descricao !== undefined && (typeof despesa.descricao !== 'string' || despesa.descricao.trim() === '') || 
            despesa.categoria !== undefined && (typeof despesa.categoria !== 'string' || despesa.categoria.trim() === '') || 
            despesa.valor !== undefined && (typeof despesa.valor !== 'number' || despesa.valor <= 0) 
            ){
            return res.status(400).json({
                message: "Dados inválidos"
            })
        }
        if (typeof despesaId !== 'string') {
            return res.status(400).json({
            message: "ID inválido"
            })
        }
        const resultado = await atualizarDespesa(despesaId, despesa)
        if(!resultado) res.status(400).json("Despesa nao encontrada")
        res.status(200).json({message: 'Despesa atualizada'})
    } catch (error) {
        res.status(500).json({message: "Erro interno do servidor"})
        console.error(error)
    }
}