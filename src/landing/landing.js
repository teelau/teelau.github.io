import React, { Component } from 'react';
import './landing.css';
import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types'

const ParallaxImage = () => (
    <Parallax
        className="parallax-container"
        offsetXMax={17}
        offsetXMin={-7}
        slowerScrollRate
    >
        <div className="bgimg"></div>
    </Parallax>
);
  
class Landing extends Component {

    static contextTypes = {
        parallaxController: PropTypes.object.isRequired,
    };
    
    componentDidUpdate() {
        this.handleLoad();
    }

    handleLoad = () => {
        // updates cached values after image dimensions have loaded
        this.context.parallaxController.update();
    };

    render() {
        return (
            <div className="landing-container" >
                <div className="landing-text">
                    <h3>tommy lau</h3>
                </div>
                 {ParallaxImage()} 
            </div>
        );
    }
}

export default Landing;