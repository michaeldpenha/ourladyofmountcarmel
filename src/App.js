import React, { Component } from 'react';
import './App.css';
import Router from './router/router';
import NavBarComponent from './components/navbar/NavBarComponent';
class App extends Component {

  render() {
    return <div className="wrapper">
              <NavBarComponent />
              <div className="content">
                <Router />
              </div>
            </div>
  }
}

export default App;
