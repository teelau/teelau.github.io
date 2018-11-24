import React, { Component } from 'react';
import './body.css';
import Fade from 'react-reveal/Fade';

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
                <div className="button-container">
                    <Fade bottom>
                        <a href="TommyLauResume.pdf" target="_blank" rel="noopener noreferrer">
                            <span className="theme-button">
                                resume
                            </span>
                        </a>
                    </Fade>
                    <Fade bottom>
                        <a href="https://www.linkedin.com/in/lautommy/" target="_blank" rel="noopener noreferrer">
                            <span className="theme-button">
                                linkedin
                            </span>
                        </a>
                    </Fade>
                    <Fade bottom>
                        <a href="https://github.com/teelau" target="_blank" rel="noopener noreferrer">
                            <span className="theme-button">
                                github
                            </span>
                        </a>
                    </Fade>
                    <Fade bottom>
                        <a href="mailto:tommylau94@gmail.com">
                            <span className="theme-button">
                                contact
                            </span>
                        </a>
                    </Fade>
                </div>
            </div>
        );
    }
}

export default Body;