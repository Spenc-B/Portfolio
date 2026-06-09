/* ============================================
   SIMPLE COMPONENT #1: NAVBAR
   
   EXPLANATION FOR BEGINNERS:
   - This is a functional component (just a function)
   - It uses 'useState' to manage menu visibility
   - onClick handlers navigate to sections
   - Very beginner-friendly React code
   ============================================ */

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  // State: is the mobile menu open or closed?
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Function to scroll to a specific section
  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      sessionStorage.setItem('scrollTarget', id);
      navigate('/');
      return;
    }

    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="navbar">
      <h1>Spencer Blackler - Web Developer</h1>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/previous-roles">Previous Roles</Link></li>
        <li><button type="button" className="nav-link-btn" onClick={() => scrollToSection('about')}>About</button></li>
        <li><button type="button" className="nav-link-btn" onClick={() => scrollToSection('skills')}>Skills</button></li>
        <li><button type="button" className="nav-link-btn" onClick={() => scrollToSection('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
