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
                    <h2 className="name">
                        {profile.name}
                    </h2>
                    <h3 className="username">
                        {profile.login}
                    </h3>
                    <br />
                    <h4 className="bio">
                        {profile.bio}
                    </h4>
                    <h5 className="follows">
                        <span className="fa fa-users fa-sm"></span>
                        {profile.followers} { profile.followers === 1 ? 'follower' : 'followers'} | {profile.following}
                    </h5>
                    <hr />
                    <h6 className="company">
                        {profile.company}
                    </h6>
                    <h6 className="blog">
                        {profile.blog}
                    </h6>
                </div>
            </div>
            <div className="container-fluid middleDiv">
                Hello
            </div>
        </div>
    )
}

export default GitHubComponent;