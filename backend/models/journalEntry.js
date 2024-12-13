const mongoose = require('mongoose');

const JournalEntrySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { collection: 'journals' } // Explicitly name the collection 'journals'
);

module.exports = mongoose.model('JournalEntry', JournalEntrySchema);
