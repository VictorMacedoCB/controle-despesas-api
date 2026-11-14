import { Router } from "express"
import { listarDespesasController, novaDespesa } from "../controllers/despesas.controller.js"

const router = Router()

router.get('/', listarDespesasController)
router.post('/', novaDespesa)

export default router