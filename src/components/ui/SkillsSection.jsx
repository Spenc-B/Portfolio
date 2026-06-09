/* ============================================
   SIMPLE COMPONENT #4: SKILLS SECTION
   
   EXPLANATION FOR BEGINNERS:
   - Demonstrates using .map() to render lists
   - Array of skills is converted to JSX elements
   - This is a very common React pattern
   - Easy to add/remove skills from the array
   ============================================ */

import React from 'react';

function SkillsSection() {
  // Array of skills - easy to add more!
  const skills = [
    {
      id: 1,
      title: 'WordPress',
      description: 'Expert in WordPress development, customization, and management'
    },
    {
      id: 2,
      title: 'PHP & Backend',
      description: 'Server-side development with PHP, custom post types, and shortcodes'
    },
    {
      id: 3,
      title: 'WooCommerce',
      description: 'eCommerce platform development and troubleshooting'
    },
    {
      id: 4,
      title: 'Frontend Development',
      description: 'HTML, CSS, JavaScript, jQuery, and responsive design'
    },
    {
      id: 5,
      title: 'Page Builders',
      description: 'Elementor, Beaver Builder, WP Bakery, Divi, and Gutenberg'
    },
    {
      id: 6,
      title: 'Integration & Automation',
      description: 'ATS platforms, Zapier workflows, and third-party integrations'
    },
    {
      id: 7,
      title: 'Version Control',
      description: 'GitLab, TortoiseSVN, Composer, and security management'
    },
    {
      id: 8,
      title: 'UX/UI Optimization',
      description: 'User experience audits, design implementation, and content improvements'
    }
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      
      <div className="skills-grid">
        {/* This is the .map() pattern - convert array to JSX */}
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
