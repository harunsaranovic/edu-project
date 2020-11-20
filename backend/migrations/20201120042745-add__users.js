'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('users', [
			{
				email: 'test@email.com',
				username: 'test',
				password: 'password',
				firstName: 'Harun',
				lastName: 'S',
				role: 'STUDENT',
				teacherId: 3
			},
			{
				email: 'user@email.com',
				username: 'user',
				password: 'password',
				firstName: 'User',
				lastName: 'Fox',
				role: 'STUDENT',
				teacherId: 3
			},
			{
				email: 'bob@email.com',
				username: 'bob',
				password: 'password',
				firstName: 'Teacher',
				lastName: 'Bob',
				role: 'TEACHER'
			},
			{
				email: 'anna@email.com',
				username: 'anna',
				password: 'password',
				firstName: 'Teacher',
				lastName: 'Anna',
				role: 'TEACHER'
			},
			{
				email: 'john@email.com',
				username: 'john',
				password: 'password',
				firstName: 'Student',
				lastName: 'John',
				role: 'STUDENT',
				teacherId: 4
			},
			{
				email: 'doe@email.com',
				username: 'doe',
				password: 'password',
				firstName: 'Student',
				lastName: 'Doe',
				role: 'STUDENT',
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
