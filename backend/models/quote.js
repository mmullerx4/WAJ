const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    author: { type: String, required: true },
  },
  { collection: 'quotes' } // Explicitly name the collection 'quotes'
);

module.exports = mongoose.model('Quote', QuoteSchema);
