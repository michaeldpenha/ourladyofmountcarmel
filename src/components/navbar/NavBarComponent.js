import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import fetchRefSidebarData from '../../actions/refData';
import { NavLink } from 'react-router-dom'
import './NavBar.css';
// 9D8253 E5CEA4 46220E
// const HomeComponent =  (props) => (
//    <h2>home</h2>
// )



class NavBarComponent extends Component {
    componentWillMount() {
        this.props.fetchRefSidebarData();
        this.activeRoute = this.props.location.pathname;
    }
    render() {
        const menuItems = this.props.items.menu ? this.props.items.menu.map((item, i) => (
            <li key={i} className={this.activeRoute === item.href ? 'active' : ''}>
                <NavLink to={item.href} onClick={() => this.navigateTrigger(item.href)}>
                    <i className={'fa ' + item.icon} aria-hidden="true"></i>
                    <span class="menu-label">{item.title}</span>
                </NavLink>
            </li>
        )) : [];
        return (
            <div className="sidebarWrapper">
                <nav id="sidebar" ref={(node) => { this.sidebarNode = node }}>
                    <div className="sidebar-header">
                    </div>
                    <ul className="list-unstyled components">
                        {/* <li className={this.activeRoute === '/' ? 'active' : ''}>
                            <NavLink to="/" onClick={() => this.navigateTrigger('/')}>
                                <i className="fa fa-home" aria-hidden="true"></i>
                                <span class="menu-label">Home</span>
                            </NavLink>
                        </li>
                        <li className={this.activeRoute === '/about' ? 'active' : ''} >
                            <NavLink to="/about" onClick={() => this.navigateTrigger('/about')}>
                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                                <span class="menu-label">About</span>
                            </NavLink>
                        </li>
                        <li className={this.activeRoute === '/events' ? 'active' : ''}>
                            <NavLink to="/events" className="" onClick={() => this.navigateTrigger('/events')}>
                                <i className="fa fa-calendar"></i>
                                <span class="menu-label">Events</span>
                            </NavLink>
                        </li>
                        <li className={this.activeRoute === '/contactus' ? 'active' : ''}>
                            <NavLink to="/contactus" onClick={() => this.navigateTrigger('/contactus')}>
                                <i className="fa fa-phone"></i>
                                <span class="menu-label">Contact Us</span>
                            </NavLink>
                        </li> */}
                        {menuItems}
                    </ul>
                </nav>
                <button type="button" id="sidebarCollapse" ref={node => this.menuIcon = node} onClick={() => { this.toggleNavbar() }} className="navbar-btn btn-align handIcon">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        )
    }
    toggleNavbar() {
        let sideEL = this.sidebarNode;
        let menuEL = this.menuIcon;
        sideEL.classList.contains('active') ? sideEL.classList.remove('active') : sideEL.classList.add('active');
        menuEL.classList.contains('active') ? menuEL.classList.remove('active') : menuEL.classList.add('active');
    }
    navigateTrigger(route) {
        this.activeRoute = route;
    }
}
NavBarComponent.propTypes = {
    items: PropTypes.object.isRequired,
    fetchRefSidebarData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    items: state.data.sidebar
})

export default withRouter(connect(mapStateToProps, { fetchRefSidebarData })(NavBarComponent));