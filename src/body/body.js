import React, { Component } from 'react';
import './body.css';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: props.height,
        };
    }

    render() {
        return (
            <div>
            <div></div>
            <div>I like going outside</div>
            <div>I've studied a bit</div>
            <div>I've worked a bit</div>
            <div>I've made a few things</div>
            </div>
        );
    }
}

export default Body;