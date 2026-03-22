import { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('duckdev86@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <h2 className="footer-title">Nahuel Nuñez</h2>
          <p className="footer-subtitle">Desarrollador Full-Stack & Arquitecto Frontend</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/nahuelnuñez" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/86developer" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#" onClick={handleCopyEmail} style={{ cursor: 'pointer' }}>
              {copied ? '¡Email copiado!' : 'Contactar por Email'}
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nahuel Nuñez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
