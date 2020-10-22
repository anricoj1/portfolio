/* react */
import React from "react";

/* components */
import Tabs from './Tabs';

/* css */
import './App.css';


const BackgroundComponent = ({ component, setComponent, icons }) => {
    return (
        <div className="homeDiv">
            <h2 className="titleMain">Jason Anrico</h2>
            <Tabs setComponent={e => setComponent(e)} icons={icons} />
        </div>
    )
}

export default BackgroundComponent;