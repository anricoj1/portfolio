import React, { Component } from 'react';

/* css */
import './App.css';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    render() {
        return (
            <div className="padd20 container">
                <ul className="logosUl">
                    {this.data.map((data, i) => (
                        <li key={i} className="logosLi">
                            <span className={data.icon} onClick={() => { console.log(data.getName())}}></span>
                        </li>   
                    ))}
                </ul>
            </div>
        )
    }
}

export default Tabs;