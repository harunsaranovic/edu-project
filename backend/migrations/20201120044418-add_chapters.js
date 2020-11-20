'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('chapters', [
			{
				number: 1,
				title: 'Chapter 1 Title',
				description: 'Description of the Chapter 1',
				bookId: 1
			},
			{
				number: 2,
				title: 'Chapter 2 Title',
				description: 'Description of the Chapter 2',
				bookId: 1
			},
			{
				number: 3,
				title: 'Chapter 3 Title',
				description: 'Description of the Chapter 3',
				bookId: 1
			},
			{
				number: 1,
				title: 'Book 2 Chapter 1 Title',
				description: 'Description of the Chapter 1',
				bookId: 2
			},
			{
				number: 2,
				title: 'Book 2 Chapter 2 Title',
				description: 'Description of the Chapter 2',
				bookId: 2
			},
			{
				number: 2,
				title: 'Book 3 Chapter 1 Title',
				description: 'Description of the Chapter 1',
				bookId: 3
			},
			{
				number: 2,
				title: 'Book 3 Chapter 2 Title',
				description: 'Description of the Chapter 2',
				bookId: 3
			},
			{
				number: 3,
				title: 'Book 3 Chapter 3 Title',
				description: 'Description of the Chapter 3',
				bookId: 3
			},
			{
				number: 4,
				title: 'Book 3 Chapter 4 Title',
				description: 'Description of the Chapter 4',
				bookId: 3
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
