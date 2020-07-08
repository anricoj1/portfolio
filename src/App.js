/* react and components */
import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import BackgroundComponent from './components/BackgroundComponent';
import Tabs from './components/Tabs';
import RenderProp from './components/RenderProp';
import Footer from './components/footer/Footer';

/* classes */
import allLogos from './components/data/Logo';

/* css */
import './components/App.css';

/* logos */
const logos = new allLogos().getAll();

class App extends Component {
    constructor() {
        super();
        this.state = { 
            default : false,
            data : logos
        }
    }

    renderProp() {
        return this.setState({ default : !this.state.default });
    }


    render() {
        return (
            <div className="App">
                <div className="navbar fixed-top navbar-expand-lg toggle-height" id="global-nav">
                    <Nav />
                </div>
                <div className="homeImg">
                    <BackgroundComponent />
                    <Tabs toggleDiv={() => {this.renderProp()}} data={logos} />
                </div>
                <div className="container-fluid">
                    {this.state.default ? <RenderProp /> : null}
                </div>
                <div className="footer container-fluid">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App;