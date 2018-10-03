import React, { Component } from 'react';
import fetchServicesData from '../../actions/refServicesData';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

import './services.css';


class ServicesComponent extends Component {
    componentWillMount() {
        this.props.fetchServicesData();
    }
    render() {
        const services = this.props.items ? this.props.items.map((item, i) => (
            <table className="tableClass width100 marginTop10 textTransformUpperCase" key={"table" + i}>
                <thead>
                    <tr className="tableHeader">
                        <th colSpan="2" className="padding_left_15">{item.title}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        item.services ? item.services.map((data, ind) => (
                            <tr className="height_40" key={"tr" + ind}>
                                <td className="tableTdClass width_40_percent padding_left_15 cellClass">{data.key}</td>
                                <td className="tableTdClass padding_left_15 cellClass">{data.value}</td>
                            </tr>
                        )) : []
                    }
                </tbody>
            </table>
        )) : [];
        return (
            <div className="container">
                <div className="row">
                    <div class="col-sm-12 marginTop40">
                        {services}
                    </div>
                </div>
            </div>
        )
    }
}
ServicesComponent.propTypes = {
    items: PropTypes.array.isRequired,
    fetchServicesData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    items: state.data.services
})

export default withRouter(connect(mapStateToProps, { fetchServicesData })(ServicesComponent));