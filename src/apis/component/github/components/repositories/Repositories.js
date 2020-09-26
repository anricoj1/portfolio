/* react */
import React, { useState, useEffect } from 'react';

/* components */
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

/* css */
import './Repositories.css';

/* github */
import GitHub from '../../GitHub';

const Repositories = () => {
    const [repos, setRepos] = useState([]);
    const [search, setSearch] = useState('');
    const [selection, setSelection] = useState('All');

    useEffect(() => {
        const getRepositories = async () => {
            setRepos(await new GitHub().getRepos());
        }

        getRepositories();
    },[]);


    return (
        <div className="repositories">
            <div className="container-fluid">
                <SearchBox search={search} setSearch={(e) => setSearch(e)} setSelection={(e) => setSelection(e) } />
            </div>
            <div className="results">
                <SearchResults search={search} selection={selection} repos={repos} />
            </div>
        </div>
    )
}

export default Repositories;
