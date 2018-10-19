import React, { Component } from 'react'
import './History.css';
import ParagraphWIthImageComponent from '../../template/ParagraphWIthImage/ParagraphWIthImageComponent';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import fetchAboutUsData from "../../../actions/refAboutData";
import {
  FETCH_REF_ABOUT_HISTORY_DATA
} from '../../../actions/types';
class HistoryComponent extends Component {
  componentWillMount() {
    this.props.fetchAboutUsData(FETCH_REF_ABOUT_HISTORY_DATA);
  }
  render() {
    const data = this.props.items;
    return (
      <ParagraphWIthImageComponent componentData = {data}> </ParagraphWIthImageComponent>
    )
  }

}
HistoryComponent.propTypes = {
  items: PropTypes.array.isRequired,
  fetchAboutUsData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  items: state.data.history
})
export default withRouter(connect(mapStateToProps, { fetchAboutUsData })(HistoryComponent));