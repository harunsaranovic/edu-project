'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('students', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			email: Sequelize.STRING(100),
			username: {
				type: Sequelize.STRING(100),
				allowNull: false
			},
			password: Sequelize.STRING(360),
			teacher_id: Sequelize.INTEGER
		});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.dropTable('students');
	}
};
