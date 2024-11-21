import React from 'react';

const FlightList = ({ flights, onSelectFlight }) => {
    return (
        <div>
            <h2>Available Flights</h2>
            {flights.length === 0 ? (
                <p>No flights available at the moment.</p>
            ) : (
                <ul>
                    {flights.map((flight) => (
                        <li
                            key={flight.id}
                            onClick={() => onSelectFlight(flight)}
                            style={{
                                cursor: 'pointer',
                                marginBottom: '10px',
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                            }}
                        >
                            <strong>{flight.origin}</strong> → <strong>{flight.destination}</strong> | 
                            Departure: {new Date(flight.departureTime).toLocaleString()} | 
                            Price: ${flight.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FlightList;
