/* react */
import React from 'react';

/* components */
import Repo from '../Repo';

/* css */
import './Repositories.css';


const MapRepos = ({ repos, filter }) => {
    return (
        <div id="results" className="results">
            {filter}
            {repos.map(repo => (
                <div key={repo.id} className="repo">
                    <Repo repo={repo} />
                </div>
            ))}
        </div>
    )
}

export default MapRepos;