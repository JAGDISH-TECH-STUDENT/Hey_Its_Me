import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-label">01 — {t.nav.about}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '32px', alignItems: 'start' }}>
          <div>
            <h2>A bit about me</h2>
            <div className="about-content">
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="profile-card">
              <img src="/profile.jpeg" alt="Jagdish" onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.parentElement) {
                  target.style.display = 'none';
                  target.parentElement.innerHTML = `
                    <div style="width:120px;height:120px;border-radius:16px;background:linear-gradient(135deg, var(--color-primary), var(--color-secondary));display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:48px;color:white;">👤</div>
                  `;
                }
              }} />
              <h3>Jagdish</h3>
              <div className="subtitle">Software Engineer</div>
              <div className="profile-socials">
                <a href="https://github.com/JAGDISH-TECH-STUDENT" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/jagdish-thakur-669083326/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://leetcode.com/u/rzcdyRGK1R/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                  <SiLeetcode />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-number">0+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">4+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">37+</div>
            <div className="stat-label">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
