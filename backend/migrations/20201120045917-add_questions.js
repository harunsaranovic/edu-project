'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('questions', [
			{
				title: 'Question 1 Title',
				exerciseId: 1
			},
			{
				title: 'Question 2 Title',
				exerciseId: 1
			},
			{
				title: 'Question 3 Title',
				exerciseId: 1
			},
			{
				title: 'Question 1 Title',
				exerciseId: 2
			},
			{
				title: 'Question 2 Title',
				exerciseId: 2
			},
			{
				title: 'Question 1 Title',
				exerciseId: 3
			},
			{
				title: 'Question 2 Title',
				exerciseId: 3
			},
			{
				title: 'Question 3 Title',
				exerciseId: 3
			},
			{
				title: 'Question 4 Title',
				exerciseId: 3
			},
			{
				title: 'Question 1 Title',
				exerciseId: 4
			},
			{
				title: 'Question 2 Title',
				exerciseId: 4
			},
			{
				title: 'Question 1 Title',
				exerciseId: 5
			},
			{
				title: 'Question 2 Title',
				exerciseId: 5
			},
			{
				title: 'Question 1 Title',
				exerciseId: 6
			},
			{
				title: 'Question 2 Title',
				exerciseId: 6
			},
			{
				title: 'Question 1 Title',
				exerciseId: 7
			},
			{
				title: 'Question 2 Title',
				exerciseId: 7
			},
			{
				title: 'Question 1 Title',
				exerciseId: 8
			},
			{
				title: 'Question 2 Title',
				exerciseId: 8
			},
			{
				title: 'Question 1 Title',
				exerciseId: 9
			},
			{
				title: 'Question 2 Title',
				exerciseId: 9
			},
			{
				title: 'Question 1 Title',
				exerciseId: 10
			},
			{
				title: 'Question 2 Title',
				exerciseId: 10
			},
			{
				title: 'Question 1 Title',
				exerciseId: 11
			},
			{
				title: 'Question 2 Title',
				exerciseId: 11
			},
			{
				title: 'Question 1 Title',
				exerciseId: 12
			},
			{
				title: 'Question 2 Title',
				exerciseId: 12
			},
			{
				title: 'Question 1 Title',
				exerciseId: 13
			},
			{
				title: 'Question 2 Title',
				exerciseId: 13
			},
			{
				title: 'Question 1 Title',
				exerciseId: 14
			},
			{
				title: 'Question 2 Title',
				exerciseId: 14
			},
			{
				title: 'Question 1 Title',
				exerciseId: 15
			},
			{
				title: 'Question 2 Title',
				exerciseId: 15
			},
			{
				title: 'Question 1 Title',
				exerciseId: 16
			},
			{
				title: 'Question 2 Title',
				exerciseId: 16
			},
			{
				title: 'Question 1 Title',
				exerciseId: 17
			},
			{
				title: 'Question 2 Title',
				exerciseId: 17
			},
			{
				title: 'Question 1 Title',
				exerciseId: 18
			},
			{
				title: 'Question 2 Title',
				exerciseId: 18
			},
			{
				title: 'Question 1 Title',
				exerciseId: 19
			},
			{
				title: 'Question 2 Title',
				exerciseId: 19
			},
			{
				title: 'Question 1 Title',
				exerciseId: 20
			},
			{
				title: 'Question 2 Title',
				exerciseId: 20
			},
			{
				title: 'Question 1 Title',
				exerciseId: 21
			},
			{
				title: 'Question 2 Title',
				exerciseId: 21
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
