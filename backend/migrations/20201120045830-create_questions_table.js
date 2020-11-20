'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('questions', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			title: Sequelize.STRING(200),
			exerciseId: Sequelize.INTEGER
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('chapters');
	}
};
