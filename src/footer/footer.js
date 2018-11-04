import React, { Component } from 'react';
import './footer.css';
import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types'

const ParallaxImage2 = (e) => (
    <Parallax
        className="parallax-container-footer"
        offsetXMax={-15}
        offsetXMin={15}
        slowerScrollRate
    >
        <div className="bgimg-footer">
        </div>
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
                <div>Hello</div>
                
                <div>
                {ParallaxImage2(this.state)}
                </div>

            </div>
        );
    }
}

export default Footer;