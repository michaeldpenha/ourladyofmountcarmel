import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import fetchRefData from '../../actions/refData';
import './NavBar.css';
// 9D8253 E5CEA4 46220E
// const HomeComponent =  (props) => (
//    <h2>home</h2>
// )



class NavBarComponent extends Component {
    componentWillMount() {
        this.props.fetchRefData();
    }
    render() {
        return (
            <div className="sidebarWrapper">
                <nav id="sidebar" ref={(node) => {this.sidebarNode = node}}>
                    <div className="sidebar-header">
                    </div>
                    <ul className="list-unstyled components">
                        <li className="active">
                            <a href="#homeSubmenu"className="">
                            <i className ="fa fa-home" aria-hidden="true"></i>
                            <span class="menu-label">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i className="fa fa-briefcase" aria-hidden="true"></i>
                            <span class="menu-label">About</span>
                            </a>
                        </li>
                        <li>
                            <a href="#pageSubmenu" className="">
                                <i className="fa fa-calendar"></i>
                                <span class="menu-label">Events</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="">
                                <i className="fa fa-phone"></i>
                                <span class="menu-label">Contact Us</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <button type="button" id="sidebarCollapse" ref={node => this.menuIcon = node} onClick={() => {this.toggleNavbar()}} className="navbar-btn btn-align handIcon">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        )
    }
    toggleNavbar () {
        let sideEL = this.sidebarNode;
        let menuEL = this.menuIcon;
        sideEL.classList.contains('active') ? sideEL.classList.remove('active') : sideEL.classList.add('active');
        menuEL.classList.contains('active') ? menuEL.classList.remove('active') : menuEL.classList.add('active');
    }
}
NavBarComponent.propTypes = {
    items: PropTypes.array.isRequired,
    fetchRefData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    items: state.data.items
})

export default withRouter(connect(mapStateToProps, { fetchRefData })(NavBarComponent));