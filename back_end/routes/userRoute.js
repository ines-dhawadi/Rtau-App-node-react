const express=require('express');
const router=express.Router()
const user = require('../controller/user');


router.get('/user', user.getAll )

module.exports =  router