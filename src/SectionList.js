import React, { Component } from 'react';
import ServicesSection  from './ServicesSection.js';
import PicturesSection  from './PicturesSection.js';
import ContentSection   from './ContentSection.js';
import SoftwareSection  from './SoftwareSection.js';
import TestimonialsSection from './TestimonialsSection.js';
import FormSection from './FormSection.js';

class SectionList extends Component {
  render() {
    return (
      <div >
        <ServicesSection />
        <PicturesSection />
        <ContentSection />
        <SoftwareSection />
        <TestimonialsSection />
        <FormSection />
      </div>
    );
  }
}

export default SectionList;
