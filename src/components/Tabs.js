/* react */
import React from 'react';

/* css */
import './App.css';

const Tabs = ({toggleDiv, setComponent, icons}) => {
    return (
        <div className="padd50 container">
            <ul className="logosUl">
                {icons.map((data, i) => (
                    <li key={i} className="logosLi">
                        <span className={data.icon} onClick={() => {toggleDiv(); setComponent(data.getComponent()); }}></span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tabs;