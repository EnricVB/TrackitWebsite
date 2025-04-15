import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class CommitCommand extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            trackit commit
          </commandTitle>

          <p>
            El comando <code>trackit commit</code> permite guardar los cambios realizados en el repositorio. Al ejecutar este comando, los archivos que han sido agregados al área de staging se guardan en el historial del repositorio, creando un nuevo commit.
          </p>
          <p>
            Cada commit incluye un mensaje descriptivo, el autor, la fecha y los cambios realizados en los archivos.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit commit [opciones] &lt;titulo&gt; &lt;mensaje&gt;
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
                <code>&lt;TITLE&gt;</code>
              </td>
              <td>
                Indica el titulo del commit. Este campo es obligatorio.
              </td>
            </tr>

            <tr>
              <td>
                <code>&lt;MESSAGE&gt;</code>
              </td>
              <td>
                Indica el mensaje del commit.
              </td>
            </tr>

            <tr>
              <td>
                <code>-a, -all</code>
              </td>
              <td>
                Agrega todos los ficheros modificados al staging area antes de realizar el commit.
              </td>
            </tr>

            <tr>
              <td>
                <code>-c, --confirmer &lt;user&gt; &lt;psswd&gt;</code>
              </td>
              <td>
                Permite confirmar el commit como otro usuario, para así tener permisos elevados.
                En caso de no indicar usuario y contraseña, se pedirá de forma interactiva.
              </td>
            </tr>

            <tr>
              <td>
                <code>-s, --sudo &lt;user&gt; &lt;psswd&gt;</code>
              </td>
              <td>
                Permite cambiar el dueño del commit a otro usuario, para así tener permisos elevados.
                En caso de no indicar usuario y contraseña, se pedirá de forma interactiva.
              </td>
            </tr>

            <tr>
              <td>
                <code>-t, --tag &lt;tags&gt;...</code>
              </td>
              <td>
                Agrega etiquetas al commit, o las crea en caso de no existir.
              </td>
            </tr>

            <tr>
              <td>
                <code>-q, --quiet</code>
              </td>
              <td>
                Ejecuta el comando sin mostrar información por consola.
              </td>
            </tr>

            <tr>
              <td>
                <code>--only-errors</code>
              </td>
              <td>
                Muestra únicamente los errores que ocurran durante la ejecución.
              </td>
            </tr>

            <tr>
              <td>
                <code>-v, --verbose</code>
              </td>
              <td>
                Muestra información detallada sobre el commit, incluyendo los archivos que han sido comiteados.
              </td>
            </tr>
          </table>
        </section>

        <section>
          <h3 className="sectionTitle">
            Más Ejemplos
          </h3>

          <div className="example">
            <p>
              <b>Crear un commit con todos los archivos modificados</b>: Si deseas agregar automáticamente todos los archivos modificados al staging, usa la opción <code>-a</code>:
            </p>
            <codeBlock>
              trackit commit "Corregir errores" "Se corrigieron errores en la validación de formularios" -a
            </codeBlock>
          </div>

          <div className="example">
            <p>
              <b>Confirmar un commit como otro usuario</b>: Si deseas realizar el commit como otro usuario con permisos elevados, usa la opción <code>-c</code>:
            </p>
            <codeBlock>
              trackit commit "Actualizar dependencias" "Se actualizaron las dependencias del proyecto" -c usuario password
            </codeBlock>
          </div>

          <div className="example">
            <p>
              <b>Agregar etiquetas al commit</b>: Puedes agregar etiquetas al commit con la opción <code>-t</code>:
            </p>
            <codeBlock>
              trackit commit "Añadir mejoras" "Se mejoró la interfaz de usuario" -t "v2.1" "UI-update"
            </codeBlock>
          </div>
        </section>

        <section>
          <h3 className="sectionTitle">
            Notas importantes
          </h3>

          <ul>
            <li>
              El comando <b>trackit commit</b> solo incluirá los archivos que han sido añadidos previamente al área de staging con el comando <code>trackit stage</code>, a menos que se utilice la opción <code>--all</code>.
            </li>
            <li>
              El <b>mensaje del commit</b> es obligatorio y debe describir de manera clara los cambios realizados.
            </li>
            <li>
              El comando no realizará un <b>push</b> automáticamente. Una vez realizado el commit, puedes utilizar <code>trackit push</code> para enviar los cambios al repositorio remoto.
            </li>
            <li>
              Al realizar un commit, se guardan los cambios de manera permanente en el historial del repositorio. Aunque hagas checkout a una versión anterior, no se perderán nunca los cambios o su orden.
            </li>
            <li>
              La opción <code>--confirmer</code> permite a un usuario con mayores permisos realizar commit sobre los cambios de un usuario con permisos inferiores.
            </li>
            <li>
              La opción <code>--sudo</code> permite indicar que usuario ha sido el responsable de los cambios.
            </li>
            <li>
              Si no hay ficheros en el staging area, o el usuario no tiene permisos para escribir en la rama indicada, el comando fallará.
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default CommitCommand;