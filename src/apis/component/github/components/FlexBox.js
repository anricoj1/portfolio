/* react */
import React from 'react';

/* css */
import '../GitHub.css';

const FlexBox = ({ links, setComponent }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark flexBox">
            <ul className="underlineUl">
                {links.map((link) => (
                    <li key={link.name} className="topLi nav-link" onClick={() => setComponent(link.component)}>
                        <span className={link.icon}> {link.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default FlexBox;