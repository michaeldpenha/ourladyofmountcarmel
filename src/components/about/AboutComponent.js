import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom';

import "./About.css";
import PageBgComponent from '../pageBg/PageBgComponent';

class AboutComponent extends Component {
  componentWillMount() {
  }
  render() {
    return (
      <div>
        <PageBgComponent className="bgClass" bgImg="images/brow1.jpg" imgText="About us" textCls="centerImg" />
        {/* <NavLink to='/about/front'>front</NavLink>
        <Route path='/about/:id' render={()=>{return <div>ichael</div>}}/> */}
      </div>
    )
  }
}

export default AboutComponent;

