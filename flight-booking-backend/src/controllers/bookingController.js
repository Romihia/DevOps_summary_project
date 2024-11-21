const Booking = require('../models/Booking');
const Flight = require('../models/Flight');
const { v4: uuidv4 } = require('uuid'); // Add this if you haven't already

// Fetch all booked flights
const getBookedFlights = async (req, res) => {
    try {
        const bookings = await Booking.findAll({
            include: [
                {
                    model: Flight,
                    as: 'flight',
                },
            ],
        });

        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch booked flights' });
    }
};

// Book a flight
const bookFlight = async (req, res) => {
    try {
        const { flightId } = req.body;

        // Validate flightId
        if (!flightId) {
            return res.status(400).json({ error: 'Flight ID is required' });
        }

        // Ensure the flight exists
        const flight = await Flight.findByPk(flightId);
        if (!flight) {
            return res.status(404).json({ error: 'Flight not found' });
        }

        // Create the booking
        const booking = await Booking.create({
            flightId,
            userId: uuidv4(), // Replace with actual user ID logic
            status: 'booked',
        });

        res.status(201).json(booking);
    } catch (error) {
        console.error('Error booking flight:', error);
        res.status(500).json({ error: 'Failed to book flight' });
    }
};
// Cancel a booking
const unBookFlight = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findByPk(id);

        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }

        await booking.destroy();
        res.status(200).json({ message: 'Booking successfully canceled' });
    } catch (error) {
        res.status(500).json({ error: 'Unable to cancel booking' });
    }
};

module.exports = { getBookedFlights, bookFlight, unBookFlight };
