import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Home from './components/Home';
import Footer from './components/footer/Footer';

import './components/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="navbar fixed-top navbar-expand-lg toggle-height" id="global-nav">
                    <Nav />
                </div>
                <div className="homeImg">
                    <Home />
                </div>
                <div className="footer container-fluid">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App;