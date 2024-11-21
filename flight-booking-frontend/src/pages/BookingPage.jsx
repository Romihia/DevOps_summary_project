import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import { getBookedFlights, cancelBooking } from '../api/api';

const BookingPage = () => {
    const [bookedFlights, setBookedFlights] = useState([]);

    useEffect(() => {
        const fetchBookedFlights = async () => {
            try {
                const data = await getBookedFlights();
                setBookedFlights(data);
            } catch (error) {
                console.error('Failed to fetch booked flights:', error);
            }
        };

        fetchBookedFlights();
    }, []);

    const handleCancelBooking = async (bookingId) => {
        try {
            await cancelBooking(bookingId);
            setBookedFlights((prevBookings) =>
                prevBookings.filter((booking) => booking.id !== bookingId)
            );
        } catch (error) {
            console.error('Failed to cancel booking:', error);
        }
    };

    return (
        <div>
            <TopBar activeTab="booked" />
            <div style={{ padding: '20px' }}>
                <h2>My Booked Flights</h2>
                {bookedFlights.length === 0 ? (
                    <p>No booked flights yet.</p>
                ) : (
                    <ul>
                        {bookedFlights.map((booking) => {
                            const { flight } = booking;
                            return (
                                <li key={booking.id}>
                                    <strong>{flight?.origin || 'Unknown'}</strong> →{' '}
                                    <strong>{flight?.destination || 'Unknown'}</strong> | 
                                    Departure: {flight?.departureTime ? new Date(flight.departureTime).toLocaleString() : 'N/A'} | 
                                    Price: ${flight?.price || 'N/A'}
                                    <button
                                        onClick={() => handleCancelBooking(booking.id)}
                                        style={{
                                            marginLeft: '10px',
                                            padding: '5px 10px',
                                            backgroundColor: 'red',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '5px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Cancel Booking
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default BookingPage;
