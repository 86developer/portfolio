import './Projects.css';

const Comunidad = () => {
  return (
    <section className="comunidad section" id="comunidad">
      <h2 className="section-title">Comunidad y Divulgación / Community & Outreach</h2>

      <div className="project-highlight card">
        <div className="project-header">
          <h3 className="project-title">Mar del Plata Work Summit - Ponente</h3>
          <span className="project-badge">Próximamente 2026</span>
        </div>
        <p className="project-description">
          <strong>Temática: Revolución Cuántica en la Logística: De la resiliencia personal a la optimización urbana</strong>
        </p>
        <ul className="project-features">
          <li>
            Presentación oficial del modelo MDQ-Quantum ante el ecosistema empresarial y municipal. Una charla que conecta mi historia de superación (de la logística física en YPF a la arquitectura de sistemas) con soluciones de vanguardia para la ciudad.
          </li>
        </ul>
      </div>

      <div className="project-highlight card">
        <div className="project-header">
          <h3 className="project-title">Ponente en Educación Tecnológica</h3>
          <span className="project-badge">Próximamente / Coming Soon</span>
        </div>
        <p className="project-description">
          <strong>Institución Educativa (Nivel Secundario)</strong>
        </p>
        <ul className="project-features">
          <li>
            Diseño e impartición próxima de una charla introductoria para estudiantes de nivel medio. El objetivo es inspirar y educar a la próxima generación sobre las oportunidades en el sector IT y la revolución de las tecnologías cuánticas, fomentando el interés en la ciencia de datos avanzada y el desarrollo de sistemas de alta complejidad.
          </li>
          <li>
            Charlas motivacionales para estudiantes secundarios, compartiendo mi trayectoria para demostrar que con iniciativa y herramientas modernas (IA/Quantum), no hay techos para el crecimiento profesional.
          </li>
        </ul>
      </div>

      <div className="project-highlight card">
        <div className="project-header">
          <h3 className="project-title">Divulgador de Computacion Cuantica</h3>
          <span className="project-badge">Próximamente / Coming Soon</span>
        </div>
        <p className="project-description">
          <strong>ATICMA (Asociacion de Tecnologias de la Informacion y la Comunicacion de Mar del Plata)</strong>
        </p>
        <ul className="project-features">
          <li>
            Actualmente en proceso de preparación y propuesta de charlas técnicas y estratégicas orientadas a acercar el impacto de la Computación Cuántica al sector empresarial regional. El enfoque está en casos de estudio reales de optimización logística, como el modelo aplicado al tráfico de MDQ, para demostrar la viabilidad y rentabilidad de estas soluciones en el ecosistema IT regional actual.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Comunidad;
