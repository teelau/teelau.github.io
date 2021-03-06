import React, { Component } from 'react';
import './App.css';
import Landing from './landing/landing';
import Footer from './footer/footer';
import Body from './body/body';
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
  
  render() {
    return (
      <ParallaxProvider>
        <div className="Main">
          <Landing></Landing>
          <Body></Body>
          <Footer></Footer>
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
