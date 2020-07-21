/* react */
import React, { useState, useEffect } from 'react';

/* css */
import './GitHub.css';

const GitHubComponent = () => {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = async () => {
        const response = await fetch('https://api.github.com/users/anricoj1');
        const data = await response.json();

        setProfile(data);
    }

    return (
        <div className="GitHub">
            <h1>{profile.login}</h1>
        </div>
    )
}

export default GitHubComponent;