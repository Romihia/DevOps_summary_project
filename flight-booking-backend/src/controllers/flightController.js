const Flight = require('../models/Flight');

const getAllFlights = async (req, res, next) => {
    try {
        const flights = await Flight.findAll();
        res.status(200).json(flights);
    } catch (error) {
        next(error);
    }
};

const createFlight = async (req, res, next) => {
    try {
        const flight = await Flight.create(req.body);
        res.status(201).json(flight);
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllFlights, createFlight };
