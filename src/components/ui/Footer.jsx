/* ============================================
   SIMPLE COMPONENT #6: FOOTER
   
   EXPLANATION FOR BEGINNERS:
   - Very simple component, just displaying text
   - No state or complex logic needed
   - Perfect example of a "presentational" component
   ============================================ */

import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="footer-top">
        <h3>Spencer B. | Frontend Developer and Wordpress Engineer</h3>
      </div>

      <div className="footer-meta">
        <p>This portfolio focuses on modern React
          development, immersive 3D interfaces, and performance-first user
          experiences.
        </p>
        <p>
          <strong>Focus:</strong> React Apps, 3D UI, Performance, DX
        </p>
        <p>
          <strong>Stack:</strong> React, Three.js, Vite, Sass, PHP Mailer
        </p>
      </div>

      <div className="footer-links">
        <a href="#contact">Let&apos;s Work Together</a>
        <a href="https://github.com/Spenc-B" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      <p className="footer-bottom">
        &copy; {currentYear} Spencer B. Portfolio. Designed and built with React
        + Three.js.
      </p>
    </footer>
  );
}

export default Footer;
