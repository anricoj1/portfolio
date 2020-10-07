/* react */
import React, { useState, useEffect } from 'react';

/* components */
import SearchResults from './SearchResults';
import SearchBox from './search-box/SearchBox';

/* css */
import './Repositories.css';

/* github */
import GitHub from '../../GitHub';

const Repositories = () => {
    /* useState hooks */
    const [repos, setRepos] = useState([]);
    const [search, setSearch] = useState('');
    const [selection, setSelection] = useState('All');

    /* useEffect to fetch repos (async) */
    useEffect(() => {
        const getRepositories = async () => {
            setRepos(await new GitHub().getRepos());
        }

        getRepositories();
    },[]);


    return (
        <div className="repositories">
            <div className="container-fluid">
                <SearchBox filters={{"search" : search, "selection" : selection }} setSearch={e => setSearch(e)} setSelection={e => setSelection(e)} />
            </div>
            <SearchResults search={search} selection={selection} repos={repos} />
        </div>
    )
}

export default Repositories;
