import './Projects.css';

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Proyectos Destacados</h2>

      <div className="project-highlight card">
        <div className="project-header">
          <h3 className="project-title">Proyecto MDQ-Quantum: Optimización de Tráfico Urbano</h3>
          <span className="project-badge">Hito Tecnológico</span>
        </div>

        <p className="project-description">
          <strong>Optimización Cuántica de Tráfico Urbano en Procesador IBM Eagle</strong>
        </p>

        <ul className="project-features">
          <li>
            <strong>Ejecución en Hardware Real:</strong> Logré la primera optimización de tráfico de Mar del Plata procesada íntegramente en hardware cuántico real. El modelo algorítmico fue enviado y ejecutado con éxito en <code>ibm_fez</code>, un procesador de IBM Quantum de Arquitectura Eagle de 127 Qubits, demostrando el potencial de la computación cuántica en la era NISQ para la logística urbana.
          </li>
          <li>
            <strong>Modelado y Resolución de Nodos Críticos:</strong> Desarrollo e implementación de un modelo matemático avanzado para la sincronización inteligente de la red de semáforos, traduciendo variables de congestión clásicas a circuitos cuánticos (arquitectura basada en compuertas).
          </li>
          <li>
            <strong>Impacto Logístico:</strong> El algoritmo evaluado en el procesador priorizó y resolvió exitosamente fases de alta complejidad operativa. En el nodo de alto tránsito "Bendu", el sistema determinó la priorización óptima de la Fase B (Giro a la Izquierda) para desagotar la congestión crítica, validando la superioridad de estos modelos para evaluar múltiples variables simultáneas frente a enfoques clásicos.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
