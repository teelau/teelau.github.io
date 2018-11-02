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
            </div>
        );
    }
}

export default Body;