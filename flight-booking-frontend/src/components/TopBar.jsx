import React from 'react';
import { useNavigate } from 'react-router-dom';

const TopBar = ({ activeTab }) => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#007bff', color: '#fff' }}>
            <button
                onClick={() => navigate('/')}
                style={{
                    padding: '10px',
                    backgroundColor: activeTab === 'find' ? '#fff' : 'transparent',
                    color: activeTab === 'find' ? '#007bff' : '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Search for Flights
            </button>
            <button
                onClick={() => navigate('/booking')}
                style={{
                    padding: '10px',
                    backgroundColor: activeTab === 'booked' ? '#fff' : 'transparent',
                    color: activeTab === 'booked' ? '#007bff' : '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                My Booked Flights
            </button>
        </div>
    );
};

export default TopBar;
