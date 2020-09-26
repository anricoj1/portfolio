/* react */
import React from 'react';

/* components */
import MapRepos from './MapRepos';

/* css */
import './Repositories.css';


const SearchResults = ({ repos, search, selection }) => {
    var results = [];

    repos.forEach(repo => {
        var name = repo.name.toLowerCase();

        if ((search) && (selection !== 'All')) {
            if ((name.includes(search)) && (repo.language === selection)) return results.push(repo);
        } else if (search) {
            if (name.includes(search)) return results.push(repo);
        } else if (selection !== 'All') {
            if (repo.language === selection) return results.push(repo);
        } else {
            return results = repos;
        }
    });

    return <MapRepos repos={results} />;
}

export default SearchResults;
