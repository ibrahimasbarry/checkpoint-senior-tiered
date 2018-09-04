'use strict';

const db = require('./_db');

const Campus = require('./Campus');
const Student = require('./Student');

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = db;
