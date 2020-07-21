/* react */
import React from "react";

/* css */
import '../App.css';
import './Nav.css';

const Nav = () => {

    const toggleNav = () => {
        const nav = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-links li');

        nav.classList.toggle('active-nav');

        links.forEach((link, i) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `linkFade 0.5s ease forwards ${i / 7 + 1}s`;
            }
        });
    }

    return (
        <div className="container">
            <a className="navbar-brand scrollD" href="/">Jason Anrico</a>
            <ul className="nav-links">
                <li>
                    <a className="scrollD" href="/">Home</a>
                </li>
                <li>
                    <a className="scrollD" href="/">About</a>
                </li>
                <li>
                    <a className="scrollD" href="/">Projects</a>
                </li>
            </ul>
            <div className="toggler" onClick={() => toggleNav()}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    )
}

export default Nav;