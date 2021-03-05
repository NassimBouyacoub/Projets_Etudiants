const user 				= require("../BD/User")
const projet            = require('../BD/projet')
const Accept=(req,res,next)=>{
    console.log(req.body.emailEtudiant)
    user.findOneAndUpdate({Email:req.body.emailEtudiant},{$set:{Projet:req.body.Projet}},function(err,res){
        if(res){
            
            console.log("Projet Attribué")
            projet.findOneAndUpdate({Nom:req.body.Projet},{$set:{PrisPar:res.Email,Dispo:false}},function(err,res){
                if(res){
                    console.log("s_ucces")

                }
            })

        }
        if(err){
            console.log(err)
        }
    })}
const Refuse=(req,res,next)=>{
    user.findOneAndUpdate({Email:req.body.emailEtudiant},function(err,res){
        if(res){
            
            console.log("Projet Supprimé")
        }
        if(err){
            console.log(err)
    }
    })}
    
module.exports = {Accept,Refuse}