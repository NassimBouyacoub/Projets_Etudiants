var express = require('express');

var user = require("../BD/User")
var auth = require("../BD/Auth")
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.post('/', function(req, res, next) {
  //a rempliiiiiiir
});
router.get('/register', function(req, res, next) {
  res.render('register')
});
router.post("/register",function(req,res,next){
  auth.register(req,res)
});
router.get('/profile', function(req, res, next) {

});


module.exports = router;
