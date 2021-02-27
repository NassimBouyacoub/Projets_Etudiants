var express = require('express')
const app				= express()
const passport			= require('passport')
var router = express.Router();
const passeport = require("../BD/passport")
const reg = require("../BD/Inscription")
const pro = require('../BD/projet');




router.get('/', passeport.isLoggedIn, (req, res) => {
	res.render("index");
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

router.get('/register', function(req, res, next) {
  res.render('register')
});
router.post("/register",function(req,res,next){
  reg.register(req,res)
});
router.get('/profil',passeport.isLoggedIn, function(req, res, next) {
  res.render('user')
});
router.get('/index',passeport.isLoggedIn, function(req, res, next) {
	console.log(passport.user.Nom)
	pro.find({},function(err,projet){
		if (projet){
			console.log(projet)
			res.render('index',{projet})
		}
		if (err){
			console.log(err)
		}
	})
	
});
module.exports = router;
