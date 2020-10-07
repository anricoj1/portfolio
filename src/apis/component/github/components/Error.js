/* react */
import React from 'react';

/* css */
import './repositories/Repositories.css';

const Error = ({ msg }) => {
    
    return (
        <div className="filterMsg">
            <h6>{msg}</h6>
        </div>
    )
}

export default Error;