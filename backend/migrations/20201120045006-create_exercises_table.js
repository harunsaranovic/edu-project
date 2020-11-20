'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('exercises', {
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
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('chapters');
	}
};
