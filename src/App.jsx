import React from "react";
import './App.css';
import 'asciinema-player/dist/bundle/asciinema-player.css';

import AsciinemaPlayer from './components/AsciinemaPlayer';
import ImageCarousel from './components/Carousel';

import trackitIcon from './assets/icons/trackit-icon.png';
import commit from './assets/command/commit.svg';
import listUser from './assets/command/list-user.svg';
import log from './assets/command/log.svg';
import stage from './assets/command/stage.svg';
import stageIgnored from './assets/command/stageignored.svg';
import status from './assets/command/status.svg';

class App extends React.Component {
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
          </div>

          <div className="headerDescription">
            <div className="headerDescriptionText">
              <p>
                <b>Trackit</b> es un <b>sistema de control</b> de versiones distribuido y de <b>código abierto</b>,
                que permite <b>gestionar versiones</b> de proyectos con un <b>control avanzado de permisos</b>.
              </p>
              <p>
                Trackit destaca por su capacidad para ofrecer herramientas de <b>gestión de usuarios</b>, permitiendo que cada usuario o grupo
                pueda <b>modificar solamente una parte</b> del proyecto.
              </p>
              <p>
                Con su sistema de <b>hashing de archivos</b> y <b>sincronización remota</b>, Trackit asegura la integridad de los datos
                y el rendimiento en proyectos grandes y pequeños.
              </p>
            </div>

            
            <ImageCarousel content={[
              <img src={status} className="carouselImage"/>, 
              <img src={stage} className="carouselImage"/>,
              <img src={commit} className="carouselImage"/>, 
              <img src={stageIgnored} className="carouselImage"/>,
              <img src={listUser} className="carouselImage"/>, 
              <img src={log} className="carouselImage"/>,
            ]}/>
          </div>
        </div>

        {/* Sección de descarga */}
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
              <li>Java 22+ instalado</li>
              <li>20MB espacio libre</li>
              <li>Conexión a internet para sincronización</li>
            </ul>
          </div>
        </div>

        <div className="asciinemaPlayer">
          <h1>Trackit Usage</h1>
          <AsciinemaPlayer src="/test.cast" rows={50} idleTimeLimit={3} preload={true}/>
        </div>

        <footer className="footer">
          <p>© 2025 Trackit | <a href="https://github.com/EnricVB/Trackit">GitHub</a> | MIT License</p>
        </footer>
      </div>
    );
  }
}

export default App;