// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    return (
        <div className="container mt-5">
            <div className="jumbotron text-center">
                <h1 className="display-4">Welcome to Vehicle Rental System</h1>
                <p className="lead">Rent your favorite vehicles at the best prices!</p>
                <hr className="my-4" />
                <p>Explore our wide range of vehicles and enjoy a seamless rental experience.</p>
                <Link className="btn btn-primary btn-lg" to="/vehicles" role="button">Browse Vehicles</Link>
            </div>
            <div className="text-center mt-3">
                <Link to="/profile" className="btn btn-secondary">My Profile</Link>
                <Link to="/logout" className="btn btn-danger ml-2">Logout</Link>
            </div>
        </div>
    );
};

export default HomePage;
