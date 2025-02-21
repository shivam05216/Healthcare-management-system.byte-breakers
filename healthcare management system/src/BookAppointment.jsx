// src/BookAppointment.jsx
import React, { useState } from 'react';
import './BookAppointment.css';

const BookAppointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        aadhar: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        doctor: '',
        department: '',
        reason: '',
        history: '',
        notification: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add functionality to handle form submission
        alert('Appointment Booked!');
    };

    return (
        <div className="container">
            <h2>Student Healthcare Appointment Form</h2>
            <form id="appointmentForm" onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label>Aadhar no:</label>
                <input
                    type="text"
                    id="aadhar"
                    name="aadhar"
                    value={formData.aadhar}
                    onChange={handleChange}
                    required
                />

                <label>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label>Phone Number:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <label>Preferred Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />

                <label>Preferred Time:</label>
                <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                />

                <label>Doctor’s Name:</label>
                <input
                    type="text"
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                />

                <label>Department:</label>
                <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Department</option>
                    <option value="General Physician">General Physician</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="Others">Others</option>
                </select>

                <label>Reason for Visit:</label>
                <textarea
                    id="reason"
                    name="reason"
                    rows="3"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                ></textarea>

                <label>Previous Medical History (if any):</label>
                <textarea
                    id="history"
                    name="history"
                    rows="3"
                    value={formData.history}
                    onChange={handleChange}
                ></textarea>

                <label>Notification Mode:</label>
                <select
                    id="notification"
                    name="notification"
                    value={formData.notification}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Notification Mode</option>
                    <option value="Email">Email</option>
                    <option value="SMS">SMS</option>
                </select>

                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
};

export default BookAppointment;
