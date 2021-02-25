var express = require('express');
var auth = require("../BD/Auth")
var proj = require("../BD/gestionProjet")
var router = express.Router();
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var user = require("../BD/User")
// const Project = require('../BD/projet')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.post('/', function(req, res, next) {
  auth.login(req,res)
});
router.get('/register', function(req, res, next) {
  res.render('register')
});
router.post("/register",function(req,res,next){
  auth.register(req,res)
});

router.get('/user/:id', function(req, res, next) {
  passport.use(new LocalStrategy(
    function(username, password, done) {
      user.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done('login', false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done('login', false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));
});

router.get('/profile', function(req, res, next) {
  res.render("user", { user })
});



router.get('/projects', function(req, res, next) {
  // Project.find((err, projects) => {
  //   if (err) console.error(error);
  //   res.render("projects", { projects })
  // })
});

router.post("/testprojet",function(req,res,next){
  proj.addProject(req,res)
});

module.exports = router;
