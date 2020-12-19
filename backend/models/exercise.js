const Sequelize = require('sequelize');

module.exports = sequelize.define(
	'Exercise',
	{
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: Sequelize.STRING(200),
		description: Sequelize.STRING(500),
		order: Sequelize.INTEGER,
		chapterId: Sequelize.INTEGER
	},
	{
		timestamps: false
	}
);
