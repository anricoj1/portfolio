/* react */
import React from 'react';

/* css */
import './Repositories.css';


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
    )
}

export default SelectMenu;
