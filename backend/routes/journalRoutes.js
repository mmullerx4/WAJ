const express = require('express');
const JournalEntry = require('../models/journalEntry');
const router = express.Router();

// GET all journal entries
router.get('/', async (req, res) => {
  try {
    const entries = await JournalEntry.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
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
