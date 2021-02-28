var project = require("../BD/projet")
const addProject=(req,res,next)=>{
    let projet = new project({
        Nom:req.body.nom,
        nombreEtudiants:req.body.nombreEtudiants,
        Encadrant:req.user.Nom,
        Dispo:true,
        PrisPar:"Peronne"
    })
    projet.save()
    .then(user=>{
        console.log("projet ajouté avec succés")
    })
    .catch(error=>{
        console.log("Probléme lors de la création du projet")
    })
}


module.exports = {addProject}