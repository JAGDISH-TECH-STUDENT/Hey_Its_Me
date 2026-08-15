import React, { useState, lazy, Suspense } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import TypingText from './TypingText';

const PdfViewer = lazy(() => import('./PdfViewer'));

const Home: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="home" className="home">
      <div className="container">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start',
          gap: '24px'
        }}>
          <div style={{ color: 'var(--color-primary)', fontSize: '18px', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
            {t.hero.greeting || 'Hi, my name is'}
          </div>

          <h1 style={{ fontSize: 'clamp(42px, 7vw, 72px)', lineHeight: 1.1 }}>
            Jagdish.
          </h1>

          <div style={{ fontSize: 'clamp(24px, 4vw, 40px)', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span>{t.hero.prefix}</span>
            <TypingText words={t.hero.roles} speed={100} deleteSpeed={50} pauseDuration={2000} />
            <span style={{ color: 'var(--color-primary)' }}>|</span>
          </div>

          <p style={{ maxWidth: '540px', marginTop: '16px' }}>
            {t.about.description1}
          </p>

          <div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn">{t.hero.viewWork}</a>
            <a href="#contact" className="btn btn-outline">{t.hero.contactMe}</a>
            <button
              onClick={() => setIsResumeOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(79, 70, 229, 0.25)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(79, 70, 229, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(79, 70, 229, 0.25)';
              }}
            >
              <FaFilePdf size={20} />
            </button>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--color-text-muted)',
          fontSize: '12px',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.1em'
        }}>
          <span>SCROLL</span>
          <div style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--color-text-muted), transparent)'
          }} />
        </div>
      </div>

      {isResumeOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(6, 10, 19, 0.95)',
          backdropFilter: 'blur(12px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          <Suspense fallback={
            <div style={{
              width: '100%',
              maxWidth: '900px',
              height: '88vh',
              background: 'var(--color-card)',
              borderRadius: '20px',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text-muted)'
            }}>
              Loading resume...
            </div>
          }>
            <PdfViewer onClose={() => setIsResumeOpen(false)} />
          </Suspense>
        </div>
      )}
    </section>
  );
};

export default Home;
