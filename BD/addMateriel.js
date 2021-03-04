const user 				= require("../BD/User")
const addMateriel=(req,res,next)=>{
    user.findOneAndUpdate({Email:req.user.Email},{$push:{materielPret:req.body.materiel}},function(err,res){
        if(res){
            console.log("Materiel ajouté avec succés")
        }
        if(err){
            console.log(err)
        }
    })}
module.exports = {addMateriel}