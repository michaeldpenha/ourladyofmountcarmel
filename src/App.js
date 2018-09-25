import React, { Component } from 'react';
import './App.css';
import Router from './router/router';
import NavBarComponent from './components/navbar/NavBarComponent';
import ContentComponent from './components/content/ContentComponent';

class App extends Component {

  render() {
    return <div className="wrapper" ref={node => this.wrapperNode = node}>
      <NavBarComponent addClassToParent={() => this.bindActiveClass()} />
      <ContentComponent />
    </div>
  }
  bindActiveClass() {
    let el = this.wrapperNode;
    !el.classList.contains('active') ? el.classList.add('active') : el.classList.remove('active');
  }
}

export default App;
