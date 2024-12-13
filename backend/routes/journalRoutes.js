const express = require('express');
const JournalEntry = require('../models/journalEntry'); // Use correct model file name
const router = express.Router();

// GET all journal entries
router.get('/', async (req, res) => {
  try {
    const journals = await JournalEntry.find(); // Fetch from 'journals' collection
    res.status(200).json(journals);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching journals', error: err });
  }
});

// POST a new journal entry
router.post('/', async (req, res) => {
  try {
    const newEntry = new JournalEntry(req.body);
    const savedEntry = await newEntry.save();
    res.json(savedEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

