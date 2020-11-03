'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('books', [
			{
				title: 'Book 1',
				description: 'Description of the Book 1',
				color: 'red'
			},
			{
				title: 'Book 2',
				description: 'Description of the Book 2',
				color: 'blue'
			},
			{
				title: 'Book 3 Title',
				description: 'Description of the Book 3',
				color: 'green'
			}
		]);
	},

	down: async (queryInterface, Sequelize) => {
		/**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
	}
};
