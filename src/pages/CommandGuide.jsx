import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

import TutorialTable from "components/tutorial_table/TutorialTable";
import Init from "components/tutorial_table/command_guides/InitCommand";
import Ignore from "components/tutorial_table/command_guides/IgnoreCommand";
import Stage from "components/tutorial_table/command_guides/StageCommand";
import Unstage from "components/tutorial_table/command_guides/UnstageCommand";
import Status from "components/tutorial_table/command_guides/StatusCommand";
import Commit from "components/tutorial_table/command_guides/CommitCommand";
import Checkout from "components/tutorial_table/command_guides/CheckoutCommand";
import Restore from "components/tutorial_table/command_guides/RestoreCommand";
import Tag from "components/tutorial_table/command_guides/TagCommand";
import Log from "components/tutorial_table/command_guides/LogCommand";
import Diff from "components/tutorial_table/command_guides/DiffCommand";
import Blame from "components/tutorial_table/command_guides/BlameCommand";
import GarbageRecollector from "components/tutorial_table/command_guides/GarbageCollectorCommand";
import Config from "components/tutorial_table/command_guides/ConfigCommand";
import User from "components/tutorial_table/command_guides/UserCommand";
import Role from "components/tutorial_table/command_guides/RoleCommand";
import Footer from 'components/website/Footer';

const commandComponents = {
  "Trackit Init": Init,
  "Trackit Ignore": Ignore,
  "Trackit Stage": Stage,
  "Trackit Unstage": Unstage,
  "Trackit Status": Status,
  "Trackit Commit": Commit,
  "Trackit Checkout": Checkout,
  "Trackit Restore": Restore,
  "Trackit Tag": Tag,
  "Trackit Log": Log,
  "Trackit Diff": Diff,
  "Trackit Blame": Blame,
  "Trackit Garbage Recollector": GarbageRecollector,
  "Trackit Config": Config,
  "Trackit User": User,
  "Trackit Role": Role,
};

class CommandGuide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCommand: null,
    };
  }

  handleSelectCommand = (commandName) => {
    this.setState({ selectedCommand: commandName });
  };

  render() {
    const { selectedCommand } = this.state;
    const SelectedComponent = commandComponents[selectedCommand];

    return (
      <div className="website">
        <TutorialTable onSelectedCommand={this.handleSelectCommand} />

        <div className="guide">
          {SelectedComponent ?
            <SelectedComponent /> :
            <div className="titleSection">
              <h1 className="title">Guía de Comandos</h1>
              <p className="description">
                Esta guía contiene una lista de comandos útiles para interactuar con el sistema.
              </p>
            </div>
          }
        </div>


        {/* Footer y Aprender más*/}
        <Footer />
      </div>
    );
  }
}

export default CommandGuide;