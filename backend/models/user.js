const Sequelize = require('sequelize');

module.exports = sequelize.define(
	'User',
	{
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		email: Sequelize.STRING(100),
		username: {
			type: Sequelize.STRING(100),
			allowNull: false
		},
		role: {
			type: Sequelize.STRING(7)
		},
		firstName: {
			type: Sequelize.STRING(100),
			allowNull: false
		},
		lastName: {
			type: Sequelize.STRING(100),
			allowNull: false
		},
		password: Sequelize.STRING(360),
		teacherId: {
			type: Sequelize.INTEGER,
			allowNull: true
		}
	},
	{
		timestamps: false
	}
);
