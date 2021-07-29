const mongoose = require('mongoose')
const Schema = mongoose.Schema


const produitSchema = new Schema({
    titre:{
     type: String,
     required : true
 },
 image:{
    type: String,
    required : true
},
desc:{
    type: String,
    required : true
},
prix:{
    type: String,
    required : true
}

})

module.exports= produit = mongoose.model('produit', produitSchema)
