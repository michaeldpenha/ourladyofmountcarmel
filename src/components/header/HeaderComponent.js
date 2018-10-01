import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import fetchRefSidebarData from '../../actions/refData';
import { NavLink, Link } from 'react-router-dom'
import './Header.css';
// 9D8253 E5CEA4 46220E
// const HomeComponent =  (props) => (
//    <h2>home</h2>
// )



class HeaderComponent extends Component {
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
        // const menuItems = this.props.items.menu ? this.props.items.menu.map((item, i) => (
        //     <li key={i} className={this.activeRoute === item.href ? 'active' : ''}>
        //         <Link  to={item.href} onClick={() => this.navigateTrigger(item.href)}>
        //             {/* <i className={'fa ' + item.icon} aria-hidden="true"></i> */}
        //             <span class="menu-label">{item.title}</span>
        //         </Link>
        //     </li>
        // )) : [];
        return (
            <nav class="navbar navbar-expand-sm sticky-top navbar-dark bg-info py-2">
                <div class="container">
                    <a class="navbar-brand" href="#">Brand</a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbar1">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
HeaderComponent.propTypes = {
    items: PropTypes.object.isRequired,
    fetchRefSidebarData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    items: state.data.sidebar
})

export default withRouter(connect(mapStateToProps, { fetchRefSidebarData })(HeaderComponent));