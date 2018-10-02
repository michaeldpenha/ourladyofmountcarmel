import React, { Component } from 'react'
import ParallaxComponent from '../parallax/ParallaxComponent';
import './HomeComponent.css';
import TestimonalComponent from '../testimonals/TestimonalComponent';
import SectionHeaderComponent from '../sectionHeader/SectionHeaderComponent';

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <ParallaxComponent parallaxClass="parallaxImage"></ParallaxComponent>
        <div class="row section">
          <SectionHeaderComponent sectionHeaderStyle="testimonal"></SectionHeaderComponent>
          <TestimonalComponent ></TestimonalComponent>
        </div>
      </div>
    )
  }
}
export default HomeComponent;