import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class BranchCommand extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            trackit branch
          </commandTitle>

          <p>
            El comando <code>trackit branch</code> permite gestionar ramas en el sistema de control de versiones Trackit. Puedes crear o eliminar ramas, y opcionalmente hacer checkout a una nueva rama después de crearla. También puedes definir las direcciones de push y fetch de la rama actual.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit branch [opciones]
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
              <td><code>-r, --remove &lt;nombre&gt;</code></td>
              <td>Elimina la rama indicada del índice. No elimina los commits asociados.</td>
            </tr>
            <tr>
              <td><code>-c, --create &lt;nombre&gt;</code></td>
              <td>Crea una nueva rama con el nombre proporcionado.</td>
            </tr>
            <tr>
              <td><code>-C, --checkout</code></td>
              <td>Realiza automáticamente checkout a la nueva rama después de crearla.</td>
            </tr>
            <tr>
              <td>
                <code>-s, --sudo &lt;user&gt; &lt;psswd&gt;</code>
              </td>
              <td>
                Permite cambiar el usuario que está realizando la operación, en caso de que el usuario actual no tenga permisos para hacerlo.
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
            trackit branch --remove feature/experimental
          </codeBlock>
          <ul>
            <li>Elimina la rama <code>feature/experimental</code> del índice.</li>
          </ul>

          <codeBlock>
            trackit branch --create release/v2.0
          </codeBlock>
          <ul>
            <li>Crea una nueva rama <code>release/v2.0</code> basada en la rama actual.</li>
          </ul>

          <codeBlock>
            trackit branch --create hotfix/api-bug --checkout
          </codeBlock>
          <ul>
            <li>Crea una nueva rama <code>hotfix/api-bug</code> y cambia automáticamente a ella.</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Notas adicionales
          </h3>

          <ul>
            <li>Al eliminar una rama, los commits asociados no se pierden, solo se elimina la referencia.</li>
            <li>La creación de ramas se realiza a partir del commit actual.</li>
            <li>No se requiere conexión remota para estas operaciones: afectan solo el repositorio local.</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default BranchCommand;
