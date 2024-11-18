import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
    console.log(`${process.env.REACT_APP_BASE_URL}`);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
