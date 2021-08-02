const express = require ('express')
const app = express()
const cors = require('cors')




//  importation db=> config
const db= require ('./config/db')
db();
//appel cors + body-parser
app.use(cors())

app.use(express.json());






// importation Router
const  produitRouter= require('./routes/produitRoute')
const userRoute = require('./routes/userRoute')
const commandeRoute = require('./routes/commandeRoute')



// use router 
app.use('/app',produitRouter)
app.use('/app',userRoute)
app.use('/app',commandeRoute)






// CONFIGIRATION DE SERVER (CONNEXION DE SERVER)

const PORT = process.env.REACT_APP_PORT || '5001'




//config server
app.listen(PORT ,(err)=>{
    if (err){
        console.log('server is not running ')
    }
    else {
        console.log(`server is running on port ${PORT}`)
    }
    })
