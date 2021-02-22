const mongoose = require('mongoose');
const user = new mongoose.Schema({
  
  Nom: {
    type: String
  },
  Prenom: {
    type: String
  },
  Specialite:{
    type:String
  },
  Email:{
    type:String
  },
  motdePasse:{
    type:String
  },
});
const Utilisateur = mongoose.model('Utilisateur',user);

module.exports = Utilisateur;
