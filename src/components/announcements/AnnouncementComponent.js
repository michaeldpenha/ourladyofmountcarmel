import React, { Component } from 'react';
import PageBgComponent from '../pageBg/PageBgComponent';

class AnnouncementComponent extends Component {
  render() {
    return (
      <div>
        <PageBgComponent className="bgClass" bgImg="images/brow1.jpg" imgText="Announcements" textCls="centerImg"/>
      </div>
    )
  }
}

export default AnnouncementComponent;