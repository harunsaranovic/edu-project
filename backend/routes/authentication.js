const express = require('express');
const router = express.Router();
const passport = require('passport');
const Sequelize = require('sequelize');
const Student = require('../models/student');
require('../config/passport')(passport);

router.post('/login', (req, res, next) => {
	passport.authenticate('local', {
		successRedirect: '/loginsuccess/' + req.body.username,
		failureRedirect: '/loginfailure'
	})(req, res, next);
});

router.get('/loginfailure', (req, res) => {
	return res.status(401).json({ res: 'Bad login' });
});

router.get('/loginsuccess/:username', (req, res) => {
	return res.status(200).json({ user: req.params.username, role: 'STUDENT' });
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
	Student.findOne({
		where: Sequelize.or({ email: req.body.email }, { username: req.body.username })
	}).then((user) => {
		if (user) {
			return res.status(500).json({ text: 'User already exists.' });
		} else if (req.body.email == '' || req.body.username == '' || req.body.password == '') {
			return res.status(500).json({ text: 'Fill in the form.' });
		} else {
			Student.create({
				email: req.body.email,
				username: req.body.username,
				password: req.body.password,
				teacher_id: 1
			});
			res.status(200).json({ user: 'added successfully' });
		}
	});
});

module.exports = router;
