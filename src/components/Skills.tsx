import './Skills.css';

const Skills = () => {
  const skillsList = [
    {
      category: "Arquitectura y Modelado",
      items: ["Arquitectura de Sistemas", "Progressive Web Applications (PWA)", "Offline-first Design", "Patrones de Diseño (Principios SOLID & Clean Code)"]
    },
    {
      category: "Desarrollo Full-Stack",
      items: ["Python", "TypeScript / JavaScript", "Angular", "React / Vite", "PHP", "HTML5", "CSS3 / Modern UI"]
    },
    {
      category: "Tecnologías Emergentes",
      items: ["Computación Cuántica", "IBM Quantum", "Qiskit", "Procesadores Eagle", "Algoritmos de Optimización de Datos Complejos"]
    },
    {
      category: "Habilidades Blandas",
      items: ["Liderazgo Técnico", "Gestión de Proyectos", "Visión Comercial y de Negocios", "Resolución de Problemas Estructurales", "Trabajo bajo presión y en equipo"]
    }
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Habilidades Core y Tecnologías</h2>
      
      <div className="skills-grid">
        {skillsList.map((skillGroup, idx) => (
          <div className="skill-category card" key={idx}>
            <h3 className="skill-category-title">{skillGroup.category}</h3>
            <div className="skill-tags">
              {skillGroup.items.map((item, i) => (
                <span className="skill-tag" key={i}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
