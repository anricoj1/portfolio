/* react */
import React from 'react';

/* css */
import '../GitHub.css';

const colors = {
    "JavaScript" : {
        "color" : "#F1E05A"
    },
    "CSS" : {
        "color" : "#563D7C"
    },
    "HTML" : {
        "color" : "#E34C26"
    },
    "Python" : {
        "color" : "#3572AS"
    },
    "Java" : {
        "color" : "#B07219"
    }
}

const Pin = ({ pin }) => {
    return (
        <div className="container">
            {pin.name ? <div className="pinTitle">{pin.name}</div> : <div className="pinTitle"></div>}
            {pin.description ? <div className="pinDesc">{pin.description}</div> : <div className="pinDesc"></div>}
            {pin.language ? 
                <div className="langCircle">
                    <div className="pinLang">{pin.language}</div>
                </div> : 
                <div className="langCircle">
                    <div className="pinLang">NaN</div>
                </div>
            }
        </div>
    )
}


export default Pin;