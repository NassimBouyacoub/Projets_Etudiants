const mongoose = require('mongoose');
const project = new mongoose.Schema({
  Nom: {
    type: String
  },
  nombreEtudiants:{
    type:Number
  },
  Encadrant:{
      type:String
  },
  Dispo:{
    type:Boolean
  },
  PrisPar:{
    type:String
  }

});
const projet = mongoose.model('projet',project);

module.exports = projet;
