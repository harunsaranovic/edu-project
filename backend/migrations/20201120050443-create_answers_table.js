'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('answers', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			text: Sequelize.STRING(300),
			questionId: Sequelize.INTEGER,
			correct: Sequelize.BOOLEAN
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('answers');
	}
};
