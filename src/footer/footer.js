import React, { Component } from 'react';
import './footer.css';
import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types'

const ParallaxImage2 = (e) => (
    <Parallax
        className="parallax-container-footer"
        offsetXMax={-15}
        offsetXMin={15}
        offsetYMax={20}
        offsetYMin={20}
        slowerScrollRate
    >
        <img className="bgimg-footer-1" src={require('./mountains.svg')} alt=""></img>
    </Parallax>
);

const ParallaxImage3 = (e) => (
    <Parallax
        className="parallax-container-footer"
        offsetXMax={-90}
        offsetXMin={-100}
        slowerScrollRate
    >
        <img className="bgimg-footer-2" src={require('./mountains.svg')} alt=""></img>
    </Parallax>
);

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: props.height,
        };
    }

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
            <div className="footer-container">
                {ParallaxImage2(this.state)}
                {ParallaxImage3(this.state)}
            </div>
        );
    }
}

export default Footer;