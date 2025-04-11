import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

import TutorialTable from "components/tutorial_table/TutorialTable";
import Footer from 'components/website/Footer';


class CommandGuide extends React.Component {
  render() {
    return (
      <div className="website">
        <TutorialTable/>

        <div className="guide">
          <div className="titleSection">
            <h1 className="title">Guía de Comandos</h1>
            <p className="description">
              Esta guía contiene una lista de comandos útiles para interactuar con el sistema.
            </p>
          </div>

          {/* Footer y Aprender más*/}
          <Footer/>
        </div>
      </div>
    );
  }
}

export default CommandGuide;