/* react */
import React from 'react';

/* components */
import Repo from '../Repo';

/* css */
import './Repositories.css';


const MapRepos = ({ repos }) => {
    return (
        <div className="results">
            {repos.map(repo => (
                <div className="repo" key={repo.id}>
                    <Repo repo={repo} />
                </div>
            ))}
        </div>
    )
}

export default MapRepos;