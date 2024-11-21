const express = require('express');
const { getBookedFlights, bookFlight, unBookFlight } = require('../controllers/bookingController');
const router = express.Router();

// Fetch all booked flights
router.get('/', getBookedFlights);

// Create a new booking
router.post('/', bookFlight);

// Cancel an existing booking
router.delete('/:id', unBookFlight);

module.exports = router;
