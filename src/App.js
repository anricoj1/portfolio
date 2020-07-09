/* react and components */
import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import BackgroundComponent from './components/BackgroundComponent';
import Tabs from './components/Tabs';
import RenderProp from './components/RenderProp';
import Footer from './components/footer/Footer';

/* classes */
import allAPIs from './components/data/API';

/* css */
import './components/App.css';


/* logos */
const logos = new allAPIs().getAll();

class App extends Component {
    constructor() {
        super();
        this.state = { 
            default : false,
            component : null
        }
    }

    renderProp() {
        return this.setState({ default : !this.state.default });
    }

    switchComponent(data) {
        return this.setState({ component : data })
    }

    render() {
        return (
            <div className="App">
                <div className="navbar fixed-top navbar-expand-lg toggle-height" id="global-nav">
                    <Nav />
                </div>
                <div className="homeImg">
                    <BackgroundComponent />
                    <Tabs toggleDiv={() => {this.renderProp()}} toggleComponent={(comp) => this.switchComponent(comp)}  data={logos} />
                </div>
                <div className="container-fluid">
                    {this.state.default ? <RenderProp render={this.state.component}/> : null}
                </div>
                <div className="footer container-fluid">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App;