import { request, type Request,  type Response } from "express";
import { cadastrarDespesa, listarDespesas } from "../services/despesas.service.js";

export const listarDespesasController = async (req: Request, res: Response) => {
    try {
        const resultado = await listarDespesas()
        res.status(200).json({ resultado })
    } catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" })
        console.log(error)
    }
}

export const novaDespesa = async (req: Request, res: Response) =>{
    try {
        const despesa = req.body
        if (!despesa.categoria || (!despesa.valor || typeof despesa.valor !== 'number') || !despesa.descricao) {
        return res.status(400).json({
            message: "Dados inválidos"
        })
        }
        const resultado = await cadastrarDespesa(despesa)
        res.status(201).json({message: resultado})
    } catch (error) {
        res.status(500).json({message: "Erro interno do servidor"})
        console.log(error)
    } 
} 