const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

if (!process.env.MONGO_URI) {
  console.error('Error: MONGO_URI is not defined in the environment variables.');
  process.exit(1); // exit if not there
}

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - cors - cross origin sharing - the frontend 4200 and the backend 5000 - and what is permitted in the requests.
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
 })
);
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});
// req.method logs the http method. req.url logs the endpoint.
// nexg passes control to the next middleware or else would hangup and never reach the next middleware or route handler.

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Database connection error:', err));

// Routes
app.use('/api/journals', require('./routes/journalRoutes'));
app.use('/api/quotes', require('./routes/quoteRoutes'));


// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
