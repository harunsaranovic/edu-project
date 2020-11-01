'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('test', {
			id: {
				type: Sequelize.INTEGER(),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			email: Sequelize.STRING()
		});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.dropTable('test');
	}
};
