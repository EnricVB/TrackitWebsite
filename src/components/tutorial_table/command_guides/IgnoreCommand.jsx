import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class IgnoreCommand extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            trackit ignore
          </commandTitle>

          <p>
            El comando <code>trackit ignore</code> permite indicar a Trackit qué <b>archivos o directorios deben ser ignorados</b> por el sistema de control de versiones.
            Es útil para evitar que archivos <b>temporales, compilados, binarios o configuraciones locales</b> se agreguen accidentalmente al repositorio.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit ignore [opciones] &lt;ruta&gt;
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
                La ruta al <b>fichero o directorio a ignorar</b>. En caso de directorio, se ignoran todos los ficheros y directorios dentro.
              </td>
            </tr>

            <tr>
              <td>
                <code>-h, --help</code>
              </td>
              <td>
                Muestra un mensaje de ayuda del comando.
              </td>
            </tr>

            <tr>
              <td>
                <code>-q, --quiet</code>
              </td>
              <td>
                Ejecuta <b>sin mostrar información por consola</b>. Ideal para scripts automatizados.
              </td>
            </tr>

            <tr>
              <td>
                <code>--only-errors</code>
              </td>
              <td>
                <b>Muestra únicamente los errores</b>, ocultando los mensajes informativos.
              </td>
            </tr>

            <tr>
              <td>
                <code>-v, --verbose</code>
              </td>
              <td>
                Muestra los <b>stacktrace</b> en caso de error.
              </td>
            </tr>
          </table>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplo básico
          </h3>

          <codeBlock>
            trackit ignore build/
          </codeBlock>

          <ul>
            <li>
              Agrega <code>build/</code> a la lista de rutas ignoradas.
            </li>
            <li>
              Trackit <b>no tendrá en cuenta</b> los archivos dentro de <code>build/</code> al hacer staging o commit.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Notas importantes
          </h3>

          <ul>
            <li>
              Las rutas ignoradas se guardan en el archivo <code>.ignore</code>.
            </li>
            <li>
              Puedes editar ese archivo manualmente para agregar patrones como <code>*.log</code>, <code>*.tmp</code> o carpetas completas.
            </li>
            <li>
              Si un directorio es indicado, todos los ficheros y subdirectorios serán ignorados.
            </li>
            <li>
              Para revertir los ficheros ignorados, se debe modificar manualmente .ignore.
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default IgnoreCommand;
