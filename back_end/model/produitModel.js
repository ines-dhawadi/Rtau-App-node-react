const mongoose = require('mongoose')
const Schema = mongoose.Schema


const prosuitSchema = new Schema({
    titre:{
     type: String
    
 },
 image:{
    type: String
    
},
desc:{
    type: String

}
})

module.exports= produit = mongoose.model('produit', prosuitSchema)
