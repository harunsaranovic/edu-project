const Sequelize = require('sequelize');

module.exports = sequelize.define(
	'Question',
	{
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: Sequelize.STRING(200),
		exerciseId: Sequelize.INTEGER
	},
	{
		timestamps: false
	}
);
