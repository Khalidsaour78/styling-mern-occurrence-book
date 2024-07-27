const express = require('express');
const router = express.Router();
const Occurrence = require('../models/Occurrence');

router.get('/', async (req, res) => {
  const occurrences = await Occurrence.find();
  res.json(occurrences);
});

router.post('/', async (req, res) => {
  const newOccurrence = new Occurrence(req.body);
  await newOccurrence.save();
  res.json(newOccurrence);
});

module.exports = router;
