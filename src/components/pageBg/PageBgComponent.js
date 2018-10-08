import React, { Component } from 'react'
import "./PageBg.css";
class PageBgComponent extends Component {
  render() {
    return (
      <div>
          <img src = {this.props.bgImg} className={this.props.className}/>
          <div className={this.props.textCls}>{this.props.imgText}</div>
      </div>
    )
  }
}

export default PageBgComponent;