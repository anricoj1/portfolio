import React, { Component } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';

import './components/styles/page.css';

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Home />
                <Footer />
            </div>
        )
    }
}

export default App;