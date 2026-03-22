import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">Sobre Mí</h2>
      <div className="about-content">
        <p>
          Soy un <strong>Software Engineer & Systems Architect</strong> orientado a resultados,
          con una profunda pasión por resolver problemas de alta complejidad técnica y crear soluciones innovadoras.
          A lo largo de mi carrera, he liderado desarrollos integrales, desde la construcción de arquitecturas sólidas
          y escalables hasta la implementación de experiencias de usuario fluidas.
        </p>
        <p>
          Mi enfoque técnico se combina con una visión estratégica de negocio, lo que me ha permitido impulsar
          productos digitales que generan verdadero valor y eficiencia.
        </p>
        <p>
          Recientemente, mi trayectoria ha evolucionado hacia la <strong>Computación Cuántica</strong>,
          un campo donde aplico modelos de optimización avanzada para transformar la gestión urbana e industrial,
          integrando tecnologías clásicas corporativas con las capacidades del futuro digital.
        </p>
      </div>
    </section>
  );
};

export default About;
