import React, { Component } from 'react'
import Router from '../../router/router';
import './ContentComponent.css';
class ParallaxComponent extends Component {
    componentWillMount() {
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