import React, { Component } from 'react';
import './landing.css';
import { Parallax } from 'react-scroll-parallax';
import VancouverMountains from './vancouver_skyline_vec.svg';

const ParallaxImage = () => (
    <Parallax
        className="vancouver-parallax"
        offsetYMax={0}
        offsetYMin={-50}
        offsetXMax={-25}
        offsetXMin={25}
        slowerScrollRate
    >
        <img src={VancouverMountains} alt="Could not display VANCOUVER_ASSET properly"/>
    </Parallax>
);
  
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

                {ParallaxImage()}

                
            </div>
            
        );
    }
}

export default Landing;