var project = require("../BD/projet")
const user 				= require("../BD/User")

const choix=(req,res,next)=>{
    project.findOne({Nom:req.body.projet}, function (err, pro) {
        if(pro){
            pro.Dispo=false
            pro.PrisPar=req.user.Email
            pro.save()
            console.log("projet trouvé")
            req.user.Projet=pro.Nom
            req.user.save()
        }
        else{
            console.log("erreur")
        }
    })

    .then(pro=>{
        console.log("projet ajouté avec succés")
    })
    .catch(err=>{
        console.log("Probléme lors de la création du projet")
    })
}


module.exports = {choix}