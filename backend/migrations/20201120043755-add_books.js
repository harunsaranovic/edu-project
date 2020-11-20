'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('books', [
			{
				title: 'Book 1 Title',
				description: 'Description of the Book 1',
				color: 'red',
				teacherId: 3
			},
			{
				title: 'Book 2 Title',
				description: 'Description of the Book 2',
				color: 'blue',
				teacherId: 4
			},
			{
				title: 'Book 3 Title',
				description: 'Description of the Book 3',
				color: 'green',
				teacherId: 3
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
