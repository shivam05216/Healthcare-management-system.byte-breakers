// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // For styling the navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/forum">Public Forum</Link></li>
                <li><Link to="/ai-health-certificate">AI Health Certificate</Link></li>
                <li><Link to="/records-history">Records/History</Link></li>
                <li><Link to="/personal-details">Personal Details</Link></li>
                <li><Link to="/book-appointment">Book Appointment</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
