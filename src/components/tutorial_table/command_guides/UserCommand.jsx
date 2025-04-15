import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class UserCommandsPage extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            trackit create-user
          </commandTitle>

          <p>
            El comando <code>trackit create-user</code> se utiliza para crear un nuevo usuario en el sistema. Este comando permite asignar un nombre de usuario, contraseña, correo electrónico, número de teléfono y roles asociados al usuario.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit create-user [opciones]
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
              <td><code>-n, --name</code></td>
              <td>Define el nombre del usuario.</td>
            </tr>

            <tr>
              <td><code>-p, --password</code></td>
              <td>Define la contraseña del usuario.</td>
            </tr>

            <tr>
              <td><code>-m, --mail</code></td>
              <td>Define el correo electrónico del usuario.</td>
            </tr>

            <tr>
              <td><code>-P, --phone</code></td>
              <td>Define el número de teléfono del usuario.</td>
            </tr>

            <tr>
              <td><code>-r, --role</code></td>
              <td>Asigna uno o más roles al usuario.</td>
            </tr>
          </table>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplo básico
          </h3>

          <codeBlock>
            trackit create-user -n Alice -p secretPass -m alice@example.com -P 123456789 -r Developer Tester
          </codeBlock>

          <ul>
            <li>Crea el usuario 'Alice' con la contraseña 'secretPass', correo electrónico 'alice@example.com', teléfono '123456789', y roles 'Developer' y 'Tester'.</li>
          </ul>
        </section>

        <section>
          <commandTitle>
            trackit modify-user
          </commandTitle>

          <p>
            El comando <code>trackit modify-user</code> permite modificar los detalles de un usuario existente, como la contraseña, correo electrónico, teléfono o roles asignados.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit modify-user [opciones]
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
              <td><code>-n, --name</code></td>
              <td>Define el nombre del usuario a modificar.</td>
            </tr>

            <tr>
              <td><code>-M, --new-mail</code></td>
              <td>Define un nuevo correo electrónico para el usuario.</td>
            </tr>

            <tr>
              <td><code>-P, --new-phone</code></td>
              <td>Define un nuevo número de teléfono para el usuario.</td>
            </tr>

            <tr>
              <td><code>-N, --new-password</code></td>
              <td>Define una nueva contraseña para el usuario.</td>
            </tr>

            <tr>
              <td><code>-r, --role</code></td>
              <td>Asigna uno o más nuevos roles al usuario.</td>
            </tr>

            <tr>
              <td><code>-d, --delete-previous-roles</code></td>
              <td>Elimina los roles previamente asignados al usuario.</td>
            </tr>
          </table>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplo básico
          </h3>

          <codeBlock>
            trackit modify-user -n Alice -N newPass -M newAlice@example.com
          </codeBlock>

          <ul>
            <li>Modifica el usuario 'Alice' cambiando su contraseña a 'newPass' y su correo a 'newAlice@example.com'.</li>
          </ul>
        </section>

        <section>
          <commandTitle>
            trackit list-user
          </commandTitle>

          <p>
            El comando <code>trackit list-user</code> muestra todos los usuarios registrados en el sistema junto con sus roles y detalles de contacto.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit list-user [opciones]
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
              <td><code>-v, --verbose</code></td>
              <td>Muestra información detallada sobre cada usuario, incluyendo roles y detalles de contacto.</td>
            </tr>

            <tr>
              <td><code>-q, --quiet</code></td>
              <td>Suprime la salida estándar, mostrando solo la lista de usuarios.</td>
            </tr>

            <tr>
              <td><code>--only-errors</code></td>
              <td>Solo muestra los errores y omite otros logs.</td>
            </tr>
          </table>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplo básico
          </h3>

          <codeBlock>
            trackit list-user
          </codeBlock>

          <ul>
            <li>Muestra la lista de todos los usuarios registrados en el sistema.</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Notas importantes
          </h3>

          <ul>
            <li>Recuerda que las opciones de rol son importantes para definir el acceso de cada usuario en el sistema.</li>
            <li>Al modificar un usuario, puedes eliminar los roles anteriores utilizando la opción <code>--delete-previous-roles</code>.</li>
            <li>Para ver todos los usuarios con detalles completos, usa la opción <code>-v</code> en <code>list-user</code>.</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default UserCommandsPage;
