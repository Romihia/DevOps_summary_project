const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const flightRoutes = require('./routes/flightRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
app.use(cors()); 
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/flights', flightRoutes);
app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Delivery API!');
  });

// Error Handling
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;
