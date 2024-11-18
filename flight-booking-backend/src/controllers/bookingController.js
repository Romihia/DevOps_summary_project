const Booking = require('../models/Booking');

const bookFlight = async (req, res) => {
    try {
        const booking = await Booking.create(req.body);
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ error: 'Unable to book flight' });
    }
};

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

module.exports = { bookFlight, unBookFlight };