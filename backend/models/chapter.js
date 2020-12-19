const Sequelize = require('sequelize');

module.exports = sequelize.define(
	'Chapter',
	{
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		number: Sequelize.INTEGER,
		title: Sequelize.STRING(200),
		description: Sequelize.STRING(500),
		bookId: Sequelize.INTEGER
	},
	{
		timestamps: false
	}
);
