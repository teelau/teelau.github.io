import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import videoTeslaGrey from './assets_video/tesla-grey-outline.mp4'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Banner">
        </div>
        <header className="App-header">
          <video muted
                 loop
                autoPlay
                 src={videoTeslaGrey}
                >
            <source src={videoTeslaGrey} type="video/mp4"/>browser not supported
          </video>
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
        </header>
      </div>
    );
  }
}

export default App;
