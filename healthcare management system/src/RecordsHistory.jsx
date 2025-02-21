// src/RecordsHistory.js
import React, { useState } from 'react';

const RecordsHistory = () => {
    const [diseases, setDiseases] = useState(['Disease']);

    const addDisease = () => {
        setDiseases([...diseases, 'Disease']);
    };

    return (
        <div className="records-history-container">
            {diseases.map((disease, index) => (
                <div key={index} className="record-box">
                    <h1>{disease}</h1>
                    <div className="button-group">
                        <button className="view-details-button">View Details</button>
                        <button className="connected-reports-button">Connected Reports</button>
                    </div>
                </div>
            ))}
            <button onClick={addDisease} className="add-disease-button">Add Disease</button>
        </div>
    );
};

export default RecordsHistory;
