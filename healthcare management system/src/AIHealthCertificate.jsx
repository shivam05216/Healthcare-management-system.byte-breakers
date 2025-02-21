// src/AIHealthCertificate.js
import React, { useState } from 'react';

const AIHealthCertificate = () => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        gender: '',
        disease: '',
        drName: '',
        checkupDate: ''
    });
    const [generatedCertificate, setGeneratedCertificate] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setGeneratedCertificate(formData);
        alert('Generated: You can download it');
    };

    return (
        <div className="ai-health-certificate-container">
            <form onSubmit={handleSubmit} className="certificate-form">
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
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
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
                <div className="form-group">
                    <label>Disease:</label>
                    <input
                        type="text"
                        name="disease"
                        value={formData.disease}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Doctor's Name:</label>
                    <input
                        type="text"
                        name="drName"
                        value={formData.drName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Date of Checkup:</label>
                    <input
                        type="date"
                        name="checkupDate"
                        value={formData.checkupDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Generate</button>
            </form>
            {generatedCertificate && (
                <div className="generated-certificate">
                    <h2>AI Health Certificate</h2>
                    <p><strong>Name:</strong> {generatedCertificate.name}</p>
                    <p><strong>Date of Birth:</strong> {generatedCertificate.dob}</p>
                    <p><strong>Gender:</strong> {generatedCertificate.gender}</p>
                    <p><strong>Disease:</strong> {generatedCertificate.disease}</p>
                    <p><strong>Doctor's Name:</strong> {generatedCertificate.drName}</p>
                    <p><strong>Date of Checkup:</strong> {generatedCertificate.checkupDate}</p>
                </div>
            )}
        </div>
    );
};

export default AIHealthCertificate;
