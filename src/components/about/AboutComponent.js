import React, { Component } from 'react'


import "./About.css";
import PageBgComponent from '../pageBg/PageBgComponent';

class AboutComponent extends Component {
  componentWillMount() {
  }
  render() {
    return (
      <div>
        <PageBgComponent className="bgClass" bgImg="images/brow1.jpg" imgText="About us" textCls="centerImg"/>
      </div>
    )
  }
}

export default AboutComponent;