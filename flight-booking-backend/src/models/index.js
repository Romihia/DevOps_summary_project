const Booking = require('./Booking');
const Flight = require('./Flight');

// Define Associations
Flight.hasMany(Booking, { foreignKey: 'flightId', as: 'bookings' });
Booking.belongsTo(Flight, { foreignKey: 'flightId', as: 'flight' });

module.exports = {
    sequelize,
    Booking,
    Flight,
};
