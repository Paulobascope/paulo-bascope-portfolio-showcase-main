
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Qualifications from '../components/Qualifications';
import Experience from '../components/Experience';
import Activities from '../components/Activities';
import HobbiesProjects from '../components/HobbiesProjects';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen calm-gradient-bg floating-shapes text-white relative overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Education />
      <Qualifications />
      <Experience />
      <Activities />
      <HobbiesProjects />
      <Contact />
    </div>
  );
};

export default Index;
