const Sequelize = require('sequelize');

module.exports = sequelize.define(
	'Answer',
	{
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		text: Sequelize.STRING(300),
		questionId: Sequelize.INTEGER,
		correct: Sequelize.BOOLEAN
	},
	{
		timestamps: false
	}
);
