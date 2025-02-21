// src/PublicForum.jsx
import React, { useState } from 'react';

const PublicForum = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        experience: ''
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
        alert('Posted');
    };

    return (
        <div className="forum-form-container">
            <div className="note">
                AS THIS IS NOT THE POLISHED FORM, WE HAVE ADDED ONLY BASIC DESIGNING TO MADE YOU UNDERSTAND OUR APPROACH
            </div>
            <form onSubmit={handleSubmit} className="forum-form">
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Write here your experience:</label>
                    <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Post</button>
            </form>
        </div>
    );
};

export default PublicForum;
