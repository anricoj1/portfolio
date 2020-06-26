/* components */
import React, { Component } from "react";
import Tabs from './Tabs';

/* classes and objects */
import allLogos from './data/Logo';


/* css */
import './App.css';

/* logos */
const logos = new allLogos().getAll();


class Home extends Component {

    render() {
        return (
            <div className="homeDiv center">
                <h2 className="titleMain">Jason Anrico</h2>
                <div className="container-fluid">
                    <Tabs data={logos} />
                </div>
            </div>
        )
    }
}

export default Home;