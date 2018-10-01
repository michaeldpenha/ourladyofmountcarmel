import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import fetchRefSidebarData from '../../actions/refData';
import { NavLink,Link } from 'react-router-dom'
import './NavBar.css';
// 9D8253 E5CEA4 46220E
// const HomeComponent =  (props) => (
//    <h2>home</h2>
// )



class NavBarComponent extends Component {
    componentWillMount() {
        this.props.fetchRefSidebarData();
    }
    componentDidMount() {
        //this.activeRoute = this.props.location.pathname;
    }
    shouldComponentUpdate() {
        this.activeRoute = this.props.location.pathname;
        return true
    }
    render() {
        const menuItems = this.props.items.menu ? this.props.items.menu.map((item, i) => (
            <li key={i} className={this.activeRoute === item.href ? 'active' : ''}>
                <Link  to={item.href} onClick={() => this.navigateTrigger(item.href)}>
                    {/* <i className={'fa ' + item.icon} aria-hidden="true"></i> */}
                    <span class="menu-label">{item.title}</span>
                </Link>
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
    fetchRefSidebarData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    items: state.data.sidebar
})

export default withRouter(connect(mapStateToProps, { fetchRefSidebarData })(NavBarComponent));