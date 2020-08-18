/* react */
import React, { useState, useEffect } from 'react';

/* components */
import ProfileDiv from './components/ProfileDiv';
import FlexBox from './components/FlexBox';
import Overview from './components/Overview';

/* methods */
import GitHub from './GitHub';
const github = new GitHub();

/* css */

const GitHubComponent = () => {
    const [profile, setProfile] = useState([]);
    const [component, setComponent] = useState(<Overview />);


    useEffect(() => {
        setData();
    },[]);

    const setData = async () => {
        setProfile(await github.getProfile());
    }

    return (
        <div className="container-fluid GitHub">
            <ProfileDiv profile={profile} />
            <div className="container-fluid middleDiv">
                <div className="padd30">
                    <FlexBox setComponent={(e) => setComponent(e)} links={github.setFlexBox()} />
                    {component}
                </div>
            </div>
        </div>
    )
}

export default GitHubComponent;