'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('chapters', {
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
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('chapters');
	}
};
