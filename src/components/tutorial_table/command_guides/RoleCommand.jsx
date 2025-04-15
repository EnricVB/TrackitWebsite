import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class RoleCommand extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            trackit role
          </commandTitle>

          <p>
            Los comandos <code>trackit create-role</code>, <code>trackit modify-role</code>, y <code>trackit list-role</code> se utilizan para gestionar los roles dentro del sistema Trackit. Estos roles definen qué permisos tienen los usuarios sobre el repositorio y las ramas dentro del mismo.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit create-role [opciones]
          </codeBlock>
          <codeBlock>
            trackit modify-role [opciones]
          </codeBlock>
          <codeBlock>
            trackit list-role [opciones]
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
              <td><code>-b, --branch-permission</code></td>
              <td>Asigna permisos específicos para ramas. Ejemplo: --branch-permission main rw.</td>
            </tr>

            <tr>
              <td><code>-h, --help</code></td>
              <td>Muestra este mensaje de ayuda y sale.</td>
            </tr>

            <tr>
              <td><code>-l, --permission-level</code></td>
              <td>Define el nivel de permisos del rol. No puede ser igual o mayor que el nivel de usuario.</td>
            </tr>

            <tr>
              <td><code>-n, --name</code></td>
              <td>Nombre del rol.</td>
            </tr>

            <tr>
              <td><code>--only-errors</code></td>
              <td>Muestra solo los errores y omite los logs.</td>
            </tr>

            <tr>
              <td><code>-r, --role-permission</code></td>
              <td>Asigna permisos de rol, como modificar roles, crear usuarios, asignar roles, etc. Ejemplo: mus-.</td>
            </tr>

            <tr>
              <td><code>-s, --sudo</code></td>
              <td>Ejecuta el comando como un usuario especificado.</td>
            </tr>

            <tr>
              <td><code>-v, --verbose</code></td>
              <td>Muestra logs detallados.</td>
            </tr>

            <tr>
              <td><code>-V, --version</code></td>
              <td>Muestra la información de la versión y sale.</td>
            </tr>

            <tr>
              <td><code>-rb, --remove-branch-permission</code></td>
              <td>Elimina permisos de rama. Ejemplo: --remove-branch-permission main.</td>
            </tr>

            <tr>
              <td><code>-o, --overwrite</code></td>
              <td>Sobrescribe los permisos actuales de un rol.</td>
            </tr>
          </table>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplo de creación de rol
          </h3>

          <codeBlock>
            trackit create-role --name Developer --permission-level 1 --role-permission mus- --branch-permission main rw
          </codeBlock>

          <ul>
            <li>Crea un rol de "Developer" con nivel de permiso 1.</li>
            <li>Asigna permisos de rol para modificar roles (mus-) y permisos de rama en "main" con lectura/escritura (rw).</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplo de modificación de rol
          </h3>

          <codeBlock>
            trackit modify-role -n Developer -l 2 -r mus- -b feature rw
          </codeBlock>

          <ul>
            <li>Modifica el rol "Developer" para cambiar el nivel de permiso a 2.</li>
            <li>Agrega permisos de rama para la rama "feature" con lectura/escritura (rw).</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplo de eliminación de permisos de rama
          </h3>

          <codeBlock>
            trackit modify-role -n Developer -rb feature
          </codeBlock>

          <ul>
            <li>Elimina los permisos para la rama "feature" en el rol "Developer".</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplo de listado de roles
          </h3>

          <codeBlock>
            trackit list-role
          </codeBlock>

          <ul>
            <li>Lista todos los roles disponibles con sus niveles de permisos y permisos asociados a las ramas.</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Notas importantes
          </h3>

          <ul>
            <li>Los permisos de rol deben ser menores al nivel de permiso del usuario que realiza la operación.</li>
            <li>Se pueden agregar múltiples permisos de rama utilizando varias veces la opción <code>--branch-permission</code>.</li>
            <li>La opción <code>--overwrite</code> sobrescribe los permisos existentes en un rol.</li>
            <li>Si no se proporcionan permisos de rama, el rol no tendrá acceso a ninguna rama.</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default RoleCommand;
