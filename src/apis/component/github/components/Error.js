import React from 'react';

const Error = ({ msg }) => {
    return (
        <div className="error">
            <h1>{msg}</h1>
        </div>
    )
}

export default Error;