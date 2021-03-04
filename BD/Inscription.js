
const bcrypt = require("bcryptjs")
const user 				= require("../BD/User")

const register =(req,res,next)=>{
        user.findOne({ Email: req.body.Email }, function(err, users) {
            if(users){
                res.render('register', {message: "Cet utilisateur existe deja"})
                }
            else{
                if(req.body.password==req.body.passwordconf){
                    bcrypt.hash(req.body.password, 10, function(err,hashedPass){
                        if(err){
                            console.log("erreur lors du hashage")
                        }
                        let Utilisateur = new user({
                            Fonction:req.body.Fonction,
                            Nom:req.body.Nom,
                            Prenom:req.body.Prenom,
                            Email:req.body.Email,
                            Specialite:req.body.Specialite,
                            Projet:"Vide",
                            materielPret:["Vide"],
                            motdePasse:hashedPass,
                        })
                        Utilisateur.save()
                        console.log("Utilisateur crée avec succes")
                        res.render('login',{bien: "Utilisateur crée avec succes"})


                    })
                    }
                    else{
                        res.render('register', {message: "Les mots de passes ne sont pas identique"})
                    }
            }
        })}

        

  module.exports = {register}