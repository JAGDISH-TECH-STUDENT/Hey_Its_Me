import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Testimonial } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Senior Developer at TechCorp',
      content: 'Jagdish is an exceptional developer with a keen eye for detail and a passion for clean code. His projects demonstrate advanced understanding of modern web technologies.',
      avatar: '/avatar-1.png',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Product Manager',
      content: 'Working with Jagdish was a breeze. He delivered the project ahead of schedule and the code quality was top-notch. Highly recommended!',
      avatar: '/avatar-2.png',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Brown',
      role: 'Startup Founder',
      content: 'Jagdish built our entire platform from scratch. His ability to understand requirements and implement them perfectly was impressive.',
      avatar: '/avatar-3.png',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials" style={{ padding: '100px 0' }}>
      <div className="container">
        <h2 style={{ 
          fontSize: '42px', 
          fontWeight: '700', 
          textAlign: 'center', 
          marginBottom: '60px',
          letterSpacing: '-1px',
          background: 'linear-gradient(135deg, var(--color-text), var(--color-primary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          {t.testimonials.title}
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '32px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card" style={{
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius)',
              padding: '32px',
              position: 'relative',
              transition: 'all 0.3s ease',
              animationDelay: `${0.1 * testimonial.id}s`
            } as any}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaQuoteLeft style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                fontSize: '32px',
                color: 'var(--color-primary)',
                opacity: 0.2
              }} />

              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                color: 'white',
                fontWeight: '700',
                fontFamily: 'var(--font-sans)'
              }}>
                {testimonial.name.charAt(0)}
              </div>

              <p style={{
                color: 'var(--color-text-secondary)',
                lineHeight: '1.7',
                marginBottom: '20px',
                fontSize: '15px',
                fontStyle: 'italic'
              }}>
                "{testimonial.content}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-text)', marginBottom: '2px' }}>
                    {testimonial.name}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                    {testimonial.role}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} style={{ color: '#FBBF24', fontSize: '12px' }} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
