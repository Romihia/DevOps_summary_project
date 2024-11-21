import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import FlightList from '../components/FlightList';
import FlightDetails from '../components/FlightDetails';
import { getFlights, getBookedFlights, bookFlight } from '../api/api';

const HomePage = () => {
    const [flights, setFlights] = useState([]);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fetch flights and booked flights
    const fetchFlightsData = async () => {
        try {
            const allFlights = await getFlights(); // Fetch all flights
            const booked = await getBookedFlights(); // Fetch all booked flights

            // Extract flight IDs from booked flights
            const bookedFlightIds = booked.map((booking) => booking.flightId);

            // Filter out booked flights
            const availableFlights = allFlights.filter(
                (flight) => !bookedFlightIds.includes(flight.id)
            );

            setFlights(availableFlights); // Update available flights
        } catch (error) {
            console.error('Failed to fetch flights:', error);
        }
    };

    useEffect(() => {
        fetchFlightsData(); // Fetch flights on component mount
    }, []);

    const filteredFlights = flights.filter((flight) =>
        flight.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        flight.destination.toLowerCase().includes(searchQuery.toLowerCase())
        //flight.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleBookFlight = async (flight) => {
        try {
            const bookingDetails = {
                flightId: flight.id,
                userId: 'efd86da4-0578-404c-9025-d9dbac007fb7', // Replace with actual user ID
            };
            console.log('Booking flight with details:', bookingDetails); // Log for debugging
            await bookFlight(bookingDetails);

            alert(`Successfully booked flight from ${flight.origin} to ${flight.destination}`);
            setIsModalOpen(false); // Close modal after booking
            fetchFlightsData(); // Refresh the flight list after booking
        } catch (error) {
            console.error('Failed to book flight:', error);
            alert('Failed to book flight.');
        }
    };

    const handleSelectFlight = (flight) => {
        setSelectedFlight(flight);
        setIsModalOpen(true); // Open modal when a flight is selected
    };

    return (
        <div>
            <TopBar activeTab="find" />
            <div style={{ padding: '20px' }}>
                <input
                    type="text"
                    placeholder="Search flights"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        padding: '10px',
                        width: '100%',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                    }}
                />
            </div>
            <div style={{ padding: '20px' }}>
                <FlightList flights={filteredFlights} onSelectFlight={handleSelectFlight} />
            </div>

            {/* FlightDetails Modal */}
            {isModalOpen && (
                <div style={modalStyles.overlay}>
                    <div style={modalStyles.modal}>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            style={modalStyles.closeButton}
                        >
                            ✖
                        </button>
                        <FlightDetails flight={selectedFlight} onBook={handleBookFlight} />
                    </div>
                </div>
            )}
        </div>
    );
};

const modalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
    },
    modal: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        width: '400px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'transparent',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
    },
};

export default HomePage;
