import React, { Component } from 'react';

import fetchTestimonalData from '../../actions/refTestimonalData';
import './Testimonal.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

class TestimonalComponent extends Component {
    componentWillMount() {
        this.props.fetchTestimonalData();
    }
    render() {
        const testimonal = this.props.items ? this.props.items.map((rec, i) => (
            <div key={'testimonal'+i} className="col-md-6 col-xs-12 marginTop100">
                <div class="testimonal-olmc">
                    <div class="testimonal-profile-img">
                        <img class="img-responsive" src={"/images/" + rec.image} alt="profile" />
                    </div>
                    <div class="testimonal-info clearfix">
                        <h3 class="testimonal-name">{rec.name}</h3>
                        <span class="testimonal-priest">{rec.title}</span>
                        <div class="testimonal-description">
                            <i class="fa fa-quote-left"></i>
                            {rec.testimonal}
                        </div>
                    </div>
                </div>
            </div>
        )) : [];
        return (
            <div className="container">
                <div className="row">
                    {testimonal}
                </div>
            </div>
        )
    }
}
TestimonalComponent.propTypes = {
    items: PropTypes.array.isRequired,
    fetchTestimonalData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    items: state.data.testimonal
})

export default withRouter(connect(mapStateToProps, { fetchTestimonalData })(TestimonalComponent));