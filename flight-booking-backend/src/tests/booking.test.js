const request = require('supertest');
const app = require('../app');
const { sequelize } = require('../config/database');

beforeAll(async () => {
    await sequelize.sync({ force: true }); // Reset database for tests
});

describe('Booking API', () => {
    it('should cancel a booking', async () => {
        // First, create a booking
        const booking = await request(app)
            .post('/api/bookings')
            .send({ flightId: '12345', userId: '67890' });

        // Then, cancel the booking
        const res = await request(app).delete(`/api/bookings/${booking.body.id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Booking successfully canceled');
    });
});
