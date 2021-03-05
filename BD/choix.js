var project = require("../BD/projet")

const choix=(req,res,next)=>{
    if(res){
        project.findOneAndUpdate({Nom:req.body.projet},{$push:{listeEtudiant:req.user.Email}}, function (err, pro) {
            if(pro){
                console.log("Etudiant ajouté")
            }
            if(err){
                console.log("erreur")
            }
        })
    }
}


module.exports = {choix}