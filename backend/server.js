const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

console.log('MONGO_URI:', process.env.MONGO_URI);  // Add this line to check the value

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Database connection error:', err));

// Routes
app.use('/api/journal', require('./routes/journalRoutes'));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
