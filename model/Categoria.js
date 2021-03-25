const mongoose = require('mongoose')

//criando o schema categoria
const CategoriaSchema =
mongoose.Schema({
    nome: {
type: String,
unique: true //cria um indice unico
    },
    status: {
type: String,
enum: ['ativo', 'inativo'],
default: 'ativo'
    }
},{timestamps:true})

module.exports =
mongoose.model('categoria',
CategoriaSchema)