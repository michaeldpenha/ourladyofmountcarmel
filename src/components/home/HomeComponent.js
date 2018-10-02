import React, { Component } from 'react'
import ParallaxComponent from '../parallax/ParallaxComponent';
import './HomeComponent.css';
import TestimonalComponent from '../testimonals/TestimonalComponent';
import SectionHeaderComponent from '../sectionHeader/SectionHeaderComponent';
import ServicesComponent from '../services/ServicesComponent';

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <ParallaxComponent parallaxClass="parallaxImage"></ParallaxComponent>
        <div class="row section">
          <SectionHeaderComponent sectionHeaderStyle="testimonal" title="Testimonal"></SectionHeaderComponent>
          <TestimonalComponent ></TestimonalComponent>
        </div>
        <div className="row section">
          <SectionHeaderComponent sectionHeaderStyle="testimonal" title="Services"></SectionHeaderComponent>
          <ServicesComponent></ServicesComponent>
        </div>
      </div>
    )
  }
}
export default HomeComponent;