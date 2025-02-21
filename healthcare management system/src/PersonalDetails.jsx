// src/PersonalDetails.jsx
import React, { useState } from 'react';

const PersonalDetails = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        patientType: '',
        healthHistories: '',
        gender: ''
    });
    const [savedData, setSavedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSavedData(formData);
    };

    return (
        <div className="personal-details-outer-container">
            <div className="personal-details-container">
                <form onSubmit={handleSubmit} className="details-form">
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Patient Type:</label>
                        <input
                            type="text"
                            name="patientType"
                            value={formData.patientType}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Health Histories:</label>
                        <textarea
                            name="healthHistories"
                            value={formData.healthHistories}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Gender:</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button type="submit">Save</button>
                </form>
                {savedData && (
                    <div className="saved-details">
                        <h2>Saved Details</h2>
                        <p><strong>Name:</strong> {savedData.name}</p>
                        <p><strong>Email:</strong> {savedData.email}</p>
                        <p><strong>Password:</strong> {savedData.password}</p>
                        <p><strong>Patient Type:</strong> {savedData.patientType}</p>
                        <p><strong>Health Histories:</strong> {savedData.healthHistories}</p>
                        <p><strong>Gender:</strong> {savedData.gender}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PersonalDetails;
