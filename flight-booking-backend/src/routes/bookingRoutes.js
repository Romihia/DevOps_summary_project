const express = require('express');
const { bookFlight ,unBookFlight} = require('../controllers/bookingController');
const router = express.Router();

// Create a new booking
router.post('/', bookFlight);

// Cancel an existing booking
router.delete('/:id', unBookFlight);

module.exports = router;
