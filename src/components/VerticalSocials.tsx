import React from 'react';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

const VerticalSocials: React.FC = () => {
  return (
    <div className="vertical-socials">
      <a href="https://github.com/JAGDISH-TECH-STUDENT" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub size={18} />
      </a>
      <a href="https://www.linkedin.com/in/jagdish-thakur-669083326/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin size={18} />
      </a>
      <a href="https://leetcode.com/u/rzcdyRGK1R/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
        <FaExternalLinkAlt size={18} />
      </a>
    </div>
  );
};

export default VerticalSocials;
