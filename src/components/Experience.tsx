import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  const experiences = [
    {
      id: 1,
      role: "Software Engineer",
      company: "AppSquardz software Pvt. Ltd.",
      period: "1 June 2025 - 30 July 2025",
      description: "Training in web development.",
      highlights: ["API development", "Real-time features", "Cloud deployment"]
    }
  ];

  return (
    <section id="experience" className="experience" style={{ padding: '100px 0' }}>
      <div className="container">
        <div className="section-label">04 — {t.nav.experience}</div>
        <h2>Where I've worked</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-header">
                <div>
                  <div className="timeline-role">
                    {exp.role} @ <span style={{ color: 'var(--color-primary)' }}>{exp.company}</span>
                  </div>
                </div>
                <div className="timeline-period">{exp.period}</div>
              </div>
              <p className="timeline-desc">{exp.description}</p>
              <ul className="timeline-list">
                {exp.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
