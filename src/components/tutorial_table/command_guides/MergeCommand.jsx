import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class MergeCommand extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            trackit branch merge
          </commandTitle>

          <p>
            El subcomando <code>trackit branch merge</code> permite fusionar otra rama en la rama actual del repositorio. Se puede realizar la fusión de forma normal o forzada si los archivos no están actualizados.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit branch merge &lt;nombre-rama&gt; [--force]
          </codeBlock>
        </section>

        <section>
          <h3 className="sectionTitle">
            Parámetros y opciones
          </h3>

          <table>
            <tr>
              <th>Argumento / Opción</th>
              <th>Descripción</th>
            </tr>
            <tr>
              <td><code>&lt;nombre-rama&gt;</code></td>
              <td>Nombre de la rama que se desea fusionar en la rama actual.</td>
            </tr>
            <tr>
              <td><code>-f, --force</code></td>
              <td>Fuerza la fusión incluso si hay archivos desactualizados o conflictos potenciales.</td>
            </tr>
            <tr>
              <td>
                <code>-s, --sudo &lt;user&gt; &lt;psswd&gt;</code>
              </td>
              <td>
                Permite cambiar quien está haciendo la fusión, en caso de que el usuario no tenga permisos para hacerlo.
              </td>
            </tr>
            <tr>
              <td><code>--only-errors</code></td>
              <td>Muestra solo los errores y omite los logs.</td>
            </tr>
            <tr>
              <td><code>-v, --verbose</code></td>
              <td>Muestra logs detallados.</td>
            </tr>
          </table>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplos de uso
          </h3>

          <codeBlock>
            trackit branch merge feature/login
          </codeBlock>
          <ul>
            <li>Fusiona la rama <code>feature/login</code> en la rama actual si no hay conflictos ni archivos desactualizados.</li>
          </ul>

          <codeBlock>
            trackit branch merge feature/payment --force
          </codeBlock>
          <ul>
            <li>Fuerza la fusión de <code>feature/payment</code> en la rama actual, ignorando posibles archivos desactualizados.</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Notas adicionales
          </h3>

          <ul>
            <li>El comando validará si es posible realizar la fusión antes de ejecutarla.</li>
            <li>Si la rama a fusionar no existe, se lanza un error indicando que no se encontró la rama.</li>
            <li>Las fusiones deben respetar los permisos y el estado del índice de trabajo.</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default MergeCommand;
