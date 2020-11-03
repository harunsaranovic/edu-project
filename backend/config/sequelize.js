const Sequelize = require('sequelize');

const sequelize = new Sequelize('edu_project', 'root', 'root', {
	host: '127.0.0.1',
	dialect: 'mysql',
	operatorAliases: false
});

module.exports = sequelize;
global.sequelize = sequelize;
