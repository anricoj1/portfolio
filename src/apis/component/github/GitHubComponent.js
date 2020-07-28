/* react */
import React, { useState, useEffect } from 'react';

/* components */
import ProfileDiv from './components/ProfileDiv';
import UL from './components/UL';
import Pin from './components/Pin';

/* css */
import './GitHub.css';


const GitHubComponent = () => {
    const [profile, setProfile] = useState([]);
    const [repos, setRepos] = useState([]);
    const [pins, setPins] = useState([]);

    useEffect(() => {
        getProfile();
        getRepos();

    },[]);

    const getProfile = async () => {
        const response = await fetch('https://api.github.com/users/anricoj1');
        const data = await response.json();
        console.log(data);

        setProfile(data);
    }

    const getRepos = async () => {
        const response = await fetch('https://api.github.com/users/anricoj1/repos');
        const data = await response.json();

        console.log(data);

        setRepos(data);
        setPins([
            data[25], data[21], 
            data[15], data[12],
            data[0], data[2]
        ]);
    }

    return (
        <div className="container-fluid GitHub">
            <ProfileDiv profile={profile} />
            <div className="container-fluid middleDiv">
                <div className="padd30"><UL /><hr /></div>
                <div className="popularRepos">
                    <h6>Popular repositories</h6>
                    <div className="pins">
                        {}
                        {pins.map((pin, i) => (
                            <div className="pin" key={pin.id}>
                                <Pin pin={pin} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GitHubComponent;