// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';  // Import the CSS file for custom styles


const HomePage = () => {
    return (
        <div>

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
