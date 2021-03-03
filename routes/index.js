var express = require('express')
const app				= express()
const passport			= require('passport')
var router = express.Router();
const passeport = require("../BD/passport")
const reg = require("../BD/Inscription")
const pro = require('../BD/projet');
const you = require('../BD/User')
const proj = require('../BD/addProject')
const choix =require('../BD/choix');
const { findOne } = require('../BD/User');




router.get('/', passeport.isLoggedIn, (req, res) => {
	res.render("index",message);
});
router.get('/login', passeport.isLoggedOut, (req, res) => {
	res.render('login');
});

router.post('/login', passport.authenticate('local', {
	successRedirect: '/index',
	failureRedirect: '/login?error=true'
}));

router.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});



//Inscription
router.get('/register', function(req, res, next) {
  res.render('register')
});
router.post("/register",function(req,res,next){
  reg.register(req,res)

});


//Ajouter un projet
router.get('/addprojet',passeport.isLoggedIn, function(req, res, next) {
	res.render('testprojet')
  });
router.post("/addprojet",function(req,res,next){
	proj.addProject(req,res)
	res.redirect('index')
  });





router.get('/profil',passeport.isLoggedIn, function(req, res, next) {
	pro.find({Encadrant:req.user.Nom},function(err,proj){
		if(proj){
		Utilisateur = req.user
		res.render('user',{data: {Utilisateur:[Utilisateur],proj:proj}})
		}
		if(err){
			console.log('project not found')
		}
	})
});




router.get('/index',passeport.isLoggedIn, function(req, res, next) {
	pro.find({},function(err,projet){
		if (projet){
			var mois=['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre']
			console.log(projet)
			res.render('index',{data:{projet:projet,Mois:mois}})
		}
		if (err){
			console.log(err)
		}
	})
	
});

router.post("/index",function(req,res,next){
	choix.choix(req,res)
	res.redirect('/profil')
  });

module.exports = router;
