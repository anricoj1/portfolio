/* react */
import React from 'react';

/* css */
import '../GitHub.css';

const UL = () => {
    return (
        <ul className="topUl">
            <li className="topLi">
                <span className="fa fa-book-open fa-sm"></span> Overview
            </li>
            <li className="topLi">
                <span className="fa fa-code fa-sm"></span> Repositories
            </li>
            <li className="topLi">
                <span className="fa fa-list fa-sm"></span> Projects
            </li>
            <li className="topLi">
                <span className="fa fa-cube fa-sm"></span> Packages
            </li>
        </ul>
    )
}

export default UL;