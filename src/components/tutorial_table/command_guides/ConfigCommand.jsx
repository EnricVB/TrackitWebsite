import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class ConfigCommand extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            trackit config
          </commandTitle>

          <p>
            El comando <code>trackit config</code> se utiliza para configurar las credenciales de usuario y las opciones de sesión tanto localmente (en el repositorio) como globalmente. Permite gestionar sesiones persistentes y configuraciones específicas para el usuario y repositorio.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit config [opciones]
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
              <td><code>--global</code></td>
              <td>Aplica los cambios a nivel del sistema.</td>
            </tr>

            <tr>
              <td><code>-h, --help</code></td>
              <td>Muestra este mensaje de ayuda y sale.</td>
            </tr>

            <tr>
              <td><code>-ks, --keep-session</code></td>
              <td>Mantiene la sesión abierta después de cerrar la terminal.</td>
            </tr>

            <tr>
              <td><code>--local</code></td>
              <td>Aplica los cambios solo a nivel del repositorio (por defecto).</td>
            </tr>

            <tr>
              <td><code>--only-errors</code></td>
              <td>Muestra solo los errores y omite los logs.</td>
            </tr>

            <tr>
              <td><code>-p, --password=&lt;password&gt;</code></td>
              <td>Define la contraseña del usuario.</td>
            </tr>

            <tr>
              <td><code>-q, --quiet</code></td>
              <td>No muestra logs.</td>
            </tr>

            <tr>
              <td><code>-s, --sudo=&lt;sudoArgs&gt; &lt;sudoArgs&gt;</code></td>
              <td>Ejecuta el comando como usuario.</td>
            </tr>

            <tr>
              <td><code>-u, --username=&lt;username&gt;</code></td>
              <td>Define el nombre de usuario a configurar.</td>
            </tr>

            <tr>
              <td><code>-v, --verbose</code></td>
              <td>Muestra logs detallados.</td>
            </tr>

            <tr>
              <td><code>-V, --version</code></td>
              <td>Muestra la información de la versión y sale.</td>
            </tr>
          </table>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplo básico
          </h3>

          <codeBlock>
            trackit config --username alice --keep-session
          </codeBlock>

          <ul>
            <li>Guarda la sesión localmente para el usuario 'alice'.</li>
            <li>Es útil si quieres mantener abierta la sesión después de cerrar la terminal.</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplo de configuración global
          </h3>

          <codeBlock>
            trackit config --global --keep-session
          </codeBlock>

          <ul>
            <li>Solicita las credenciales y guarda la sesión globalmente.</li>
            <li>Usado para aplicar configuraciones a todos los repositorios en el sistema.</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplo con contraseña
          </h3>

          <codeBlock>
            trackit config --keep-session --username bob --password pass --global
          </codeBlock>

          <ul>
            <li>Guarda la sesión globalmente para el usuario 'bob' con la contraseña proporcionada.</li>
            <li>Permite configurar un usuario con credenciales específicas a nivel global.</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Notas importantes
          </h3>

          <ul>
            <li>Si no se proporcionan credenciales a través de las opciones, se te pedirá que ingreses los datos.</li>
            <li>La opción <code>--global</code> aplica los cambios a nivel del sistema, mientras que sin ella los cambios son solo a nivel del repositorio actual.</li>
            <li>Es posible mantener una sesión abierta usando <code>--keep-session</code>, lo que puede ser útil para sesiones prolongadas o trabajo en terminales interactivas.</li>
            <li>El comando no afecta al contenido del repositorio, solo gestiona las credenciales y la configuración de la sesión.</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default ConfigCommand;
