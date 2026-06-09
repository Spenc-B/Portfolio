/* ============================================
   SIMPLE COMPONENT #2: HERO SECTION
   
   EXPLANATION FOR BEGINNERS:
   - A React component is just a function that returns HTML
   - This component shows the main landing section
   - Very straightforward and easy to customize
   - No state management needed here
   ============================================ */

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import VoxelWebDevelopment from '../3d/VoxelWebDevelopment';

function HeroSection() {
  // Simple function to handle button click
  const handleCTAClick = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-3d-bg" aria-hidden="true">
        <Canvas
          className="hero-3d-canvas"
          camera={{ position: [0, 0, 5.5], fov: 45 }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 5.5]} />
          <ambientLight intensity={0.85} />
          <directionalLight position={[3, 4, 5]} intensity={1.5} color="#f59e0b" />
          <directionalLight position={[-4, -2, 4]} intensity={1.2} color="#22d3ee" />
          <VoxelWebDevelopment />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.7} />
        </Canvas>
      </div>

      <div className="hero-content">
      <h1>Spencer Blackler</h1>
      <p>
        Seasoned Web Developer with 8+ years of experience building and managing websites and eCommerce platforms
      </p>
      <button className="cta-button" onClick={handleCTAClick}>
        Get In Touch
      </button>
      </div>
    </section>
  );
}

export default HeroSection;
