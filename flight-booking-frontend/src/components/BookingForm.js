import React, { useState } from 'react';

const BookingForm = ({ flight, onConfirmBooking }) => {
    const [userId, setUserId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onConfirmBooking({ flightId: flight.id, userId });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Book Flight</h3>
            <label>
                User ID:
                <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
            </label>
            <button type="submit">Confirm Booking</button>
        </form>
    );
};

export default BookingForm;
