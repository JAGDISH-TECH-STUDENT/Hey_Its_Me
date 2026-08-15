import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const categories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'PHP', 'Java', 'Python', 'C++', 'SQL']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Spring Boot', 'Vue.js', 'Nuxt.js', 'React.js', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Firebase']
    },
    {
      title: 'Tools',
      skills: ['Docker', 'AWS', 'Git & GitHub', 'GraphQL', 'REST API', 'WebSockets', 'Claude', 'Cursur', 'Linux']
    }
  ];

  return (
    <section id="skills" className="skills" style={{ padding: '100px 0' }}>
      <div className="container">
        <div className="section-label">02 — {t.nav.skills}</div>
        <h2>Tools I work with</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px', alignItems: 'start' }}>
          <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {categories.map((category, idx) => (
              <div key={idx} className="skill-category">
                <h3>{category.title}</h3>
                <div className="skill-tags">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="now-card">
            <h3>Now</h3>
            <div className="status">
              Open to opportunities
            </div>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--color-text-secondary)', margin: 0 }}>
              Building <strong>Software Engineer</strong> work at <strong style={{ color: 'var(--color-primary)' }}>AppSquardz software Pvt. Ltd.</strong> — React.js, Vue.js, MongoDB, etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
