import React from 'react';

const Unauthorized = () => {
    return (
        <div className="unauthorized-container">
            <h1 className="unauthorized-title">403 - Unauthorized</h1>
            <p className="unauthorized-message">You do not have permission to access this page.</p>
        </div>
    );
};

export default Unauthorized;
