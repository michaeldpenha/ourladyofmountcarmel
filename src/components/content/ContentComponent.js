import React, { Component } from 'react'
import Router from '../../router/router';
import './ContentComponent.css';
class ParallaxComponent extends Component {
    componentDidUpdate() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    }
    render() {
        return (
            <div className="content" >
                <Router />
            </div>
        )
    }
}

export default ParallaxComponent;