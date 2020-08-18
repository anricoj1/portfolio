/* react */
import React, { useState, useEffect } from 'react';

/* css */
import '../GitHub.css';


const Pin = ({ star }) => {
    const [color, setColor] = useState("white");

    useEffect(() => {
        getColors();
    });

    const getColors = () => {
        if (star.language === "JavaScript") setColor("#F1E05A");
        if (star.language === "Java") setColor("#B07219");
        if (star.language === "Python") setColor("#3572A5");
        if (star.language === "HTML") setColor("#E34C26");
        if (star.language === "CSS") setColor("#563D7C");
    }
    
    return (
        <div className="container">
            <div className="pinTitle">
                {star.name}
            </div>
            <div className="pinDesc">
                {star.description}
            </div>
            <div className="langCircle" style={{background : color}} >
                <div className="pinLang">
                    {star.language}
                </div>
            </div>
        </div>
    )
}


export default Pin;