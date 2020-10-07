/* react */
import React from 'react';

/* components */
import MapRepos from './MapRepos';
import FilterText from './search-box/FilterText';

/* css */
import './Repositories.css';

const SearchResults = ({ search, selection, repos }) => {
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

    return (
        <div className="repos">
            <div className="filter">
                <FilterText search={search} selection={selection} len={results.length} />
            </div>
            <MapRepos repos={results} />
        </div>
    )
}

export default SearchResults;
