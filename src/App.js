import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Landing from './landing/landing';
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
  
  render() {
    return (
      <ParallaxProvider>
        <div className="Main">
          <Landing></Landing>
          <div className="Landing">
          </div>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
