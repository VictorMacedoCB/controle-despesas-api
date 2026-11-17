import { Router } from "express"
import { atualizarDespesaController, deletarDespesaController, listarDespesasController, novaDespesa } from "../controllers/despesas.controller.js"

const router = Router()

router.get('/', listarDespesasController)
router.post('/', novaDespesa)
router.delete('/:id', deletarDespesaController)
router.patch('/:id', atualizarDespesaController)

export default router