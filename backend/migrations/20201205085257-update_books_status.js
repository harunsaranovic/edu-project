'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkUpdate('books', {
			status: 'PUBLISHED'
		});
	},

	down: async (queryInterface, Sequelize) => {}
};
