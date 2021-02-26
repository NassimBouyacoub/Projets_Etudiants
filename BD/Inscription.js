
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
                            motdePasse:hashedPass,
                        })
                        Utilisateur.save()
                        .then(user=>{
                            console.log("Utilisateur crée avec succés, Connectez-vous")
                            res.redirect('login',{bien:'Utilisateur crée avec succés'})
                        })
                        .catch(error=>{
                            console.log("Probléme lors de la création de l'utilisateur")
                        })
                    })
                    }
                    else{
                        res.render('register', {message: "Les mots de passes ne sont pas identique"})
                    }
            }
        })}

        

  module.exports = {register}