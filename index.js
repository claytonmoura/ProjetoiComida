const express = require('express')
require('dotenv').config()
const InicializaMongoServer =require('./config/Db')
//definindo as rotas da aplicaçao
const rotasCategoria = require('./routes/Categoria')

InicializaMongoServer()

const app = express()
//porta default
const PORT = 4000
//Parse conteudo
app.use(express.json())

app.get('/', (req, res) => {

res.json({mensagem: "API iComida 100% funcional!",
            versao: '1.0.0',})
})

app.use('/categorias', rotasCategoria)

app.listen(PORT, (req, res)=> {
    console.log(`Servidor Web iniciado na porta ${PORT}`)
})