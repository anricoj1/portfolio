/* react */
import React from 'react';

/* css */
import './Search.css';


const SelectMenu = ({ filters, setSelection }) => {

    const options = ['All', 'JavaScript', 'CSS', 'HTML', 'Java', 'Python', 'Dart', 'Swift'];

    return (
        <details>
            <summary className="btn btn-success summary" aria-haspopup="menu" role="button">
                <b>Language: </b>
                <span data-menu-button> {filters.selection}</span>
                <span className="dropdown-caret"></span>
            </summary>
            <details-menu role="menu">
                <div className="select-menu">
                    <header className="menu-header">Select language</header>
                    {options.map(option => (
                        <div key={option} className="menu-item" onClick={() => setSelection(option)}>
                            {option === filters.selection ? <span className="fa fa-check check"></span> : null}
                            <label className="option">{option}</label>
                        </div>
                    ))}
                </div>
            </details-menu>
        </details>
    )
}

export default SelectMenu;
