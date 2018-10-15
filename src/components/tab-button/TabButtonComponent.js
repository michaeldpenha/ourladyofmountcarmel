import React, { Component } from 'react'
import { browserHistory } from 'react-router';
class TabButtonComponent extends Component {
    render() {
        return (
            <div className="container flex-layout">
                <button className="flex1" href="our-parish" onClick={(e) => this.buttonClick(e)}>Our Parish</button>
                <button className="flex1" href="our-team" onClick={(e) => this.buttonClick(e)}>Our Team</button>
                <button className="flex1" href="our-history" onClick={(e) => this.buttonClick(e)}>Our History</button>
            </div>
        )
    }
    buttonClick(el) {
        let hist  = this.props.history;
        hist.push(`${this.props.baseUrl}/${el.currentTarget.getAttribute('href')}`);
    }
}
export default TabButtonComponent;