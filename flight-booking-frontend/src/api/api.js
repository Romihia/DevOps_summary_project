import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log(BASE_URL);

export const getFlights = async () => {
    const response = await axios.get(`${BASE_URL}/flights`);
    return response.data;
};

export const bookFlight = async (bookingDetails) => {
    const response = await axios.post(`${BASE_URL}/bookings`, bookingDetails);
    return response.data;
};

// Add this function
export const getBookedFlights = async () => {
    const response = await axios.get(`${BASE_URL}/bookings`); // Ensure this matches your backend endpoint
    return response.data;
};

// Add cancelBooking function
export const cancelBooking = async (bookingId) => {
    await axios.delete(`${BASE_URL}/bookings/${bookingId}`);
};