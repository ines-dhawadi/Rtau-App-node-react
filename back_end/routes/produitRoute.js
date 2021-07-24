const  express = require('express')
const router = express.Router()
const produit = require('../controller/produit');

router.get('/allProduit',produit.getAll)


module.exports= router