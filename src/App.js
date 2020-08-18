/* react */
import React, { useState } from 'react';

/* components */
import Nav from './components/nav/Nav';
import BackgroundComponent from './components/BackgroundComponent';
import Tabs from './components/Tabs';
import Footer from './components/footer/Footer';

/* classes */
import APIs from './apis/API';

/* css */
import './components/App.css';


/* logos */
const logos = new APIs().getAll();

const App = () => {
    const [toggle, setToggle] = useState(false);
    const [component, setComponent] = useState(null);

    return (
        <div className="App">
            <div className="navbar fixed-top navbar-expand-lg toggle-height" id="global-nav">
                <Nav />
            </div>
            <div className="homeImg">
                <BackgroundComponent />
                <Tabs toggleDiv={() => setToggle(!toggle)} setComponent={(e) => setComponent(e)} icons={logos} />
            </div>
            {toggle ? component : null}
            <div className="container-fluid footer">
                <Footer />
            </div>
        </div>
    )
}

export default App;