/* react */
import React, { useEffect, useState } from 'react';

/* components */
import Pin from './Pin';

/* css */
import '../GitHub.css';

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
                {starred.map((star) => (
                    <div className="pin" key={star.id}>
                        <Pin star={star} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Overview;