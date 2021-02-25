
const bcrypt = require("bcryptjs"),
register =(req,res,next)=>{
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
                            res.render('login',{bien:'utilisateur crée avec succés'})
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

        

const login = (req,res,next)=>{
    var email = req.body.Email
    var password = req.body.password
    user.findOne({Email:email})
    .then(user=>{
        if(user){
            bcrypt.compare(password,user.motdePasse,function(err,result){               
                if(result){
                    console.log("Connexion réussie")
                    res.render('user',{user})
                }
                else{
                    console.log("Mot de passe incorect")
                    res.render('login',{message:"mot de passe incorrect"})
                }
            })
        }
        else{
            res.render('login',{message:"cet utilisateur n'existe pas"})
        }
    })
}
  module.exports = {register,login}