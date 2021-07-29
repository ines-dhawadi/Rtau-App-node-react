const express = require ('express');
const app = express()
const cors = require('cors')
const body = require ('body-parser')

//appel cors + body-parser
app.use(cors());
app.use(express.json());



//  importation db=> config
const db= require ('./config/db')
db();



// importation Router
const  produitRouter= require('./routes/produitRoute')
const userRoute = require('./routes/userRoute')
const commandeRoute = require('./routes/commandeRoute')



// use router 
app.use('/app',produitRouter)
app.use('/app',userRoute)
app.use('/app',commandeRoute)






// CONFIGIRATION DE SERVER (CONNEXION DE SERVER)

const PORT = process.env.PORT || '5000'




app.listen(PORT,()=>{
    console.log(`server is runing ${PORT}`)
})