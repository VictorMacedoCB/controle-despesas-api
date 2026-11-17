import express from 'express'
import router from './routes/despesas.routes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/despesas', router)

app.listen(PORT, () =>{
    console.log(`APP RODANDO NA PORTA ${PORT}`)
})
