import React, { useEffect } from 'react';
import HeroSection from '../components/ui/HeroSection';
import AboutSection from '../components/ui/AboutSection';
import SkillsSection from '../components/ui/SkillsSection';
import ThreeDScene from '../components/3d/ThreeDScene';
import ContactSection from '../components/ui/ContactSection';

function HomePage() {
  useEffect(() => {
    const scrollTarget = sessionStorage.getItem('scrollTarget');

    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);
      element?.scrollIntoView({ behavior: 'smooth' });
      sessionStorage.removeItem('scrollTarget');
    }
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ThreeDScene />
      <ContactSection />
    </>
  );
}

export default HomePage;
