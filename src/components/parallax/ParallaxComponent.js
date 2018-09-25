import React, { Component } from 'react'
import './Parallax.css'

class ParallaxComponent extends Component {
  componentWillMount() {
  }
  render() {
    return (
        <div class={"parallax "+this.props.parallaxClass}></div>
    )
  }
}

export default ParallaxComponent;