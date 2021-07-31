const mongoose = require('mongoose')
const Schema = mongoose.Schema


const produitSchema = new Schema({
    titre:{
     type: String,
     
 },
 image:{
    type: String,
   
},
desc:{
    type: String,
  
},
prix:{
    type: String,
   
}

})

module.exports= produit = mongoose.model('produit', produitSchema)
