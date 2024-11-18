const request = require('supertest');
const app = require('../src/app');

describe('Flight API', () => {
    it('should fetch all flights', async () => {
        const res = await request(app).get('/api/flights');
        expect(res.statusCode).toEqual(200);
    });
});
