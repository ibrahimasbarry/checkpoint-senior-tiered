'use strict';

const Sequelize = require('sequelize');
const db = require('./_db');

const Campus = db.define('campus', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isEmpty: false
		}
	}
});

module.exports = Campus;
