import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class CheckoutCommand extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            trackit checkout
          </commandTitle>

          <p>
            El comando <code>trackit checkout</code> permite cambiar el estado actual del repositorio a un commit específico o a una rama.
            Es útil para navegar por el historial del proyecto, probar versiones anteriores o trabajar en ramas distintas.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit checkout [opciones] &lt;Hash&gt;
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
                <code>&lt;Hash&gt;</code>
              </td>
              <td>
                Hash (completo o abreviado) del commit o rama al cual se desea cambiar.
              </td>
            </tr>

            <tr>
              <td>
                <code>-s, --sudo &lt;user&gt; &lt;psswd&gt;</code>
              </td>
              <td>
                Ejecuta el comando como otro usuario con permisos elevados.
                Si no se indican usuario y contraseña, se solicitarán de forma interactiva.
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
                Muestra información detallada del proceso de cambio de estado.
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
            Ejemplo básico
          </h3>

          <codeBlock>
            trackit checkout a1b2c3d
          </codeBlock>

          <ul>
            <li>
              Cambia el estado del repositorio al commit con hash <code>a1b2c3d</code>.
            </li>
            <li>
              Se puede usar un hash completo o abreviado.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Más Ejemplos
          </h3>

          <div className="example">
            <p>
              <b>Usar un hash completo</b>: Puedes usar el hash completo del commit para mayor precisión.
            </p>
            <codeBlock>
              trackit checkout 1234567890abcdef
            </codeBlock>
          </div>

          <div className="example">
            <p>
              <b>Usar el nombre de una rama</b>: Puedes usar el nombre de una rama para acceder a su último commit.
            </p>
            <codeBlock>
              trackit checkout development
            </codeBlock>
          </div>

          <div className="example">
            <p>
              <b>Checkout con permisos elevados</b>: Si necesitas hacer checkout como otro usuario (por ejemplo, en ramas protegidas), usá <code>--sudo</code>:
            </p>
            <codeBlock>
              trackit checkout 1234567 -s admin admin123
            </codeBlock>
          </div>

          <div className="example">
            <p>
              <b>Modo silencioso</b>: Para ejecutar sin mostrar mensajes, usá <code>--quiet</code>:
            </p>
            <codeBlock>
              trackit checkout a1b2c3d --quiet
            </codeBlock>
          </div>
        </section>

        <section>
          <h3 className="sectionTitle">
            Notas importantes
          </h3>

          <ul>
            <li>
              Al hacer checkout, se sobrescriben los archivos del directorio de trabajo con los del commit seleccionado.
            </li>
            <li>
              Se recomienda tener todos los cambios guardados antes de ejecutar este comando, pues no se mostrará un mensaje ni pedirá permisos antes de hacerlo.
            </li>
            <li>
              Si el commit incluye cambios en la estructura de directorios, estos también serán actualizados.
            </li>
            <li>
              La estructura completa del repositorio volverá a su estado anterior, nuevos ficheros desaparecerán, y ficheros antiguos perderán los cambios.
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default CheckoutCommand;
