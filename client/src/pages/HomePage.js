// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';  // Import the CSS file for custom styles


const HomePage = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">NOVA RIDE</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutus">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/vehicles">Vehicles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

            {/* Hero Section */}
            <header className="hero-section text-white text-center">
                <div className="container">
                    <h1 className="display-4">Looking to save more on your rental car?</h1>
                    <p className="lead">Whether you're planning a weekend getaway, a business trip, or just need a reliable ride for the day, we offer a wide range of vehicles to suit your needs.</p>
                    <div className="hero-buttons">
                        <Link to="/vehicles" className="btn btn-primary btn-lg mr-2">Book A Rental</Link>
                        <Link to="/learnmore" className="btn btn-secondary btn-lg">Learn More</Link>
                    </div>
                    <div className="hero-search mt-4">
                        <div className="row">
                            <div className="col-md-2">
                                <input type="text" className="form-control" placeholder="Car Type" />
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control" placeholder="Pickup Location" />
                            </div>
                            <div className="col-md-2">
                                <input type="date" className="form-control" placeholder="Pickup Date" />
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control" placeholder="Dropoff Location" />
                            </div>
                            <div className="col-md-2">
                                <input type="date" className="form-control" placeholder="Return Date" />
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-danger btn-block">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default HomePage;
