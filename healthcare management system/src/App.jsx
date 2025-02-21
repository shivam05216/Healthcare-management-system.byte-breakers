// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import PublicForum from './PublicForum.jsx';
import AIHealthCertificate from './AIHealthCertificate.jsx';
import RecordsHistory from './RecordsHistory.jsx';
import PersonalDetails from './PersonalDetails.jsx';
import BookAppointment from './BookAppointment.jsx'; // Import the new component
import './App.css';

const Card = ({ title, points, image }) => (
    <div className="card">
        <img src={image} alt="Card cap" className="card-img" />
        <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <ul className="card-points">
                {points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}  
            </ul>
            <button className="card-button">Go somewhere</button>
        </div>
    </div>
);

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={
                            <div className="cards-container">
                                <Card 
                                    title="Public Forum" 
                                    points={["Discuss health topics", "Share experiences", "Get advice from peers"]} 
                                    image="path/to/public-forum.jpg"
                                />
                                <Card 
                                    title="AI Report" 
                                    points={["Generate health reports", "AI-driven insights", "Personalized recommendations"]} 
                                    image="path/to/ai-report.jpg"
                                />
                                <Card 
                                    title="Personalized Details" 
                                    points={["View personal health data", "Update personal information", "Track health metrics"]} 
                                    image="path/to/personal-details.jpg"
                                />
                                <Card 
                                    title="About" 
                                    points={["Learn about our mission", "Meet the team", "Contact us"]} 
                                    image="path/to/about.jpg"
                                />
                                <Card 
                                    title="Leave Certificate" 
                                    points={["Request leave certificate", "View leave history", "Submit leave applications"]} 
                                    image="path/to/leave-certificate.jpg"
                                />
                            </div>
                        } />
                        <Route path="/forum" element={<PublicForum />} />
                        <Route path="/ai-health-certificate" element={<AIHealthCertificate />} />
                        <Route path="/records-history" element={<RecordsHistory />} />
                        <Route path="/personal-details" element={<PersonalDetails />} />
                        <Route path="/book-appointment" element={<BookAppointment />} /> {/* Add the new route */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;

