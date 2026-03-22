import './Header.css';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header = ({ isDarkMode, toggleTheme }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#">&gt;_ N.Nuñez</a>
        </div>
        <nav className="nav-links">
          <a href="#about">Sobre Mí</a>
          <a href="#experience">Experiencia</a>
          <a href="#projects">Proyectos</a>
          <a href="#skills">Habilidades</a>
        </nav>
        <button 
          className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`} 
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {isDarkMode ? '[ Terminal Mode ON ]' : '>_ [ Ver Modo Terminal ]'}
        </button>
      </div>
    </header>
  );
};

export default Header;
