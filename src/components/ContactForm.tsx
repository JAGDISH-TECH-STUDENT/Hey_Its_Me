import React, { useState, FormEvent } from 'react';
import { FaPaperPlane, FaEnvelope, FaUser, FaTag, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { sendEmail } from '../utils/emailjs';
import { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const { dark } = useTheme();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    const success = await sendEmail(formData);
    setStatus(success ? 'success' : 'error');

    if (success) {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '16px 20px',
    background: dark ? 'var(--color-bg-tertiary)' : '#f9fafb',
    border: `1px solid ${errors.name ? '#ef4444' : 'var(--color-border)'}`,
    borderRadius: 'var(--radius-sm)',
    color: dark ? 'var(--color-text)' : '#111827',
    fontSize: '16px',
    fontFamily: 'var(--font-sans)',
    transition: 'all 0.3s ease',
    outline: 'none'
  };

  return (
    <section id="contact" className="contact" style={{ padding: '100px 0' }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <div className="section-label" style={{ textAlign: 'center' }}>05 — {t.nav.contact}</div>
        <h2 style={{ textAlign: 'center' }}>{t.contact.ctaTitle}</h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', marginTop: '16px', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.7 }}>
          {t.contact.ctaDescription}
        </p>

        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          textAlign: 'left'
        }}>
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--color-text-secondary)', fontSize: '14px', fontWeight: '500' }}>
              <FaUser size={14} /> {t.contact.name}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
            onBlur={(e) => e.target.style.borderColor = errors.subject ? '#ef4444' : 'var(--color-border)'}
            />
            {errors.name && (
              <p style={{ color: '#ef4444', fontSize: '13px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <FaExclamationCircle size={12} /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--color-text-secondary)', fontSize: '14px', fontWeight: '500' }}>
              <FaEnvelope size={14} /> {t.contact.email}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={(e) => e.target.style.borderColor = errors.email ? '#ef4444' : 'var(--color-border)'}
            />
            {errors.email && (
              <p style={{ color: '#ef4444', fontSize: '13px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <FaExclamationCircle size={12} /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--color-text-secondary)', fontSize: '14px', fontWeight: '500' }}>
              <FaTag size={14} /> {t.contact.subject}
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={(e) => e.target.style.borderColor = errors.subject ? '#ef4444' : 'var(--color-border)'}
            />
            {errors.subject && (
              <p style={{ color: '#ef4444', fontSize: '13px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <FaExclamationCircle size={12} /> {errors.subject}
              </p>
            )}
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-secondary)', fontSize: '14px', fontWeight: '500' }}>
              {t.contact.message}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              rows={5}
              style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={(e) => e.target.style.borderColor = errors.message ? '#ef4444' : 'var(--color-border)'}
            />
            {errors.message && (
              <p style={{ color: '#ef4444', fontSize: '13px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <FaExclamationCircle size={12} /> {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              width: 'fit-content',
              padding: '16px 36px',
              margin: '12px auto 0',
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))',
              color: '#000',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              opacity: status === 'sending' ? 0.7 : 1,
              whiteSpace: 'normal',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              if (status !== 'sending') {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,212,255,0.3)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {status === 'sending' ? (
              <>
                <span className="spinner" style={{
                  width: '16px',
                  height: '16px',
                  border: '2px solid rgba(0,0,0,0.2)',
                  borderTopColor: '#000',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }} />
                {t.contact.sending}
              </>
            ) : status === 'success' ? (
              <>
                <FaCheckCircle /> {t.contact.success}
              </>
            ) : status === 'error' ? (
              <>
                <FaExclamationCircle /> {t.contact.error}
              </>
            ) : (
              <>
                <FaPaperPlane /> {t.contact.send}
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
