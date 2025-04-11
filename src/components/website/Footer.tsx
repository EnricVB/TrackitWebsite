import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="learnMoreSection">
        <h2>¿Quieres aprender más?</h2>
        <p>
          Descubre más sobre Trackit, su implementación, y cómo sacarle el máximo provecho en nuestros
          <a href="https://github.com/EnricVB/Trackit" target="_blank" rel="noopener noreferrer">
            : recursos y documentación.
          </a>
        </p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Trackit | <a href="https://github.com/EnricVB/Trackit">GitHub</a> | MIT License</p>
      </footer>
    </div>
  );
};

export default Footer;