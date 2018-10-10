import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import fetchRefSidebarData from '../../actions/refSidebarData';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';
// 9D8253 E5CEA4 46220E
// const HomeComponent =  (props) => (
//    <h2>home</h2>
// )



class NavBarComponent extends Component {
    componentWillMount() {
        this.props.fetchRefSidebarData();
    }
    fetchActiveUrl(url) {
        return url.href == this.props.location.pathname;
    }
    componentDidMount() {
        //this.props.parentEl;
    }
    menuClick() {
        this.props && this.props.navigationTrigger ?this.props.navigationTrigger : '';
    }
    render() {
        const menuItems = this.props.items.menu ? this.props.items.menu.map((item, i) => (
            <li key={i} className={this.fetchActiveUrl(item) ? 'active' : ''} onClick={() => this.menuClick()}>
                <NavLink to={item.href} >
                    {/* <i className={'fa ' + item.icon} aria-hidden="true"></i> */}
                    <span class="menu-label">{item.title}</span>
                </NavLink>
            </li>
        )) : [];
        return (
            <ul className="list-unstyled margin0 components">
                {menuItems}
            </ul>
        )
    }
}
NavBarComponent.propTypes = {
    items: PropTypes.object.isRequired,
    fetchRefSidebarData: PropTypes.func.isRequired,
    navigationTrigger: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    items: state.data.sidebar
})

export default withRouter(connect(mapStateToProps, { fetchRefSidebarData })(NavBarComponent));