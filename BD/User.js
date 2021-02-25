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
  motdePasse:{
    type:String
  },

});
const Utilisateur = mongoose.model('Utilisateur',user);

module.exports = Utilisateur;
