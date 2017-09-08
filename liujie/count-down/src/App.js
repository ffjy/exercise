import React, { Component } from 'react';
import './App.css';
import CountDown from './CountDown'

class App extends Component {
  render() {
    return (
      <div className="App">
          <CountDown maxMinuter={0} />
      </div>
    );
  }
}

export default App;
