'use strict';

const express = require('express');
const db = require('../models');
const Campus = db.models.campus;
const Student = db.models.student;

// This router is already mounted on `/api/campuses` in server/app.js
const router = express.Router();

router.get('/', async (req, res, next) => {
	let campuses = await Campus.findAll();
	res.json(campuses);
});

router.get('/:id', async (req, res, next) => {
	let singleCampus = await Campus.findById(req.params.id);
	res.json(singleCampus);
});

module.exports = router;
