/* react */
import React, { useState, useEffect } from 'react';

/* css */
import '../GitHub.css';


const Repo = ({ repo }) => {
    const [color, setColor] = useState("white");

    useEffect(() => {
        getColors();
    });

    const getColors = () => {
        if (repo.language === "JavaScript") setColor("#F1E05A");
        if (repo.language === "Java") setColor("#B07219");
        if (repo.language === "Python") setColor("#3572A5");
        if (repo.language === "HTML") setColor("#E34C26");
        if (repo.language === "CSS") setColor("#563D7C");
    }
    
    return (
        <div className="container">
            <div className="pinTitle">
                {repo.name}
            </div>
            <div className="pinDesc">
                {repo.description}
            </div>
            <div className="langCircle" style={{background : color}} >
                <div className="pinLang">
                    {repo.language}
                </div>
            </div>
        </div>
    )
}


export default Repo;