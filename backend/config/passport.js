var LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = function(passport) {
	passport.use(
		new LocalStrategy(
			{
				usernameField: 'username',
				passwordField: 'password'
			},
			(username, password, done) => {
				User.findOne({
					where: { username: username }
				}).then((user) => {
					if (!user) {
						return done(null, false, { message: 'Dont have a match' });
					}
					if (user.password != password) {
						return done(null, false, { message: 'Incorrect password.' });
					}
					return done(null, user);
				});
			}
		)
	);

	passport.serializeUser(function(user, done) {
		console.log('User logged in: ' + user.username);
		done(null, user);
	});

	passport.deserializeUser(function(id, done) {
		User.findOne(id, function(err, user) {
			console.log('Hello from deserialize' + user);
			done(err, user);
		});
	});
};
