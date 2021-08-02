const mongoose = require('mongoose')
const Schema = mongoose.Schema


const produitSchema = new Schema({
    titre:{
        type:String,
        require:true
 },


desc:{
    type:String,
    require:true
},
prix:{
    type:String,
    require:true
},
image:{
    type:String,
    require:true
}

})

module.exports= produit = mongoose.model('produit', produitSchema)
