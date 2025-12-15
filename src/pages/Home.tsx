import React from 'react';
import HomeHero from '../components/home/HomeHero';
import PainSection from '../components/home/PainSection';
import SolutionSection from '../components/home/SolutionSection';
import WhyChooseMe from '../components/home/WhyChooseMe';
import FeaturedProject from '../components/home/FeaturedProject';
import DigitalArchitect from '../components/home/DigitalArchitect';
import Testimonials from '../components/home/Testimonials';
import FinalCTA from '../components/home/FinalCTA';

const Home = () => {
  return (
    <>
      <HomeHero />
      <PainSection />
      <SolutionSection />
      <WhyChooseMe />
      <FeaturedProject />
      <DigitalArchitect />
      <Testimonials />
      <FinalCTA />
    </>
  );
};

export default Home;