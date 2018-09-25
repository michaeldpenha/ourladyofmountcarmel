import React, { Component } from 'react'
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import fetchRefSidebarData from '../../actions/refData';
// const HomeComponent =  (props) => (
//    <h2>home</h2>
// )



class AboutComponent extends Component {
  componentWillMount() {
  //  this.props.fetchRefData();
  }
  render() {
    return (
      <div>
         About Component
      </div>
    )
  }
}
// AboutComponent.propTypes = {
//   items : PropTypes.array.isRequired,
//   fetchRefData : PropTypes.func.isRequired
// }

const mapStateToProps = (state) => ({
  items : state.data.items
})

export default withRouter(connect(mapStateToProps,{fetchRefSidebarData})(AboutComponent));