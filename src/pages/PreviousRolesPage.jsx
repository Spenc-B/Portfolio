import React from 'react';

const previousRoles = [
  {
    id: 1,
    title: 'Senior Web Developer',
    company: 'Digital Agency / Client Projects',
    period: 'Recent Role',
    summary:
      'Led end-to-end WordPress and WooCommerce builds, handling architecture, plugin compatibility, and UX improvements for multiple client sites.',
    highlights: [
      'Owned full delivery from technical scoping to launch.',
      'Improved platform reliability through compatibility hardening.',
      'Partnered with stakeholders to prioritize high-impact improvements.'
    ]
  },
  {
    id: 2,
    title: 'Web Developer',
    company: 'eCommerce and Marketing Teams',
    period: 'Earlier Role',
    summary:
      'Built and maintained responsive websites, integrated third-party services, and improved site performance through cleaner front-end and back-end workflows.',
    highlights: [
      'Built campaign-ready pages with responsive UX patterns.',
      'Integrated third-party systems and automation points.',
      'Reduced bottlenecks by refining development workflows.'
    ]
  },
  {
    id: 3,
    title: 'WordPress / PHP Developer',
    company: 'Freelance and Contract Work',
    period: 'Foundational Experience',
    summary:
      'Delivered custom WordPress features, troubleshooting, and automation integrations while translating business requirements into reliable technical solutions.',
    highlights: [
      'Built reusable components and custom PHP features.',
      'Diagnosed production issues and stabilized client sites.',
      'Translated non-technical requirements into clean implementations.'
    ]
  }
];

function PreviousRolesPage() {
  return (
    <section className="roles-page" id="previous-roles">
      <div className="roles-header">
        <span className="roles-eyebrow">Career Snapshot</span>
        <h2>Previous Job Roles</h2>
        <p>
          A structured look at previous positions, core responsibilities, and the impact delivered in each role.
        </p>
        <div className="roles-stats" aria-hidden="true">
          <div className="roles-stat-chip">
            <strong>{previousRoles.length}+</strong>
            <span>Key Roles</span>
          </div>
          <div className="roles-stat-chip">
            <strong>8+ yrs</strong>
            <span>Web Delivery</span>
          </div>
          <div className="roles-stat-chip">
            <strong>WordPress</strong>
            <span>Core Focus</span>
          </div>
        </div>
      </div>

      <div className="roles-timeline">
        {previousRoles.map((role, index) => (
          <article
            key={role.id}
            className={`role-timeline-item ${index % 2 === 0 ? 'role-left' : 'role-right'}`}
          >
            <span className="role-timeline-dot" aria-hidden="true"></span>
            <div className="role-content">
              <p className="role-period">{role.period}</p>
              <h3>{role.title}</h3>
              <p className="role-company">{role.company}</p>
              <p className="role-summary">{role.summary}</p>

              <ul className="role-highlight-list">
                {role.highlights.map((highlight, highlightIndex) => (
                  <li key={`${role.id}-highlight-${highlightIndex}`}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PreviousRolesPage;
