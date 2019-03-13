import React, { Component } from 'react';
import './App.css';

import Requests from '../src/components/Requests';
import Header from './components/Header';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
          <div className="container">
            <Requests
              branding="Requests"
            ></Requests>
        </div>
      </div>
    );
  }
}

export default App;
