import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class UnstageCommand extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            trackit unstage
          </commandTitle>

          <p>
            El comando <code>trackit unstage</code> permite <b>quitar archivos</b> del área de staging antes de realizar un commit. 
            Esto es útil si agregaste archivos por error y no quieres incluirlos en el próximo commit.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit unstage [opciones] &lt;ruta&gt;
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
                <code>&lt;ruta&gt;</code>
              </td>
              <td>
                Ruta del archivo o directorio que se desea quitar del área de staging. En caso de incluir un directorio, todos los ficheros y subdirectorios serán desmarcados.
              </td>
            </tr>

            <tr>
              <td>
                <code>-q, --quiet</code>
              </td>
              <td>
                Ejecuta sin mostrar información por consola.
              </td>
            </tr>

            <tr>
              <td>
                <code>--only-errors</code>
              </td>
              <td>
                Muestra únicamente errores.
              </td>
            </tr>

            <tr>
              <td>
                <code>-v, --verbose</code>
              </td>
              <td>
                Muestra más información, incluyendo archivos desmarcados y advertencias.
              </td>
            </tr>
          </table>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplo básico
          </h3>

          <codeBlock>
            trackit unstage src/main.kt
          </codeBlock>

          <ul>
            <li>
              Elimina el archivo <code>src/main.kt</code> del área de staging.
            </li>
            <li>
              El archivo no se incluirá en el próximo commit.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Más Ejemplos
          </h3>

          <div className="example">
            <p>
              <b>Quitar un archivo específico</b>: Si agregaste un archivo por error al staging y quieres quitarlo, puedes hacerlo de la siguiente manera:
            </p>
            <codeBlock>
              trackit unstage archivo.txt
            </codeBlock>
          </div>

          <div className="example">
            <p>
              <b>Quitar un directorio completo</b>: Para quitar todo el contenido de un directorio del staging, simplemente usa la ruta del directorio:
            </p>
            <codeBlock>
              trackit unstage carpeta/
            </codeBlock>
          </div>
        </section>

        <section>
          <h3 className="sectionTitle">
            Notas importantes
          </h3>

          <ul>
            <li>
              Este comando <b>elimina archivos del área de staging</b>, pero no afecta el contenido de los archivos. Los archivos no se borran ni se modifican.
            </li>
            <li>
              Si un archivo fue agregado por error al staging y no quieres que se incluya en el próximo commit, puedes usar este comando.
            </li>
            <li>
              Los directorios se procesan de forma <b>recursiva</b>, por lo que se quitarán todos los archivos dentro de un directorio.
            </li>
            <li>
              Si tienes varios archivos que deseas quitar del staging, puedes hacerlo todos a la vez, especificándolos en la misma línea de comando.
            </li>
            <li>
              El área de staging es <b>local</b> y se guarda en <code>.trackit/Staging.index</code>.
            </li>
            <li>
              Si modificás un archivo después de hacer unstage, deberás volver a hacer <code>trackit stage</code> para incluir la versión actualizada en el próximo commit.
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default UnstageCommand;
