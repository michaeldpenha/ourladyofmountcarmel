import React, { Component } from 'react'
import './Parish.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import fetchAboutUsData from "../../../actions/refAboutData";
import {
  FETCH_REF_ABOUT_PARISH_DATA
} from '../../../actions/types';
import ParagraphWIthImageComponent from '../../template/ParagraphWIthImage/ParagraphWIthImageComponent';
class ParishComponent extends Component {
  componentWillMount() {
    this.props.fetchAboutUsData(FETCH_REF_ABOUT_PARISH_DATA);
  }
  render() {
    const data = this.props.items;
    return (
      <ParagraphWIthImageComponent componentData = {data}> </ParagraphWIthImageComponent>
    )
  }
}
ParishComponent.propTypes = {
  items: PropTypes.array.isRequired,
  fetchAboutUsData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  items: state.data.parish
})
export default withRouter(connect(mapStateToProps, { fetchAboutUsData })(ParishComponent));