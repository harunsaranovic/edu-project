'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('exercises', [
			{
				order: 1,
				title: 'Exercise 1 Title',
				description: 'Description of the Exercise 1',
				chapterId: 1
			},
			{
				order: 2,
				title: 'Exercise 2 Title',
				description: 'Description of the Exercise 2',
				chapterId: 1
			},
			{
				order: 3,
				title: 'Exercise 3 Title',
				description: 'Description of the Exercise 3',
				chapterId: 1
			},
			{
				order: 1,
				title: 'Exercise 1 Title',
				description: 'Description of the Exercise 1',
				chapterId: 2
			},
			{
				order: 2,
				title: 'Exercise 2 Title',
				description: 'Description of the Exercise 2',
				chapterId: 2
			},
			{
				order: 2,
				title: 'Exercise 1 Title',
				description: 'Description of the Exercise 1',
				chapterId: 3
			},
			{
				order: 2,
				title: 'Exercise 2 Title',
				description: 'Description of the Exercise 2',
				chapterId: 3
			},
			{
				order: 3,
				title: 'Exercise 3 Title',
				description: 'Description of the Exercise 3',
				chapterId: 3
			},
			{
				order: 4,
				title: 'Exercise 4 Title',
				description: 'Description of the Exercise 4',
				chapterId: 3
			},
			{
				order: 1,
				title: 'Exercise 1 Title',
				description: 'Description of the Exercise 1',
				chapterId: 4
			},
			{
				order: 2,
				title: 'Exercise 2 Title',
				description: 'Description of the Exercise 2',
				chapterId: 4
			},
			{
				order: 1,
				title: 'Exercise 1 Title',
				description: 'Description of the Exercise 1',
				chapterId: 5
			},
			{
				order: 2,
				title: 'Exercise 2 Title',
				description: 'Description of the Exercise 2',
				chapterId: 5
			},
			{
				order: 1,
				title: 'Exercise 1 Title',
				description: 'Description of the Exercise 1',
				chapterId: 6
			},
			{
				order: 2,
				title: 'Exercise 2 Title',
				description: 'Description of the Exercise 2',
				chapterId: 6
			},
			{
				order: 1,
				title: 'Exercise 1 Title',
				description: 'Description of the Exercise 1',
				chapterId: 7
			},
			{
				order: 2,
				title: 'Exercise 2 Title',
				description: 'Description of the Exercise 2',
				chapterId: 7
			},
			{
				order: 1,
				title: 'Exercise 1 Title',
				description: 'Description of the Exercise 1',
				chapterId: 8
			},
			{
				order: 2,
				title: 'Exercise 2 Title',
				description: 'Description of the Exercise 2',
				chapterId: 8
			},
			{
				order: 1,
				title: 'Exercise 1 Title',
				description: 'Description of the Exercise 1',
				chapterId: 9
			},
			{
				order: 2,
				title: 'Exercise 2 Title',
				description: 'Description of the Exercise 2',
				chapterId: 9
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
