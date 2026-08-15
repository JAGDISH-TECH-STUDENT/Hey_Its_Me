import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const GitHubStats: React.FC = () => {
  return (
    <section id="github" className="github" style={{ padding: '100px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ 
          fontSize: '42px', 
          fontWeight: '700', 
          marginBottom: '40px',
          letterSpacing: '-1px',
          background: 'linear-gradient(135deg, var(--color-text), var(--color-primary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Connect With Me
        </h2>
        <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://github.com/JAGDISH-TECH-STUDENT" target="_blank" rel="noopener noreferrer" className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '18px 36px', fontSize: '20px' }}>
            <FaGithub size={32} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/jagdish-thakur-669083326/" target="_blank" rel="noopener noreferrer" className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '18px 36px', fontSize: '20px', background: '#0077b5' }}>
            <FaLinkedin size={32} /> LinkedIn
          </a>
          <a href="https://leetcode.com/u/rzcdyRGK1R/" target="_blank" rel="noopener noreferrer" className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '18px 36px', fontSize: '20px', background: '#ffa116' }}>
            <SiLeetcode size={32} /> LeetCode
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
