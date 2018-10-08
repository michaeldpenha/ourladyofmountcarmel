import React, { Component } from 'react'
import PageBgComponent from '../pageBg/PageBgComponent';

class ContactComponent extends Component {
  render() {
    return (
      <div>
         <PageBgComponent className="bgClass" bgImg="images/brow1.jpg" imgText="Contact us" textCls="centerImg"/>
      </div>
    )
  }
}
export default ContactComponent;