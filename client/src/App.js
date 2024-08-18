import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import VehicleListingsPage from './pages/VehicleListingsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
// Add other page imports here

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/vehicles" element={<VehicleListingsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* Add other routes here */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
