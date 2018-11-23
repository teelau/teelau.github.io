import React, { Component } from 'react';
import './landing.css';
import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types'

const ParallaxImage = (e) => (
    <Parallax
        className="parallax-container"
        offsetXMax={17}
        offsetXMin={-7}
        slowerScrollRate
    >
        <div className="bgimg"
            style={{"height": e.height}}>
        </div>
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
                    <h3>tommy lau</h3>
                </div>
                    {ParallaxImage(this.state)} 
            </div>
        );
    }
}

export default Landing;