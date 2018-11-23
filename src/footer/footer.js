import React, { Component } from 'react';
import './footer.css';
import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types'

const ParallaxImage2 = (e) => (
    <Parallax
        className="parallax-container-footer"
        offsetXMax={-25}
        offsetXMin={5}
        offsetYMax={10}
        offsetYMin={10}
        slowerScrollRate
    >
        <img className="bgimg-footer-1" src={require('./mountains.svg')} alt=""></img>
        {/* <div className="bgimg-footer-1"
            style={{"height": 300}}>
        </div> */}
    </Parallax>
);

const ParallaxImage3 = (e) => (
    <Parallax
        className="parallax-container-footer"
        offsetXMax={0}
        offsetXMin={-15}
        slowerScrollRate
    >
        <img className="bgimg-footer-2" src={require('./mountains.svg')} alt=""></img>
        {/* <div className="bgimg-footer-2"
            style={{"height": 300}}>
        </div> */}
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