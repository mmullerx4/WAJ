const express = require('express');
const Quote = require('../models/quote'); // Use correct model file name
const router = express.Router();

// GET all quotes
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find(); // Fetch from 'quotes' collection
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a random quote
router.get('/random', async (req, res) => {
  try {
    const count = await Quote.countDocuments();
    const random = Math.floor(Math.random() * count);
    const randomQuote = await Quote.findOne().skip(random);
    res.json(randomQuote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new quote
router.post('/', async (req, res) => {
  try {
    const newQuote = new Quote(req.body);
    const savedQuote = await newQuote.save();
    res.json(savedQuote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
