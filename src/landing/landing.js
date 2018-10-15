import React, { Component } from 'react';
import './landing.css';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: props.height,
            scrollTo: props.height
        };
    }
    updateHeight() {
        this.setState({
            height: window.innerHeight+'px',
            scrollTo: window.innerHeight
        });
    }
    async componentDidMount() {
        window.addEventListener("resize", this.updateHeight.bind(this));
        this.updateHeight();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateHeight.bind(this));
    }

    render() {
        return (
            <div
                className="landing-container" 
                style={{"height": this.state.height}}
            >
            <div className="landing-text">
                <h3>Tommy Lau</h3>
            </div>
                
            </div>
            
        );
    }
}

export default Landing;