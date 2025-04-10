import React from "react";
import './styles/App.css';
import './styles/Download.css';

class Download extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      downloadSection: [],
      selectedOS: 'windows',
    };
  }

  componentDidMount() {
    this.handleDownloadClick('windows'); // Cargar sección por defecto
  }

  createDownloadSection = (os, label, fileName) => (
    <div className={`${os}Section`}>
      <button href={`/trackit-${fileName}.zip`} className="downloadButton downloadButtonLeft">
        Descargar
      </button>
      
      <button href={`/trackit-${fileName}.zip`} className="downloadButton downloadButtonRight">
        {os === 'windows' && '.exe (Windows)'}
        {os === 'macos' && '.dmg (macOS)'}
        {os === 'linux' && '.tar.gz (Linux)'}
      </button>
    </div>
  );

  handleDownloadClick = (os) => {
    const osLabels = {
      windows: 'Windows',
      macos: 'macOS',
      linux: 'Linux'
    };

    const sectionContent = [
      <div className="downloadSectionTitle" key="title">
        <h1>Trackit - VSC</h1>
        <h3>Tu Sistema de Control de Versiones más seguro e integro.</h3>
      </div>,
      this.createDownloadSection(os, osLabels[os], os)
    ];

    this.setState({ downloadSection: sectionContent, selectedOS: os });
  };

  renderDownloadButton = (osKey, label) => (
    <a onClick={(e) => { this.handleDownloadClick(osKey); }} key={osKey}>
      <download className={this.state.selectedOS === osKey ? 'selected' : ''}>{label}</download>
    </a>
  );

  render() {
    return (
      <div className="website">
        {/* Header: Título + Descripción */}
        <div className="header">
          <div className="headerTitle">
            <img className="icon headerIcon" src={trackitIcon} />
            <h1 className="headerTitle headerIcon">Trackit</h1>
            <h1 className="headerSubtitle">Sistema de Control de Versiones</h1>
            
            {/* Botón de descarga en el Header */}
            <div className="buttonsInHeader">
              <a href="https://github.com/EnricVB/Trackit" target="_blank" rel="noopener noreferrer">
                Descargar Trackit
              </a>
              <a href="#whyTrackit">
                Más sobre Trackit
              </a>
            </div>
          </div>
        </div>
        
        <div className="downloadSection">
          <div className="downloadButtons">
            <div className="downloadButtonsSection">
              {this.renderDownloadButton('windows', 'Windows')}
              {this.renderDownloadButton('macos', 'macOS')}
              {this.renderDownloadButton('linux', 'Linux')}
            </div>

            <div className="downloadContent">
              {this.state.downloadSection}
            </div>
          </div>
          
          <div className="systemRequirements">
            <h3>Requisitos del sistema</h3>
            <ul>
              <li>Windows 10+, macOS 11+, Linux (Ubuntu 20+)</li>
              <li>Java 22+</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 Trackit | <a href="https://github.com/EnricVB/Trackit">GitHub</a> | MIT License</p>
        </footer>
      </div>
    );
  }
}

export default Download;