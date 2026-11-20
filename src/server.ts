import express from 'express'
import router from './routes/despesas.routes.js'
import { errorMiddleware } from './middlewares/error.middleware.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/despesas', router)
app.use(errorMiddleware)

app.listen(PORT, () =>{
    console.log(`APP RODANDO NA PORTA ${PORT}`)
})
