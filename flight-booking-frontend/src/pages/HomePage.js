import React, { useState, useEffect } from 'react';
import FlightList from '../components/FlightList';
import FlightDetails from '../components/FlightDetails';
import BookingForm from '../components/BookingForm';
import { bookFlight, getFlights } from '../api/api';

const HomePage = () => {
    const [flights, setFlights] = useState([]); // Store all flights
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [bookingSuccess, setBookingSuccess] = useState(false);

    // Fetch flights on component mount
    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const data = await getFlights();
                setFlights(data); // Update state with fetched flights
            } catch (error) {
                console.error('Failed to fetch flights:', error);
            }
        };

        fetchFlights();
    }, []); // Empty dependency array ensures this runs only once

    const handleBookFlight = async (bookingDetails) => {
        try {
            await bookFlight(bookingDetails);
            setBookingSuccess(true);
        } catch (error) {
            console.error('Failed to book flight:', error);
        }
    };

    return (
        <div>
            <FlightList flights={flights} onSelectFlight={setSelectedFlight} />
            <FlightDetails flight={selectedFlight} onBook={() => setBookingSuccess(false)} />
            {selectedFlight && !bookingSuccess && (
                <BookingForm flight={selectedFlight} onConfirmBooking={handleBookFlight} />
            )}
            {bookingSuccess && <p>Booking confirmed!</p>}
        </div>
    );
};

export default HomePage;
