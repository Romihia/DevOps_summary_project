import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getFlights = async () => {
    const response = await axios.get(`${BASE_URL}/flights`);
    return response.data;
};

export const bookFlight = async (bookingDetails) => {
    const response = await axios.post(`${BASE_URL}/bookings`, bookingDetails);
    return response.data;
};
