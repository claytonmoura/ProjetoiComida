const mongoose = require('mongoose')

const MONGOURI = process.env.MONGODB_URL

const InicializaMongoServer = async() => {
    try{
await mongoose.connect(MONGOURI,{
    useNewUrlParser: true, //forçamos a utilizar o ultimo parser de url
    useCreateIndex: true, //qdo necessario, utilizara a criaçao de indices,
    useFindAndModify: false, //O padrao eh encontrar os registros e alterar todos
    useUnifiedTopology: true // utilizamos o engine para descoberta de servidores
})
console.log("⚡Conectado ao MongoDB!! ")
    }catch (e){
console.error(e)
throw e //'explodira' os detalhes do erro
    }
}

module.exports = InicializaMongoServer