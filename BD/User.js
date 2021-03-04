const mongoose = require('mongoose');
const user = new mongoose.Schema({
  Fonction:{
    type:String
  },
  Nom: {
    type: String
  },
  Prenom: {
    type: String
  },
  Email:{
    type:String
  },
  Specialite:{
    type:String
  },
  Projet:{
    type:String
  },
  motdePasse:{
    type:String
  },
  materielPret:{
    type: [String]
  },
  materielDate:{
    type:Date
  }
});
const Utilisateur = mongoose.model('Utilisateur',user);

module.exports = Utilisateur;
