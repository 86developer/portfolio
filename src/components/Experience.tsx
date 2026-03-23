import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Technical Project & Business Development Coordinator / Backend Developer",
      company: "Rubicom Soluciones en Gestión",
      period: "Marzo 2025 - Marzo 2026 (Experiencia Pasada)",
      details: [
        "Evolucioné rápidamente de Backend Developer Trainee a un rol transversal estratégico acompañando directamente al CTO y CPO.",
        "Desarrollé integraciones complejas de servicios financieros y pasarelas de pago (API Ualá, Mercado Libre).",
        "Lideré la coordinación técnica del equipo, asegurando entregas a tiempo y alineación entre producto y negocio, al mismo tiempo que asistí en procesos de venta y propuestas comerciales."
      ]
    },
    {
      title: "Mentor IT",
      company: "Nicsan Tech",
      period: "Septiembre 2024 - Septiembre 2025",
      details: [
        "Diseñé, impartí y estructuré clases de programación avanzada para estudiantes, desarrollando proyectos que simulan entornos laborales reales.",
        "Evalué código y optimicé el aprendizaje técnico, fomentando un entorno de colaboración y resolución autónoma de problemas estructurales de software."
      ]
    },
    {
      title: "Desarrollador Web",
      company: "6UP Media",
      period: "Marzo 2024 - Mayo 2024",
      details: [
        "Diseñé y desarrollé la plataforma digital oficial de la productora audiovisual, priorizando SEO, seguridad, rendimiento (Lighthouse) y una identidad gráfica corporativa premium."
      ]
    }
  ];

  return (
    <section className="experience section" id="experience">
      <h2 className="section-title">Experiencia Profesional</h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-marker"></div>
            <div className="timeline-content card">
              <h3 className="timeline-title">{exp.title}</h3>
              <div className="timeline-subtitle">
                <span className="company">{exp.company}</span> | <span className="period">{exp.period}</span>
              </div>
              <ul className="timeline-details">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
