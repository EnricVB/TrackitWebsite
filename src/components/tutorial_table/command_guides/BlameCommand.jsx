import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class BlameCommand extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            trackit blame
          </commandTitle>

          <p>
            El comando <code>trackit blame</code> muestra línea por línea quién fue el autor del último cambio realizado en cada línea de un archivo. Es útil para rastrear la autoría de fragmentos específicos de código y entender su evolución.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit blame [opciones] archivo
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
              <td><code>--only-errors</code></td>
              <td>Muestra únicamente los errores, omitiendo el resto de la salida.</td>
            </tr>

            <tr>
              <td><code>-q, --quiet</code></td>
              <td>Ejecuta el comando sin mostrar logs en consola.</td>
            </tr>

            <tr>
              <td><code>-s, --sudo &lt;usuario&gt; &lt;contraseña&gt;</code></td>
              <td>Ejecuta el comando con privilegios de otro usuario.</td>
            </tr>

            <tr>
              <td><code>-v, --verbose</code></td>
              <td>Muestra salida detallada con información extendida.</td>
            </tr>
          </table>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplo básico
          </h3>

          <codeBlock>
            trackit blame main.kt
          </codeBlock>

          <ul>
            <li>Muestra quién modificó cada línea del archivo <code>main.kt</code>.</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Notas importantes
          </h3>

          <ul>
            <li>Cada línea mostrada incluirá información del autor, el commit y la fecha.</li>
            <li>El comando es útil para revisar la historia de un archivo línea por línea.</li>
            <li>Puede combinarse con otros comandos como <code>trackit log</code> para revisar detalles de los commits involucrados.</li>
            <li>Solo muestra información del último commit que modificó cada línea.</li>
            <li>Ideal para auditar código, investigar bugs o entender cambios históricos.</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default BlameCommand;
