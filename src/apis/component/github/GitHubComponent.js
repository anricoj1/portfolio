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
        
        console.log(data);

        setProfile(data);
    }

    return (
        <div className="container-fluid GitHub">
            <div className="container profileContainer">
                <img className="circleImg padd30" src={profile.avatar_url} alt=""></img>
                <div className="padd30">
                    <b>
                        <h2>{profile.name}</h2>
                        <h4><small>{profile.login}</small></h4><br />
                        <h5>{profile.bio}</h5>
                        <h5>
                            <span className="fa fa-users fa-sm">{profile.followers} follower(s) | {profile.following} following</span>
                        </h5>
                    </b>
                </div>
            </div>
        </div>
    )
}

export default GitHubComponent;