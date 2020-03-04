import React, { Component } from 'react';

import '../page.css';
import './Footer.css';

import github from '../images/icons/github.png';
import linkedin from '../images/icons/linkedIn.png';




class Footer extends Component {
    render() {
        return (
            <footer className="footer container-fluid">
                <div className="container extraSpace">
                    <ul className="cenLinks icons">
                        <li>
                            <a href="https://github.com/anricoj1"><img src={github} alt="GitHub"></img></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/anricoj1/"><img src={linkedin} alt="LinkedIn"></img></a>
                        </li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;