import React, { Component } from 'react'
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import fetchRefData from '../../actions/refData';
// const HomeComponent =  (props) => (
//    <h2>home</h2>
// )



class HomeComponent extends Component {
  componentWillMount() {
    this.props.fetchRefData();
  }
  render() {
    const items = this.props.items.map((item,i) => (
      <div key = {i}>{item.itemName}</div>
    ))
    return (
      <div>
          {items}
      </div>
    )
  }
}
HomeComponent.propTypes = {
  items : PropTypes.array.isRequired,
  fetchRefData : PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  items : state.data.items
})

export default withRouter(connect(mapStateToProps,{fetchRefData})(HomeComponent));