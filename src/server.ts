import express, { type Request, type Response } from 'express'
import router from './routes/despesas.routes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/despesas', router)

app.get('/', (req: Request, res: Response) => {
    res.json("Servidor rodando com sucesso")
})

app.listen(PORT, () =>{
    console.log(`APP RODANDO NA PORTA ${PORT}`)
})
