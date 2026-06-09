/* ============================================
   SIMPLE COMPONENT #3: ABOUT SECTION
   
   EXPLANATION FOR BEGINNERS:
   - This is the simplest type of React component
   - No hooks (useState, useEffect) needed
   - Just return JSX (looks like HTML but it's JavaScript)
   - Easy to customize the content
   ============================================ */

import React from 'react';

function AboutSection() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p>
        Results-driven Web Developer with 8+ years delivering high-performance WordPress and eCommerce solutions for Fortune 500 clients and growing startups. I specialize in building custom, scalable platforms that drive revenue and enhance user engagement.
      </p>
      <p>
        My expertise spans full-stack WordPress development, WooCommerce optimization, and seamless third-party integrations (ATS platforms, payment systems, automation workflows). I excel at translating complex requirements into elegant solutions—combining robust PHP backend architecture with intuitive, conversion-focused frontend designs using modern page builders.
      </p>
      <p>
        Proven ability to reduce development cycles, troubleshoot critical issues, and mentor team members. Passionate about clean code, performance optimization, and delivering measurable business value through technology.
      </p>
    </section>
  );
}

export default AboutSection;
