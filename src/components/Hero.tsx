import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Nahuel Nuñez</h1>
        <h2 className="hero-subtitle">Software Engineer & Systems Architect</h2>
        <p className="hero-text">
          Innovando desde la arquitectura de sistemas corporativos hacia la optimización mediante Computación Cuántica.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contact" className="btn btn-secondary">Contactar</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
