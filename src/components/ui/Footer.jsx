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
    <footer>
      <p>&copy; {currentYear} My 3D Portfolio. Built with React & Three.js</p>
      <p>Showcasing both simple and complex React concepts</p>
    </footer>
  );
}

export default Footer;
