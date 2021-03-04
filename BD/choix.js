var project = require("../BD/projet")

const choix=(req,res,next)=>{
    project.findOneAndUpdate({Nom:req.body.projet},{$push:{listeEtudiant:req.user.Email}}, function (err, pro) {
        if(pro){
            console.log("Etudiant ajouté")
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