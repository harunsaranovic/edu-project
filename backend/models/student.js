const Sequelize = require('sequelize');

module.exports = sequelize.define(
	'Student',
	{
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		email: Sequelize.STRING,
		username: {
			type: Sequelize.STRING,
			allowNull: false
		},
		password: Sequelize.STRING,
		teacher_id: Sequelize.INTEGER
	},
	{
		timestamps: false
	}
);
