const  express = require('express')
const router = express.Router()
const produit = require('../controller/produit');

router.get('/allProduit',produit. getProduit)
router.post('/addProduit',produit.addPoduit)
router.delete('/id/deleteProduit', produit.deleteProduit)
router.put('/id/update',produit.updateProduit)

module.exports= router