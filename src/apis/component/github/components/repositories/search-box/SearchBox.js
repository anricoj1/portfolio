/* react */
import React from 'react';

/* components */
import SelectMenu from './SelectMenu';

/* css */
import './Search.css';


const SearchBox = ({ filters, setSearch, setSelection }) => {

    return (
        <div className="search-box">
            <input type="text" value={filters.search.toLowerCase()} onChange={e => setSearch(e.target.value)} placeholder="Find a repository..." className="search" />
            <div className="d-flex">
                <SelectMenu filters={filters} setSelection={e => setSelection(e)} />
            </div>
        </div>
    )
}

export default SearchBox;
