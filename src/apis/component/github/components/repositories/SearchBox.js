/* react */
import React from 'react';

/* components */
import SelectMenu from './SelectMenu';

/* css */
import './Repositories.css';


const SearchBox = ({ filters, len, setSearch, setSelection }) => {

    const FilterText = () => {
        if ((filters.search) && (filters.selection !== 'All')) {
            return <p>{len} results for repositories matching {filters.search} written in {filters.selection}</p>
        } else if (filters.search) {
            return <p>{len} results for repositories matching {filters.search}</p>
        } else if (filters.selection !== 'All') {
            return <p>{len} results for repositories written in {filters.selection}</p>
        } else {
            return null;
        }
    }
    
    return (
        <div className="search-div">
            <div className="search-box">
                <input type="text" value={filters.search} onChange={e => setSearch(e.target.value)} placeholder="Find a repository..." className="search" />
                <div className="d-flex">
                    <SelectMenu filters={filters} setSelection={e => setSelection(e)} />
                </div>
            </div>
            <FilterText />
        </div>
    )
}

export default SearchBox;
