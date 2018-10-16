import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom';

import "./About.css";
import PageBgComponent from '../pageBg/PageBgComponent';
import TabButtonComponent from '../tab-button/TabButtonComponent';
import ParishComponent from './parish/ParishComponent';
import TeamComponent from './team/TeamComponent';
import HistoryComponent from './history/HistoryComponent';

class AboutComponent extends Component {
  componentWillMount() {
  }
  render() {
    let { match, history } = this.props;
    return (
      <div>
        <PageBgComponent className="bgClass" bgImg="images/brow1.jpg" imgText="About us" textCls="centerImg" />
        {/* <NavLink to='/about/front'>front</NavLink>
        <Route path='/about/:id' render={()=>{return <div>ichael</div>}}/> */}
        <div className="row section">
          <TabButtonComponent baseUrl={`${match.path}`} history={history}></TabButtonComponent>
        </div>
        <div className="row section">
          <Route path={`${match.path}/our-parish`} component={ParishComponent}></Route>
          <Route path={`${match.path}/our-team`} component={TeamComponent}></Route>
          <Route path={`${match.path}/our-history`} component={HistoryComponent}></Route>
        </div>
      </div>
    )
  }
}

export default AboutComponent;

