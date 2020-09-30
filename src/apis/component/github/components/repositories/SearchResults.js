/* react */
import React from 'react';

/* components */
import MapRepos from './MapRepos';

/* css */
import './Repositories.css';


const SearchResults = ({ repos, search, selection }) => {
    var results = [];
    var str = '';

    repos.forEach(repo => {
        var name = repo.name.toLowerCase();

        if ((search) && (selection !== 'All')) {
            if ((name.includes(search)) && (repo.language === selection)) results.push(repo);
            str = <div><b>{results.length}</b> results for repositories matching <b>{search}</b> written in <b>{selection}</b></div>
        } else if (search) {
            if (name.includes(search)) results.push(repo);
            str = <div><b>{results.length}</b> results for repositories matching <b>{search}</b></div>
        } else if (selection !== 'All') {
            if (repo.language === selection) results.push(repo);
            str = <div><b>{results.length}</b> results for repositories written in <b>{selection}</b></div>
        } else {
            return results = repos;
        }
    });

    return <MapRepos repos={results} filter={str} />;
}

export default SearchResults;
