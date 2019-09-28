import React, { Component } from 'react';
import logo from './logo.svg';
import Webcam from 'react-webcam';
import './App.css';

const WebcamComponent = () => <Webcam />;

class App extends React.Component {
  render() {
    return (
      <div>
          <Webcam />
          <button>Capture photo</button>
      </div>
    );
  }
}

export default App;

