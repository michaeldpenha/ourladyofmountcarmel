import React, { Component } from 'react'
import './SectionHeader.css'

class SectionHeaderComponent extends Component {
    componentWillMount() {
    }
    render() {
        return (
            <div class="container">
                <h1 class={this.props.sectionHeaderStyle}> Testimonals </h1>
            </div>
        )
    }
}

export default SectionHeaderComponent;