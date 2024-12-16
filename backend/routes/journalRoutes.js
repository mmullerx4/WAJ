const express = require('express');
const mongoose = require('mongoose');
const JournalEntry = require('../models/journalEntry'); // Correct model import
const router = express.Router();

// GET all journal entries
router.get('/', async (req, res) => {
  try {
    const journals = await JournalEntry.find(); // Fetch all journal entries
    res.status(200).json(journals); // Respond with the journals
  } catch (err) {
    console.error('Error fetching journals:', err);
    res.status(500).json({ message: 'Error fetching journals', error: err });
  }
});

// GET a single journal by ID
router.get('/journal/:id', async (req, res) => {
  console.log('Fetching journal with ID:', req.params.id);

  // Validate ID format
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid journal ID format' });
  }

  try {
    const journal = await JournalEntry.findById(req.params.id); // Fetch the journal by ID
    console.log('Journal fetched:', journal);
    if (!journal) {
      return res.status(404).json({ message: 'Journal not found' });
    }

    // Ensure journal ID is sent as a string (if needed by frontend) - keep for surety
    const journalData = journal.toObject(); // Convert Mongoose document to plain object
    journalData.id = journal._id.toString(); // Add `id` as a string
    delete journalData._id; // Optionally, remove `_id` for consistency

    console.log("Fetched journal:", journalData);
    res.status(200).json(journalData); // Send the journal
  } catch (err) {
    console.error('Error fetching journal:', err);
    res.status(500).json({ message: 'Error fetching journal', error: err });
  }
});

// POST a new journal entry
router.post('/', async (req, res) => {
  try {
    const newEntry = new JournalEntry(req.body); // Create a new journal entry
    const savedEntry = await newEntry.save(); // Save to the database
    res.status(201).json(savedEntry); // Respond with the saved journal
  } catch (err) {
    console.error('Error creating journal:', err);
    res.status(500).json({ message: 'Error creating journal', error: err });
  }
});

// PUT (update) an existing journal entry
router.put('/journals/:id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid journal ID format' });
  }

  try {
    const updatedJournal = await JournalEntry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // Return the updated journal and validate inputs
    );

    if (!updatedJournal) {
      return res.status(404).json({ message: 'Journal not found' });
    }

    res.status(200).json(updatedJournal); // Respond with the updated journal
  } catch (err) {
    console.error('Error updating journal:', err);
    res.status(500).json({ message: 'Error updating journal', error: err });
  }
});

module.exports = router;
