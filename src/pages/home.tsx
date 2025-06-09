import React from 'react';
import { HeroSection } from '../components/hero-section';
import { QuoteCarousel } from '../components/quote-carousel';
import { FeaturedEvents } from '../components/featured-events';
import { MissionVision } from '../components/mission-vision';
import { StatsSection } from '../components/stats-section';
import { Testimonials } from '../components/testimonials';
import { Newsletter } from '../components/newsletter';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <QuoteCarousel />
      <MissionVision />
      <FeaturedEvents />
      <StatsSection />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default HomePage;