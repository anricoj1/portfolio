/* react */
import React from 'react';

/* css */
import './Repositories.css';


const SearchBox = ({ search, setSearch, setSelection }) => {

    const options = ['All', 'JavaScript', 'CSS', 'HTML', 'Java', 'Python', 'Dart', 'Swift'];

    return (
        <div className="search-box">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Find a repository..." />
            <select className="btn" onChange={(e) => setSelection(e.target.value)}>
                {options.map((option, i) => (
                    <option value={option} key={`${option}-${i}`}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default SearchBox;
