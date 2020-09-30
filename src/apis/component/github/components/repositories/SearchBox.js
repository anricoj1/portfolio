/* react */
import React from 'react';

/* css */
import './Repositories.css';


const SearchBox = ({ search, selection, setSearch, setSelection }) => {

    const options = ['All', 'JavaScript', 'CSS', 'HTML', 'Java', 'Python', 'Dart', 'Swift'];

    return (
        <div className="search-box">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Find a repository..." className="search" />
            <div className="d-flex">
                <details>
                    <summary className="btn btn-dark summary" aria-haspopup="menu" role="button">
                        <b>Language: </b>
                        <span data-menu-button> {selection}</span>
                        <span className="dropdown-caret"></span>
                    </summary>
                    <details-menu role="menu">
                        <table className="select-menu">
                            <tbody>
                                <tr className="menu-header">
                                    <th>Select language</th>
                                </tr>
                                {options.map(option => (
                                    <tr className="menu-item" key={option}>
                                        <td onClick={() => setSelection(option)}><b>{option}</b></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </details-menu>
                </details>
            </div>
        </div>
    )
}

export default SearchBox;
