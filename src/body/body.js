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
            <div className="body-container">
                <div className="button-container">
                    <a href="TommyLauResume.pdf" target="_blank" rel="noopener noreferrer">
                        <span className="theme-button">
                            resume
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/lautommy/" target="_blank" rel="noopener noreferrer">
                        <span className="theme-button">
                            linkedin
                        </span>
                    </a>
                    <a href="https://github.com/teelau" target="_blank" rel="noopener noreferrer">
                        <span className="theme-button">
                            github
                        </span>
                    </a>
                    <a href="mailto:tommylau94@gmail.com">
                        <span className="theme-button">
                            contact
                        </span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Body;