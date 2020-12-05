'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.addColumn('books', 'status', {
			type: Sequelize.STRING(10)
		});
	},

	down: async (queryInterface, Sequelize) => {}
};
