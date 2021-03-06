const express = require('express')
const router = express.Router()
const Categoria = require('../model/Categoria')

/**************************************** 
 * lista todas as categorias
 * GET /categorias
****************************************/

router.get('/', async(req, res)=> {
try{
    const categorias = await Categoria.find({"status":"ativo"}).sort({nome: 1})
    res.json(categorias)
}catch (err){
    res.status(500).send({
        errors: [{message: 'Nao foi possivel obter as categorias'}]
       })
   }
}) 

module.exports = router