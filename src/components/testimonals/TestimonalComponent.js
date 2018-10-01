import React, { Component } from 'react'
import './Testimonal.css';

class TestimonalComponent extends Component {
    componentWillMount() {
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <div class="testimonal-olmc ">
                            <div class="testimonal-profile-img">
                                <img class="img-responsive" src="/images/profile.png" alt="profile" />
                            </div>
                            <div class="testimonal-info clearfix">
                                <h3 class="testimonal-name">Father</h3>
                                <span class="testimonal-priest">Parish Priest</span>
                                <div class="testimonal-description">
                                    <i class="fa fa-quote-left"></i>
                                    lsdjfldk lkds flkdj ldksjf ldksjf ldskjflsd lj flkjd flkjdfk ldjf ldkjf ldkfj ldskjf ldksldsjflkdjf ldkflldfl dlfk dl
                                    </div>
                            </div>
                        </div>
                    </div>
                </div></div>
        )
    }
}

export default TestimonalComponent;