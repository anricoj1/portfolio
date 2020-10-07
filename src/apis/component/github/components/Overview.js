/* react */
import React, { useEffect, useState } from 'react';

/* components */
import Repo from './Repo';

/* css */
import './GitHub.css';

import GitHub from '../GitHub';

const Overview = () => {
    const [starred, setStars] = useState([]);

    useEffect(() => {
        getStarred();
    },[]);

    const getStarred = async () => {
        setStars(await new GitHub().getStars())
    }

    return (
        <div className="overview">
            <h6>Popular repositories</h6>
            <div className="pins">
                {starred.map((repo) => (
                    <div className="pin" key={repo.id}>
                        <Repo className="pin" repo={repo} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Overview;