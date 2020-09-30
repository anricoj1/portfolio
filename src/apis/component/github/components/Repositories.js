/* react */
import React, { useState, useEffect } from 'react';

/* components */
import SearchBox from './repositories/SearchBox';
import SearchResults from './repositories/SearchResults';

/* css */
import './repositories/Repositories.css';

/* github */
import GitHub from '../GitHub';

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
                <SearchBox search={search} selection={selection} setSearch={(e) => setSearch(e)} setSelection={(e) => setSelection(e) } />
            </div>
            <SearchResults search={search} selection={selection} repos={repos} />
        </div>
    )
}

export default Repositories;
