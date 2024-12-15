const express = require('express');
const JournalEntry = require('../models/journalEntry'); // Use correct model file name
const router = express.Router();
const mongoose = require('mongoose');


// GET all journal entries
router.get('/', async (req, res) => {
  try {
    const journals = await JournalEntry.find(); // Fetch from 'journals' collection
    res.status(200).json(journals);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching journals', error: err });
  }
});

router.get('/api/journal/:id', async (req, res) => {
  console.log("Fetching journal with ID:", req.params.id);  // Log the requested ID
  console.log("Is valid ObjectId:", mongoose.Types.ObjectId.isValid(req.params.id));  // Log if the ID is valid

  // Validate the ID format (Mongoose expects a valid ObjectId)
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid journal ID format' });
  }

  try {
    const journal = await JournalEntry.findById(req.params.id); // Fetch by ID
    if (!journal) {
      return res.status(404).json({ message: 'Journal not found' });
    }
    console.log("Fetched journal:", journal);  // Log the fetched journal
    res.status(200).json(journal);
  } catch (err) {
    console.error('Error fetching journal:', err);  // Log any errors
    res.status(500).json({ message: 'Error fetching journal', error: err });
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

