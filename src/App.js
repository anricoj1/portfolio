import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Home from './components/index/Home';
import Footer from './components/footer/Footer';

import './components/page.css';

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