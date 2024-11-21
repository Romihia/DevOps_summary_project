const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Flight = require('./Flight'); // Ensure this import is correct

const Booking = sequelize.define('Booking', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    flightId: { type: DataTypes.UUID, allowNull: false },
    userId: { type: DataTypes.UUID, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: 'booked' },
});

// Associate Booking with Flight
Booking.belongsTo(Flight, { foreignKey: 'flightId', as: 'flight' });

module.exports = Booking;
