import React from "react";
import './App.css';
import 'asciinema-player/dist/bundle/asciinema-player.css';

import AsciinemaPlayer from './components/AsciinemaPlayer';
import ImageCarousel from './components/Carousel';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faExclamationCircle, faFile, faLaptopHouse, faSquareBinary, faUserTag } from '@fortawesome/free-solid-svg-icons';

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
            
            {/* Botón de descarga en el Header */}
            <a className="downloadButtonInHeader" href="https://github.com/EnricVB/Trackit" target="_blank" rel="noopener noreferrer">
              Descargar Trackit
            </a>
          </div>
        </div>

        <div className="description">
          <div className="descriptionText">
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
        
        {/* Sección "Porque Trackit" */}
        <div className="whyTrackitSection">
          <h2 className="whyTrackitTitle">Por qué TRACKIT</h2>

          <div className="whyTrackitReasons">
            <span className="whyTrackitReason">
              <FontAwesomeIcon icon={faCodeBranch} size="3x"/>
              <h3>Gestión de versiones</h3>
              <p>
                TRACKIT te permite llevar un control preciso de las versiones de tu proyecto, gestionando tanto archivos pequeños como grandes con eficiencia, asegurando que siempre tengas acceso a la versión correcta y actualizada de tus archivos.
              </p>
            </span>

            <span className="whyTrackitReason">
              <FontAwesomeIcon icon={faUserTag} size="3x"/>
              <h3>Control avanzado de permisos</h3>
              <p>
                Con TRACKIT, puedes gestionar permisos y roles de manera detallada, garantizando que solo las personas adecuadas tengan acceso a las ramas, cambios y recursos críticos, mejorando la seguridad y la colaboración dentro de tu equipo.
              </p>
            </span>

            <span className="whyTrackitReason">
              <FontAwesomeIcon icon={faLaptopHouse} size="3x"/>
              <h3>Repositorios remotos</h3>
              <p>
                TRACKIT facilita la sincronización de tus proyectos con repositorios remotos, permitiendo operaciones de push y fetch con facilidad. Además, soporta configuraciones de múltiples protocolos, como SSH y Local, para asegurar la flexibilidad en tu flujo de trabajo.
              </p>
            </span>

            <span className="whyTrackitReason">
              <FontAwesomeIcon icon={faSquareBinary} size="3x"/>
              <h3>Optimización de la gestión de archivos binarios</h3>
              <p>
                TRACKIT optimiza la gestión de archivos binarios grandes, lo que es crucial para proyectos que dependen de estos tipos de archivos, como juegos, multimedia o software de ingeniería, asegurando que el control de versiones no afecte al rendimiento.
              </p>
            </span>

            <span className="whyTrackitReason">
              <FontAwesomeIcon icon={faExclamationCircle} size="3x"/>
              <h3>Fusión avanzada y resolución de conflictos</h3>
              <p>
                Con TRACKIT, puedes manejar múltiples tipos de conflictos durante las fusiones, lo que te permite resolver discrepancias de manera eficiente y sin comprometer la integridad de tu proyecto. Esto mejora la colaboración en equipos grandes y distribuidos.
              </p>
            </span>

            <span className="whyTrackitReason">
              <FontAwesomeIcon icon={faFile} size="3x"/>
              <h3>Mejora el rendimiento con un sistema de archivos eficiente</h3>
              <p>
                TRACKIT está diseñado para manejar archivos grandes y binarios de forma eficiente, utilizando algoritmos avanzados para garantizar un rendimiento rápido y escalable, incluso en proyectos complejos.
              </p>
            </span>
          </div>
        </div>
        
        {/* Sección "Aprender más" */}
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

        {/* Sección comentada */}
        {/* 
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
        */}
      </div>
    );
  }
}

export default App;