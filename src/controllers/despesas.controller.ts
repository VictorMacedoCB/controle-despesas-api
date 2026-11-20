import { type Request,  type Response } from "express";
import { atualizarDespesa, cadastrarDespesa, deletarDespesa, listarDespesas } from "../services/despesas.service.js";
import { atualizarDespesaSchema, cadastrarDespesaSchema, idSchema } from "../schemas/despesas.schema.js";

export const listarDespesasController = async (req: Request, res: Response) => {
        const resultado = await listarDespesas()
        return res.status(200).json({ resultado })
}

export const novaDespesa = async (req: Request, res: Response) =>{
        const resultado = cadastrarDespesaSchema.safeParse(req.body)
        if(!resultado.success) return res.status(400).json({ message: "Dados inválidos" })

        const resultData = await cadastrarDespesa(resultado.data)
        return res.status(201).json({ resultData })
} 

export const deletarDespesaController = async (req : Request, res : Response) => {
        const despesa = req.params.id
        if (!despesa) return res.status(404).json({message: "Despesa nao encontrada"})

        const validacaoId = idSchema.safeParse(despesa)
        if(!validacaoId.success) {
            return res.status(400).json("ID inválido")
        }

        const resultado = await deletarDespesa(validacaoId.data)
        if(!resultado) return res.status(404).json({message: "Despesa nao encontrada"})
        return res.status(200).json({ message: 'Despesa excluida com sucesso'})
}

export const atualizarDespesaController = async (req: Request, res: Response) => {
        const resultado = atualizarDespesaSchema.safeParse(req.body)
        const resultId = req.params.id

        if(typeof resultId !== 'string') {
            return res.status(400).json("ID inválido") 
        } 
        const validacaoId  = idSchema.safeParse(resultId)
        if(!resultado.success) {
            return res.status(400).json("Dados invalidos")
        } 
        if(!validacaoId.success) {
            return res.status(400).json("ID inválido")
        } 
        const resultData = await atualizarDespesa(validacaoId.data, resultado.data)
        if(resultData === false) {
            return res.status(404).json("Despesa não encontrada")
        } 
        return res.status(200).json({ message: 'Despesa atualizada' })
}