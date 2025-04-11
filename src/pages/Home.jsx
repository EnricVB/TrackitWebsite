import React from "react";
import 'styles/global.css';
import 'styles/home.css';
import 'asciinema-player/dist/bundle/asciinema-player.css';

import Carousel from 'components/Carousel';
import Footer from 'components/website/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faExclamationCircle, faFile, faLaptopHouse, faSquareBinary, faUserTag } from '@fortawesome/free-solid-svg-icons';

import commit from 'assets/command/commit.svg';
import listUser from 'assets/command/list-user.svg';
import log from 'assets/command/log.svg';
import stage from 'assets/command/stage.svg';
import stageIgnored from 'assets/command/stageignored.svg';
import status from 'assets/command/status.svg';

class App extends React.Component {
  render() {
    return (
      <div className="website" id="app">
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

          <Carousel content={[ 
            <img src={status} className="carouselImage"/>, 
            <img src={stage} className="carouselImage"/>,
            <img src={commit} className="carouselImage"/>, 
            <img src={stageIgnored} className="carouselImage"/>,
            <img src={listUser} className="carouselImage"/>, 
            <img src={log} className="carouselImage"/>, 
          ]}/>
        </div>

        {/* Sección "Porque Trackit" */}
        <div id="whyTrackit" className="whyTrackitSection">
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

        {/* Footer y Aprender más*/}
        <Footer/>
      </div>
    );
  }
}

export default App;