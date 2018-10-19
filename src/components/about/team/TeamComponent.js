import React, { Component } from 'react'
import './Team.css'
import TeamCardComponent from '../../teamcard/TeamCardComponent';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import fetchAboutUsData from "../../../actions/refAboutData";
import {
  FETCH_REF_ABOUT_TEAM_DATA
} from '../../../actions/types';

class TeamComponent extends Component {
  componentWillMount() {
    this.props.fetchAboutUsData(FETCH_REF_ABOUT_TEAM_DATA);
  }
  render() {
    let data = this.props.items ? this.props.items : [];
    return (
      <div className="container">
        <TeamCardComponent teamData={data}></TeamCardComponent>
      </div>
    )
  }
}
TeamComponent.propTypes = {
  fetchAboutUsData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  items: state.data.team
})
export default withRouter(connect(mapStateToProps, { fetchAboutUsData })(TeamComponent));