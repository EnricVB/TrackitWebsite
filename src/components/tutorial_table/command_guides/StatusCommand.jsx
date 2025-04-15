import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class StatusCommand extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            trackit status
          </commandTitle>

          <p>
            El comando <code>trackit status</code> muestra el estado actual del repositorio, incluyendo los cambios que están en el área de staging, los cambios no indexados y los archivos no rastreados.
            Es útil para ver qué archivos han sido modificados, agregados o eliminados, y si están listos para ser incluidos en el próximo commit.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit status [opciones]
          </codeBlock>
        </section>

        <section>
          <h3 className="sectionTitle">
            Opciones disponibles
          </h3>

          <table>
            <tr>
              <th>Opción</th>
              <th>Descripción</th>
            </tr>

            <tr>
              <td>
                <code>-i, --show-ignored</code>
              </td>
              <td>
                Muestra los ficheros ignorados.
              </td>
            </tr>

            <tr>
              <td>
                <code>-q, --quiet</code>
              </td>
              <td>
                Ejecuta el comando sin mostrar información por consola.
              </td>
            </tr>

            <tr>
              <td>
                <code>--only-errors</code>
              </td>
              <td>
                Muestra únicamente los errores que ocurran durante la ejecución.
              </td>
            </tr>

            <tr>
              <td>
                <code>-v, --verbose</code>
              </td>
              <td>
                Muestra información más detallada, como el estado de los archivos modificados, agregados o eliminados.
              </td>
            </tr>

          </table>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplo básico
          </h3>

          <codeBlock>
            trackit status
          </codeBlock>

          <ul>
            <li>
              Muestra el estado actual del repositorio, incluyendo los cambios en staging, los archivos modificados y los no rastreados.
            </li>
            <li>
              Es útil para ver rápidamente qué archivos han sido modificados, agregados o eliminados.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Notas importantes
          </h3>

          <ul>
            <li>
              Estados de un fichero:
              <ul>
                <li>
                  '?': No ha sido agregado al repositorio todavía.
                </li>
                <li>
                  '*': No ha sido modificado desde el último commit.
                </li>
                <li>
                  'M': Ha sido modificado respecto al último commit.
                </li>
                <li>
                  'S': Está en el area de staging esperando al siguiente commit.
                </li>
                <li>
                  'D': Ha sido eliminado y será agregado automaticamente al siguiente commit.
                </li>
                <li>
                  'I': Ha sido agregado a .ignore para ser ignorado en el proximo commit.
                </li>
              </ul>
            </li>
            <li>
              El comando <b>trackit status</b> no realiza cambios en los archivos ni en el repositorio. Solo te muestra información sobre el estado actual.
            </li>
            <li>
              Si no usas ninguna opción, <b>trackit status</b> mostrará el estado completo del repositorio por defecto, sin incluir ficheros ignorados.
            </li>
            <li>
              Este comando es útil para verificar el estado antes de realizar un commit y asegurarte de que los archivos correctos están preparados.
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default StatusCommand;