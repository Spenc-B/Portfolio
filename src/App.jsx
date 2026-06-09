/* ============================================
   MAIN APP COMPONENT
   
   This is where everything comes together!
   
   STRUCTURE:
   1. UI Components (navigation, text sections)
   2. 3D Components (interactive 3D scene)
   3. Easy to understand, well-commented
   ============================================ */

import React from 'react';
import Navbar from './components/ui/Navbar';
import HeroSection from './components/ui/HeroSection';
import AboutSection from './components/ui/AboutSection';
import SkillsSection from './components/ui/SkillsSection';
import ThreeDScene from './components/3d/ThreeDScene';
import ContactSection from './components/ui/ContactSection';
import Footer from './components/ui/Footer';

function App() {
  return (
    <div className="app">
      {/* ========== UI COMPONENTS ========== */}
      
      {/* Navigation - basic React component */}
      <Navbar />
      
      {/* Hero section - introduces the portfolio */}
      <HeroSection />
      
      {/* About section - simple content display */}
      <AboutSection />
      
      {/* Skills section - demonstrates .map() pattern */}
      <SkillsSection />

      {/* ========== 3D COMPONENT ========== */}
      
      {/* Interactive 3D scene with Three.js */}
      <ThreeDScene />

      {/* ========== MORE UI COMPONENTS ========== */}
      
      {/* Contact form - form handling with useState */}
      <ContactSection />
      
      {/* Footer - simple footer component */}
      <Footer />
    </div>
  );
}

export default App;
