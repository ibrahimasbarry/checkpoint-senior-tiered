'use strict';

const Sequelize = require('sequelize');
const db = require('./_db');

const Student = db.define('student', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: false
		}
	},
	phase: {
		type: Sequelize.ENUM,
		values: [ 'junior', 'senior' ],
		allowNull: true
	}
});

module.exports = Student;
