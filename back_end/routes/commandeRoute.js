const express = require('express')
const router = express.Router()
const commande = require('../controller/commande')
 router.get('/commande',commande.getAll)