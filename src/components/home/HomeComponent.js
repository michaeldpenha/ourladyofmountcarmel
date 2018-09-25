import React, { Component } from 'react'
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import fetchRefSidebarData from '../../actions/refData';
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
         Home Component
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