import React, { Component } from 'react'
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import fetchRefSidebarData from '../../actions/refData';
import ParallaxComponent from '../parallax/ParallaxComponent';
import './HomeComponent.css';
// const HomeComponent =  (props) => (
//    <h2>home</h2>
// )



class HomeComponent extends Component {
  componentWillMount() {
    //this.props.fetchRefSidebarData();
  }
  render() {
    // const items = this.props.items.map((item,i) => (
    //   <div key = {i}>{item.itemName}</div>
    // ))
    return (
      <div>
         <ParallaxComponent parallaxClass="parallaxImage"></ParallaxComponent>
         <div >
Scroll Up and Down this page to see the parallax scrolling effect.
This div is just here to enable scrolling.
Tip: Try to remove the background-attachment property to remove the scrolling effect.
</div>
      </div>
    )
  }
}
HomeComponent.propTypes = {
  items : PropTypes.object.isRequired,
  fetchRefSidebarData : PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  items : state.data.items
})

export default withRouter(connect(mapStateToProps,{fetchRefSidebarData})(HomeComponent));