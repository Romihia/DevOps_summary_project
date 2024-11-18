const app = require('./src/app');
const dotenv = require('dotenv');
const { sequelize } = require('./src/config/database');
const Flight = require('./src/models/Flight');

dotenv.config();

const PORT = process.env.PORT || 3000;
const seedFlights = async () => {
    const flights = generateFlights(); 
    await Flight.bulkCreate(flights, { ignoreDuplicates: true });
};

sequelize.sync({ force: true }) // Use `force: true` only for development (resets DB on every start)
    .then(async () => {
        await seedFlights(); // Seed the database
        console.log('Database seeded with sample flights.');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    });


const generateFlights = () => {
    const cities = [
        'New York', 'Los Angeles', 'London', 'Paris', 'Tokyo', 'Osaka',
        'Sydney', 'Melbourne', 'Dubai', 'Berlin', 'Rome', 'Madrid', 'Toronto',
        'Vancouver', 'Mumbai', 'Delhi', 'Beijing', 'Shanghai', 'Singapore',
        'Bangkok', 'Seoul', 'Cape Town', 'Johannesburg', 'Rio de Janeiro',
        'Buenos Aires', 'Chicago', 'San Francisco', 'Miami', 'Houston', 'Las Vegas'
    ];

    return cities.map((city, index) => ({
        origin: city,
        destination: cities[(index + 1) % cities.length], // Cycle through destinations
        departureTime: new Date(),
        arrivalTime: new Date(new Date().getTime() + (index + 2) * 60 * 60 * 1000), // Increment hours
        price: (index + 1) * 50.0, // Increment price
    }));
};
