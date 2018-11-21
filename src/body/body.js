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
                    <a href="about:blank">
                        <span className="theme-button" href="about:blank">
                            resume
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/lautommy/">
                        <span className="theme-button">
                            linkedin
                        </span>
                    </a>
                    <a href="https://github.com/teelau">
                        <span className="theme-button">
                            github
                        </span>
                    </a>
                    <a>
                        <span className="theme-button">
                            contact
                        </span>
                    </a>
                    <a href="about:blank">
                        <span className="theme-button">
                            projects
                        </span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Body;