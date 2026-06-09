/* ============================================
   SIMPLE COMPONENT #1: NAVBAR
   
   EXPLANATION FOR BEGINNERS:
   - This is a functional component (just a function)
   - It uses 'useState' to manage menu visibility
   - onClick handlers navigate to sections
   - Very beginner-friendly React code
   ============================================ */

import React, { useState } from 'react';

function Navbar() {
  // State: is the mobile menu open or closed?
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to scroll to a specific section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="navbar">
      <h1>Spencer Blackler - Web Developer</h1>
      
      <ul className="nav-links">
        <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
        <li><a onClick={() => scrollToSection('about')}>About</a></li>
        <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
        <li><a onClick={() => scrollToSection('3d-scene')}>3D Scene</a></li>
        <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
