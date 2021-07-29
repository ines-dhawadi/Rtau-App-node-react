const produitModel  = require('../model/produitModel')


module.exports={

    getProduit: async (req,res)=>{
 try{ 
     const poduit = await produitModel.find()
     res.json(poduit)

 }catch(error){
     console.log(error.message);
 }
    },
    addPoduit: async(req,res)=>{
       const titre = req.body.titre
       const image = req.body.image
       const desc = req.body.desc
       const prix = req.body.prix
       
       try{
        const poduit = new produitModel({
            titre, 
            image,
            desc, 
            prix
        })
        await poduit.save()
        res.json(poduit)

    }catch(error){
        console.log(error.message);
    }

},

deleteProduit: async (req,res)=>{
try {
   const  poduit = await produitModel.findByIdAndDelete(req.params.id)
res.json(poduit)

  }catch(error){
console.log(error.message);
}

},


updateProduit: async (req,res)=>{
try{
const produit = await produitModel.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
);
res.json(produit);

}catch(error){
console.log(error.message);
}


}






};