import React from 'react';

const FlightDetails = ({ flight, onBook }) => {
    if (!flight) return <p>Select a flight to see details.</p>;

    return (
        <div>
            <h3>Flight Details</h3>
            <p><strong>Origin:</strong> {flight.origin}</p>
            <p><strong>Destination:</strong> {flight.destination}</p>
            <p><strong>Departure:</strong> {new Date(flight.departureTime).toLocaleString()}</p>
            <p><strong>Arrival:</strong> {new Date(flight.arrivalTime).toLocaleString()}</p>
            <p><strong>Price:</strong> ${flight.price}</p>
            <button
                onClick={() => onBook(flight)}
                style={{
                    padding: '10px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Book This Flight
            </button>
        </div>
    );
};

export default FlightDetails;
