const app = require('./src/app');
const dotenv = require('dotenv');
const { sequelize } = require('./src/config/database');
const Flight = require('./src/models/Flight');
const Booking = require('./src/models/Booking');

dotenv.config();

const PORT = process.env.PORT || 3000;

const seedFlights = async () => {
    const flights = generateFlights();
    return await Flight.bulkCreate(flights, {
        ignoreDuplicates: true,
        returning: true, // Return instances for seeding bookings
    });
};

const seedBookings = async (flights) => {
    const bookings = flights.slice(0, 3).map((flight) => ({
        flightId: flight.id,
        userId: 'd5b6e6e4-f72b-42f4-a387-8af61ec4b123',
    }));
    return await Booking.bulkCreate(bookings, { ignoreDuplicates: true });
};

sequelize
    .sync({ force: true })
    .then(async () => {
        const flights = await seedFlights(); // Seed flights
        await seedBookings(flights); // Seed bookings
        console.log('Database seeded successfully.');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });

const generateFlights = () => {
    const cities = [
        'New York', 'Los Angeles', 'London', 'Paris', 'Tokyo', 'Osaka',
        'Sydney', 'Melbourne', 'Dubai', 'Berlin', 'Rome', 'Madrid', 'Toronto',
        'Vancouver', 'Mumbai', 'Delhi', 'Beijing', 'Shanghai', 'Singapore',
        'Bangkok', 'Seoul', 'Cape Town', 'Johannesburg', 'Rio de Janeiro',
        'Buenos Aires', 'Chicago', 'San Francisco', 'Miami', 'Houston', 'Las Vegas',
    ];

    return cities.map((city, index) => ({
        origin: city,
        destination: cities[(index + 1) % cities.length],
        departureTime: new Date(),
        arrivalTime: new Date(new Date().getTime() + (index + 2) * 60 * 60 * 1000),
        price: (index + 1) * 50.0,
    }));
};
