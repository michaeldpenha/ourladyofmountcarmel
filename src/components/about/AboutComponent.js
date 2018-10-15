import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom';

import "./About.css";
import PageBgComponent from '../pageBg/PageBgComponent';
import TabButtonComponent from '../tab-button/TabButtonComponent';

class AboutComponent extends Component {
  componentWillMount() {
  }
  render() {
    let { match , history } = this.props;
    return (
      <div>
        <PageBgComponent className="bgClass" bgImg="images/brow1.jpg" imgText="About us" textCls="centerImg" />
        {/* <NavLink to='/about/front'>front</NavLink>
        <Route path='/about/:id' render={()=>{return <div>ichael</div>}}/> */}
        <div className="row section">
          <TabButtonComponent baseUrl={`${match.path}`} history = {history}></TabButtonComponent>
          {/* <div className="container flex-layout">
            <button className="flex1">Our Parish</button>
            <button className="flex1">Our Team</button>
            <button className="flex1">Our History</button>
          </div> */}
        </div>
        <Route path={`${match.path}/our-parish`} render={() => { return <div>michael</div> }}></Route>
        <Route path={`${match.path}/our-team`} render={() => { return <div>Team</div> }}></Route>
        <Route path={`${match.path}/our-history`} render={() => { return <div>History</div> }}></Route>
      </div>
    )
  }
}

export default AboutComponent;

