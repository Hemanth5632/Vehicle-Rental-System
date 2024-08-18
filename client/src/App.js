// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import VehicleListingsPage from './pages/VehicleListingsPage';
// Add other page imports here

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/vehicles" element={<VehicleListingsPage />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

export default App;
