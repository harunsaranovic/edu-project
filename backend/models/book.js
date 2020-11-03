const Sequelize = require('sequelize');

module.exports = sequelize.define(
	'Book',
	{
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: Sequelize.STRING(200),
		description: Sequelize.STRING(500),
		color: Sequelize.STRING(30),
		password: Sequelize.STRING,
		teacher_id: Sequelize.INTEGER,
		dateCreated: {
			type: Sequelize.DATE(3),
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
		}
	},
	{
		timestamps: true,
		updatedAt: false,
		createdAt: 'dateCreated'
	}
);
