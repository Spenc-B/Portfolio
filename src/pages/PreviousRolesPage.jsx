import React from 'react';

const previousRoles = [
  {
    id: 1,
    title: 'Senior Web Developer',
    company: 'Digital Agency / Client Projects',
    period: 'Recent Role',
    summary:
      'Led end-to-end WordPress and WooCommerce builds, handling architecture, plugin compatibility, and UX improvements for multiple client sites.'
  },
  {
    id: 2,
    title: 'Web Developer',
    company: 'eCommerce and Marketing Teams',
    period: 'Earlier Role',
    summary:
      'Built and maintained responsive websites, integrated third-party services, and improved site performance through cleaner front-end and back-end workflows.'
  },
  {
    id: 3,
    title: 'WordPress / PHP Developer',
    company: 'Freelance and Contract Work',
    period: 'Foundational Experience',
    summary:
      'Delivered custom WordPress features, troubleshooting, and automation integrations while translating business requirements into reliable technical solutions.'
  }
];

function PreviousRolesPage() {
  return (
    <section className="roles-page" id="previous-roles">
      <div className="roles-header">
        <h2>Previous Job Roles</h2>
        <p>
          A snapshot of previous positions and responsibilities. You can rename this page later and replace these entries with exact role details.
        </p>
      </div>

      <div className="roles-grid">
        {previousRoles.map((role) => (
          <article key={role.id} className="role-card">
            <h3>{role.title}</h3>
            <p className="role-company">{role.company}</p>
            <p className="role-period">{role.period}</p>
            <p>{role.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PreviousRolesPage;
