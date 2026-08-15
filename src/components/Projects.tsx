import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    {
      id: 1,
      title: "GameZone",
      description: "Full-stack real-time multiplayer gaming platform featuring Chess and Tic-Tac-Toe with Socket.io integration for seamless gameplay across devices.",
      tech: ["React", "Node.js", "Socket.io", "Chess.js"],
      link: "https://gamezone-b34r.onrender.com/",
      icon: "🎮",
      image: "/project-gamezone.png"
    },
    {
      id: 2,
      title: "Homigo",
      description: "Rental listing platform for PG accommodations with responsive UI, RESTful APIs, and MongoDB database integration for smooth navigation.",
      tech: ["HTML/CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
      link: "https://homigo-cp8k.onrender.com/",
      icon: "🏠",
      image: "/project-homigo.png"
    }
  ];

  return (
    <section id="projects" className="projects" style={{ padding: '100px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
          <h2 style={{ margin: 0, textAlign: 'left' }}>Featured Projects</h2>
          <a href="#" className="btn" style={{ width: 'fit-content', padding: '10px 20px', fontSize: '13px' }}>
            View all projects →
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div style={{
                width: '100%',
                height: '220px',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                marginBottom: '24px',
                background: 'var(--color-bg-tertiary)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                 <img
                   src={project.image}
                   alt={project.title}
                   style={{
                     width: '100%',
                     height: '100%',
                     objectFit: 'cover',
                     position: 'absolute',
                     inset: 0
                   }}
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     if (target.parentElement) {
                       target.style.display = 'none';
                       target.parentElement.innerHTML = `
                         <div style="
                           width: 100%;
                           height: 100%;
                           display: flex;
                           flex-direction: column;
                           align-items: center;
                           justify-content: center;
                           gap: 16px;
                           background: radial-gradient(circle at top left, rgba(0,212,255,0.15), transparent 40%),
                                       radial-gradient(circle at bottom right, rgba(109,40,217,0.15), transparent 40%),
                                       linear-gradient(135deg, var(--color-bg-tertiary), var(--color-bg-secondary));
                           border: 1px solid var(--color-border);
                           border-radius: var(--radius);
                           overflow: hidden;
                         ">
                           <div style="
                             width: 100px;
                             height: 100px;
                             display: flex;
                             align-items: center;
                             justify-content: center;
                             font-size: 56px;
                             background: linear-gradient(135deg, rgba(0,212,255,0.15), rgba(109,40,217,0.15));
                             border-radius: 24px;
                             border: 1px solid rgba(0,212,255,0.25);
                             box-shadow: 0 20px 40px rgba(0,0,0,0.35);
                           ">${project.icon}</div>
                           <div style="
                             font-size: 15px;
                             font-weight: 600;
                             letter-spacing: 0.08em;
                             text-transform: uppercase;
                             color: var(--color-text-secondary);
                           ">${project.title}</div>
                         </div>
                       `;
                     }
                   }}
                 />
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', marginBottom: '20px', fontSize: '15px' }}>
                  {project.description}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '8px', 
                  marginBottom: '24px' 
                }}>
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      style={{
                        padding: '6px 14px',
                        background: 'var(--color-bg-tertiary)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '8px',
                        fontSize: '13px',
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'var(--font-mono)',
                        transition: 'all 0.2s ease',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.borderColor = 'var(--color-primary)';
                        target.style.color = 'var(--color-primary)';
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.borderColor = 'var(--color-border)';
                        target.style.color = 'var(--color-text-secondary)';
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn"
                  style={{ 
                    width: 'fit-content',
                    padding: '12px 28px',
                    whiteSpace: 'normal',
                    textAlign: 'center'
                  }}
                >
                  {t.projects.viewLive} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
