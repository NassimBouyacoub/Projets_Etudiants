const { Int32 } = require('mongodb');
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
  materielRequis:{
    type:String
  },

});
const projet = mongoose.model('projet',project);

module.exports = projet;
