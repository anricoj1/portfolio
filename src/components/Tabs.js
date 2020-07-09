import React, { Component } from 'react';

/* css */
import './App.css';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    render() {
        const { toggleDiv } = this.props;
        const { toggleComponent } = this.props;
        return (
            <div className="padd50 container">
                <ul className="logosUl">
                    {this.data.map((data, i) => (
                        <li key={i} className="logosLi">
                            <span className={data.icon} onClick={() => { toggleDiv(); toggleComponent(data.getComponent()); }}></span>
                        </li>   
                    ))}
                </ul>
            </div>
        )
    }
}

export default Tabs;