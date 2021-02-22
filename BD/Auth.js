var user = require("../BD/User")
const bcrypt = require("bcryptjs")

const register=(req,res,next)=>{
     bcrypt.hash(req.body.password, 10, function(err,hashedPass){
        if(err){
            console.log("erreur lors du hashage")
        }
        let Utilisateur = new user({
            Email:req.body.Email,
            Nom:req.body.Nom,
            Prenom:req.body.Prenom,
            Specialite:req.body.Specialite,
            motdePasse:hashedPass,
            Nomprojet:req.body.Projet,
            Materiel:req.body.Materiel
        })
        Utilisateur.save()
        .then(user=>{
            console.log("utilisateur crée avec succés")
        })
        .catch(error=>{
            console.log("Probléme lors de la création de l'utilisateur")
        })
     })
    }

     
  module.exports = {register}