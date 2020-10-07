/* react */
import React from 'react';

/* components */
import Repo from '../Repo';

/* css */
import './Repositories.css';


const MapRepos = ({ repos }) => {
    return (
        <div className="results">
            {
                repos.length === 0 ?
                <div className="filterMsg">
                    anricoj1 doesn't have any repositories that match.
                </div>
                :
                repos.map(repo => (
                    <div key={repo.id} className="repo">
                        <Repo repo={repo} />
                    </div>
                ))
            }
        </div>
    )
}

export default MapRepos;