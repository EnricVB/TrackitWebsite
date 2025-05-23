import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class PushCommand extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            trackit push
          </commandTitle>

          <p>
            El comando <code>trackit push</code> permite subir la rama actual del repositorio a un servidor remoto. Valida el estado de sincronización entre el repositorio local y el remoto, y transfiere los objetos faltantes si se cumplen las condiciones.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit push
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
              <td><code>--branch &lt;nombre-rama&gt;</code></td>
              <td>Nombre de la rama que se desea enviar al remoto. En caso de tenerlo en blanco se utiliza la rama actual.</td>
            </tr>
            <tr>
              <td><code>--all-branches</code></td>
              <td>Se envian todas las ramas al remoto.</td>
            </tr>
            <tr>
              <td><code>--user &lt;nombre-usuario&gt;</code></td>
              <td>Se envía el usuario indicado. En caso de tenerlo en blanco se envían todos los usuarios.</td>
            </tr>
            <tr>
              <td><code>--tag</code></td>
              <td>Se envía la etiqueta nombrada. En caso de estar en blanco se envían todas las etiquetas al repositorio remoto.</td>
            </tr>
            <tr>
              <td><code>--all</code></td>
              <td>Se envían todos los objetos al remoto.</td>
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
            Descripción
          </h3>

          <ul>
            <li>Lee la configuración de dirección de push configurada previamente con <code>trackit config</code>.</li>
            <li>Verifica si la rama remota está sincronizada, adelantada, atrasada o divergente.</li>
            <li>En caso de que el repositorio local esté adelantado o solo exista localmente, se transfiere la información necesaria.</li>
            <li>Si faltan datos en el remoto y la opción de autopush no está activa, el comando falla.</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Condiciones de ejecución
          </h3>

          <ul>
            <li><strong>Falla</strong> si la rama remota está detrás, divergente o solo existe en remoto: se requiere hacer pull primero.</li>
            <li><strong>Falla</strong> si la rama remota está sincronizada: no hay cambios que empujar.</li>
            <li><strong>Éxito</strong> si la rama local está por delante o solo existe localmente y no hay datos faltantes, o si autopush está habilitado.</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplos de uso
          </h3>

          <codeBlock>
            trackit push
          </codeBlock>
          <ul>
            <li>Sube la rama actual al repositorio remoto si no hay conflictos ni datos faltantes (o si autopush está activo).</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Notas adicionales
          </h3>

          <ul>
            <li>El comando requiere que la dirección remota de push esté correctamente configurada.</li>
            <li>La sincronización remota se realiza usando el protocolo y socket configurado en la rama actual.</li>
            <li>Para evitar errores de sincronización, se recomienda hacer <code>trackit fetch</code> antes de un push.</li>
            <li>Si usas <code>trackit push</code> se enviará la rama actual.</li>
            <li>Si usas <code>trackit push --all-tags --user username</code> se enviarán todas las etiquetas y el usuario, pero no la rama actual.</li>
            <li>La opción --all-branches no es compatible con las demás opciones.</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default PushCommand;
