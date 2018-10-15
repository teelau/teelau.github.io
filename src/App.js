import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import videoTeslaGrey from './assets_video/tesla-grey-outline.mp4';
import Landing from './landing/landing';

class App extends Component {
  render() {
    return (
      <div className="Main">
        <Landing></Landing>
        <div className="Landing">
          <video 
            muted
            loop
            autoPlay
            src={videoTeslaGrey}
            className="video"
          >
            <source src={videoTeslaGrey} type="video/mp4"/>browser not supported
          </video>
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
    );
  }
}

export default App;
