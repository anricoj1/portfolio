import React, { Component } from 'react';

class RenderProp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component : props.render,
            msg : "Hello"
        }
    }

    render() {
        return (
            <div>{this.state.component}</div>
        )
    }
}

export default RenderProp;