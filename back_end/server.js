const express = require ('express');
const app = express()


//  importation db=> config
const db= require ('./config/db')
db();



// importation Router
const  produitRouter= require('./routes/produitRoute')
const userRoute = require('./routes/userRoute')
const commandeRoute = require('./routes/commandeRoute')



// use router 
app.use('/app/produit',produitRouter)
app.use('/app/user',userRoute)
app.use('/app/commande',commandeRoute)






// CONFIGIRATION DE SERVER (CONNEXION DE SERVER)

const PORT = process.env.PORT || '4000'




app.listen(PORT,()=>{
    console.log(`server is runing ${PORT}`)
})