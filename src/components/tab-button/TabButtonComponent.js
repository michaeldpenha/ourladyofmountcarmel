import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import './TabButton.css';
class TabButtonComponent extends Component {
    render() {
        return (
            <div className="container flex-layout">
                <div className={this.tabsClass(`${this.props.baseUrl}/our-parish`)} href="our-parish" onClick={(e) => this.buttonClick(e)}><div className="paddingTop10 paddingBottom10"><img className="height10vh" src={this.populateImage(`${this.props.baseUrl}/our-parish`,'parish')} aria-hidden="true" /><p className="marginBottom0 disbalePColor">Our Parish</p></div></div>
                <div className={this.tabsClass(`${this.props.baseUrl}/our-team`)} href="our-team" onClick={(e) => this.buttonClick(e)}><div className="paddingTop10 paddingBottom10"><img className="height10vh" src={this.populateImage(`${this.props.baseUrl}/our-team`,'team')} aria-hidden="true" /><p className="marginBottom0 disbalePColor">Our Team</p></div></div>
                <div className={this.tabsClass(`${this.props.baseUrl}/our-history`)} href="our-history" onClick={(e) => this.buttonClick(e)}><div className="paddingTop10 paddingBottom10"><img className="height10vh" src={this.populateImage(`${this.props.baseUrl}/our-history`,'history')} aria-hidden="true" /><p className="marginBottom0 disbalePColor">Our History</p></div></div>
            </div>
        )
    }
    buttonClick(el) {
        this.removeActiveTabClass();
        el.currentTarget ? el.currentTarget.classList.add('tabActive') : '';
        this.navigateToUrl(el);
    }
    removeActiveTabClass() {
        let prevEl = document.querySelector('.tabActive');
        prevEl ? prevEl.classList.remove('tabActive') : '';
    }
    navigateToUrl(el) {
        let hist = this.props.history;
        hist.push(`${this.props.baseUrl}/${el.currentTarget.getAttribute('href')}`);
    }
    tabsClass(el) {
        const prefix = 'flex1 textAlignCenter nonActiveTab handIcon';
        return (window.location.hash.indexOf(el) > -1) ? prefix + ' tabActive' : prefix;
        
    }
    populateImage(el,img){
        return (window.location.hash.indexOf(el) > -1) ? `images/${img}_selected.png` : `images/${img}.png`;
    }
}
export default TabButtonComponent;      