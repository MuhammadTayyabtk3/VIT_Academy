import React from 'react';
import Hero from './Hero';
import About from './About';
import Courses from './Courses';
import Facilities from './Facilities';
import CTA from './CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Facilities />
      <CTA />
    </>
  );
}
