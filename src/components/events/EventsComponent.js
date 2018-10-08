import React, { Component } from 'react'
import PageBgComponent from '../pageBg/PageBgComponent';

class EventsComponent extends Component {
  render() {
    return (
      <div>
         <PageBgComponent className="bgClass" bgImg="images/brow1.jpg" imgText="Events" textCls="centerImg"/>
      </div>
    )
  }
}
export default EventsComponent;