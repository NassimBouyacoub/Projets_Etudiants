const mongoose = require('mongoose');

const URI ="mongodb+srv://Nassim:hahahouhou@cluster0.svj7u.mongodb.net/Projet_Lorraine?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;
