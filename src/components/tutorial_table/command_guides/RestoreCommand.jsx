import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class RestoreCommand extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            trackit restore
          </commandTitle>

          <p>
            El comando <code>trackit restore</code> permite restaurar archivos desde un commit específico hacia el directorio de trabajo actual. 
            Puede usarse para recuperar versiones anteriores de uno o más archivos.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit restore [opciones] -f &lt;File path&gt; [-c &lt;Commit Hash&gt;]
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
                <code>-f, --file &lt;File path&gt;</code>
              </td>
              <td>
                Ruta del archivo a restaurar, relativa al repositorio. Obligatoria.
              </td>
            </tr>

            <tr>
              <td>
                <code>-c, --commit &lt;Commit Hash&gt;</code>
              </td>
              <td>
                Hash del commit desde el cual se desea restaurar el archivo. Si no se especifica, se utiliza el HEAD actual.
              </td>
            </tr>

            <tr>
              <td>
                <code>-s, --sudo &lt;user&gt; &lt;psswd&gt;</code>
              </td>
              <td>
                Ejecuta el comando como otro usuario con permisos elevados.
                Si no se indican usuario y contraseña, se pedirá de forma interactiva.
              </td>
            </tr>

            <tr>
              <td>
                <code>-q, --quiet</code>
              </td>
              <td>
                No muestra información por consola.
              </td>
            </tr>

            <tr>
              <td>
                <code>--only-errors</code>
              </td>
              <td>
                Muestra solo los errores, omitiendo los logs informativos.
              </td>
            </tr>

            <tr>
              <td>
                <code>-v, --verbose</code>
              </td>
              <td>
                Muestra información detallada del proceso de restauración.
              </td>
            </tr>

            <tr>
              <td>
                <code>-V, --version</code>
              </td>
              <td>
                Muestra la versión del comando y termina la ejecución.
              </td>
            </tr>

            <tr>
              <td>
                <code>-h, --help</code>
              </td>
              <td>
                Muestra la ayuda del comando.
              </td>
            </tr>
          </table>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplos básicos
          </h3>

          <div className="example">
            <p>
              <b>Restaurar un archivo desde un commit específico:</b>
            </p>
            <codeBlock>
              trackit restore -c a1b2c3d -f README.md
            </codeBlock>
            <ul>
              <li>Restaura el archivo <code>README.md</code> desde el commit <code>a1b2c3d</code>.</li>
            </ul>
          </div>

          <div className="example">
            <p>
              <b>Restaurar un archivo desde el commit actual (HEAD):</b>
            </p>
            <codeBlock>
              trackit restore -f config.yml
            </codeBlock>
            <ul>
              <li>Restaura <code>config.yml</code> usando el commit actual.</li>
            </ul>
          </div>

          <div className="example">
            <p>
              <b>Restaurar con permisos elevados:</b>
            </p>
            <codeBlock>
              trackit restore -c 1234567 -f data.json -s admin admin123
            </codeBlock>
            <ul>
              <li>Ejecuta la restauración como el usuario <code>admin</code>. Esto permite restaurar versiones de un fichero de una rama a la cual no se tiene acceso.</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="sectionTitle">
            Notas importantes
          </h3>

          <ul>
            <li>Si no se especifica un commit, se usará el HEAD actual como fuente de restauración.</li>
            <li>El archivo debe existir en el commit especificado para poder ser restaurado.</li>
            <li>Si el archivo no está presente en ese commit, será ignorado silenciosamente.</li>
            <li>La restauración sobrescribirá el archivo actual en el directorio de trabajo.</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default RestoreCommand;
