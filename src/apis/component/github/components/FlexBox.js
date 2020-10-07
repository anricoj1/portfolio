/* react */
import React from 'react';

/* css */
import './GitHub.css';

const FlexBox = ({ links, setComponent, publicRepos }) => {

    const setActive = (id) => {
        var underlineUl = document.querySelectorAll('ul.underlineUl li');
        var menuItem = document.getElementById(id);

        underlineUl.forEach((item) => {
            item.classList.remove("active");
            item.classList.remove("activeLi");
        });
        menuItem.classList.add("activeLi");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark flexBox">
            <ul className="underlineUl">
                {links.map((link) => (
                    <li id={link.name} key={link.name} className="topLi nav-link" onClick={() => { setComponent(link.component); setActive(link.name) }}>
                        <div className="inlineSpan">
                            <span className={link.icon}>
                                <span className="spanMargin">
                                    {link.name}
                                    {link.name === 'Repositories' ? <div className="Counter">{publicRepos}</div> : null}    
                                </span>
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default FlexBox;