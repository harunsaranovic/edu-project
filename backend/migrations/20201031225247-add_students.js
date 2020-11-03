'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('students', [
			{
				email: 'test@gmail.com',
				username: 'test',
				password: 'password',
				teacher_id: 1
			},
			{
				email: 'test@gmail.com',
				username: 'user',
				password: 'password',
				teacher_id: 1
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
