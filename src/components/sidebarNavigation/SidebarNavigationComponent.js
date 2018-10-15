import React, { Component } from 'react'
import './SidebarNavigation.css';
import NavBarComponent from '../navbar/NavBarComponent';
import { withRouter } from 'react-router-dom'
class SidebarNavigationComponent extends Component {
    render() {
        return (
            <div className="dropdown left25 zIndex" ref={(node) => { this.dropDownEL = node }} >
                <button className="fa fa-bars menuIcon" ref={node => { this.navEl = node; }} onClick={() => this.navigaionTrigger()}></button>
                <div class="dropdown-content" ref={node => { this.dropDownOverlayEl = node }}>
                    <NavBarComponent navigationTrigger={() => { this.navigaionTrigger()}} />
                </div>
            </div>
        )
    }
    navigaionTrigger() {
        let el = this.navEl;
        (el) ? this.actoinsOnNavEl(el) : '';
    }
    actoinsOnNavEl(el) {
        el.classList.contains('fa-bars') ? this.toggleIcon(el, 'fa-times', 'fa-bars') : el.classList.contains('fa-times') ? this.toggleIcon(el, 'fa-bars', 'fa-times') : '';
        if (el.classList.contains('fa-times')) {
            this.dropDownEL.classList.add('right10rem');
            this.dropDownOverlayEl.classList.add('show');
        } else {
            this.dropDownEL.classList.remove('right10rem');
            this.dropDownOverlayEl.classList.remove('show');
        };
        //el.classList.contains('fa-times') ? el.classList.remove('fa-times') : el.classList.add('fa-bars');
    }
    toggleIcon(el, addIcon, removeIcon) {
        el.classList.add(addIcon);
        el.classList.remove(removeIcon);
    }
}
export default withRouter(SidebarNavigationComponent);