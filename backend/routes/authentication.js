const express = require('express');
const router = express.Router();
const passport = require('passport');
const Sequelize = require('sequelize');
const User = require('../models/user');
require('../config/passport')(passport);

router.post('/login', (req, res, next) => {
	console.log(req.body);
	passport.authenticate('local', {
		successRedirect: '/loginsuccess/' + req.body.username,
		failureRedirect: '/loginfailure'
	})(req, res, next);
});

router.get('/loginfailure', (req, res) => {
	return res.status(401).json({ res: 'Bad login' });
});

router.get('/loginsuccess/:username', (req, res) => {
	User.findOne({
		where: { username: req.params.username }
	}).then((user) => {
		if (user) {
			return res.status(200).json({
				user: user.username,
				email: user.email,
				teacher: user.teacherId ? user.teacherId : '',
				role: user.role,
				firstName: user.firstName,
				lastName: user.lastName
			});
		} else {
			return '';
		}
	});
});

router.get('/logout', isValidUser, (req, res) => {
	req.logout();
	return res.status(200).json('User loged out successfully');
});

function isValidUser(req, res, next) {
	if (req.isAuthenticated()) next();
	else return res.status(401).json({ message: 'Unauthorized Request' });
}

router.route('/register').post(function(req, res) {
	User.findOne({
		where: Sequelize.or({ email: req.body.email }, { username: req.body.username })
	}).then((user) => {
		if (user) {
			return res.status(500).json({ text: 'User already exists.' });
		} else if (req.body.email == '' || req.body.username == '' || req.body.password == '') {
			return res.status(500).json({ text: 'Fill in the form.' });
		} else {
			User.create({
				email: req.body.email,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				username: req.body.username,
				password: req.body.password,
				role: 'STUDENT',
				teacherId: 1
			});
			res.status(200).json({ user: 'added successfully' });
		}
	});
});

module.exports = router;
