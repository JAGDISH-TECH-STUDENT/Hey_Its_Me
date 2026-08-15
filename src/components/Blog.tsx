import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { BlogPost } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Blog: React.FC = () => {
  const { t } = useLanguage();
  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Real-Time Apps with Socket.io',
      excerpt: 'Learn how to build scalable real-time applications using Socket.io, React, and Node.js for seamless user experiences.',
      date: '2025-03-15',
      readTime: '5 min',
      image: '/blog-1.png',
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'Modern CSS Techniques for 2025',
      excerpt: 'Explore cutting-edge CSS features like container queries, cascade layers, and the new color functions.',
      date: '2025-02-28',
      readTime: '8 min',
      image: '/blog-2.png',
      category: 'CSS'
    },
    {
      id: 3,
      title: 'MongoDB Best Practices for Production',
      excerpt: 'A comprehensive guide to optimizing MongoDB performance, indexing strategies, and scaling considerations.',
      date: '2025-01-10',
      readTime: '10 min',
      image: '/blog-3.png',
      category: 'Database'
    }
  ];

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <section id="blog" className="blog" style={{ padding: '100px 0' }}>
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
          {t.blog.title}
        </h2>
        <div className="blog-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '32px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {posts.map((post) => (
            <article key={post.id} className="blog-card" style={{
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              transition: 'all 0.4s ease',
              cursor: 'pointer'
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
              <div style={{
                width: '100%',
                height: '200px',
                background: 'linear-gradient(135deg, var(--color-bg-tertiary), var(--color-bg-secondary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <span style={{ opacity: 0.3 }}>📝</span>
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  padding: '4px 10px',
                  background: 'var(--color-primary)',
                  color: 'white',
                  borderRadius: '12px',
                  fontSize: '11px',
                  fontWeight: '600'
                }}>
                  {post.category}
                </div>
              </div>

              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', color: 'var(--color-text-muted)', fontSize: '13px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <FaCalendarAlt /> {formatDate(post.date)}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <FaClock /> {post.readTime}
                  </span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--color-text)' }}>
                  {post.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '20px', fontSize: '15px' }}>
                  {post.excerpt}
                </p>
                <a href="#" className="btn" style={{ width: 'fit-content', padding: '10px 24px' }}>
                   {t.blog.readMore} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
