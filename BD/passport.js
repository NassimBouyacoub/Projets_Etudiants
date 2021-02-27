const passport			= require('passport');
const localStrategy		= require('passport-local').Strategy;
const bcrypt = require("bcryptjs")
var express = require('express')

const user = require("../BD/User")


passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	user.findById(id, function (err, user) {
		done(err, user);
	});
});

passport.use(new localStrategy(function (username, password, done) {
	user.findOne({ Email: username }, function (err, user) {
		if (err) return done(err);
		if (!user) return done(null, false, { message: 'Incorrect username.' });
		bcrypt.compare(password, user.motdePasse, function (err, res) {
			if (err) return done(err);
			if (res === false) return done(null, false, { message: 'Incorrect password.' });
			
			return done(null, user);
		});
	});
}));

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()){
		
		return next();}
	res.redirect('/login',);

}

function isLoggedOut(req, res, next) {
	if (!req.isAuthenticated()) {
		
		return next()
	}
	res.redirect('/');
}


module.exports = {isLoggedOut,isLoggedIn}