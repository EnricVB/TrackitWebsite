import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class StageCommand extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            trackit stage
          </commandTitle>

          <p>
            El comando <code>trackit stage</code> permite <b>preparar archivos</b> para ser incluidos en el próximo commit.
            Esto permite indicarle a trackit cuales serán los archivos de la proxima versión.
          </p>
          <p>
            Por defecto, <code>trackit stage</code> no incluye los ficheros ignorados por <code>trackit ignore</code>.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit stage [opciones] &lt;ruta&gt;
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
                <code>&lt;ruta&gt;</code>
              </td>
              <td>
                Ruta del archivo o directorio que se desea preparar para commit. En caso de incluir un directorio, todos los ficheros y subdirectorios serán incluidos.
              </td>
            </tr>

            <tr>
              <td>
                <code>--force</code>
              </td>
              <td>
                Agrega los ficheros al Staging Area aunque estén siendo ignorados.
              </td>
            </tr>

            <tr>
              <td>
                <code>-q, --quiet</code>
              </td>
              <td>
                Ejecuta sin mostrar información por consola.
              </td>
            </tr>

            <tr>
              <td>
                <code>--only-errors</code>
              </td>
              <td>
                Muestra únicamente errores.
              </td>
            </tr>

            <tr>
              <td>
                <code>-v, --verbose</code>
              </td>
              <td>
                Muestra más información, incluyendo archivos agregados y advertencias.
              </td>
            </tr>
          </table>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplo básico
          </h3>

          <codeBlock>
            trackit stage src/main.kt
          </codeBlock>

          <ul>
            <li>
              Agrega el archivo <code>src/main.kt</code> al área de staging.
            </li>
            <li>
              Estará listo para ser incluido en el próximo commit.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Más Ejemplos
          </h3>

          <div className="example">
            <p>
              <b>Agregar un archivo específico</b>: Si solo quieres añadir un archivo específico al staging, puedes hacerlo de la siguiente manera:
            </p>
            <codeBlock>
              trackit stage archivo.txt
            </codeBlock>
          </div>

          <div className="example">
            <p>
              <b>Agregar un directorio completo</b>: Para agregar todo el contenido de un directorio, simplemente usa la ruta del directorio:
            </p>
            <codeBlock>
              trackit stage carpeta/
            </codeBlock>
          </div>

          <div className="example">
            <p>
              <b>Forzar el staging de un archivo ignorado</b>: Si el archivo está en el archivo de ignorados, puedes forzar su adición usando la opción <code>--force</code>:
            </p>
            <codeBlock>
              trackit stage --force archivo_ignorado.log
            </codeBlock>
          </div>
        </section>


        <section>
          <h3 className="sectionTitle">
            Notas importantes
          </h3>

          <ul>
            <li>
              Este comando <b>prepara archivos para el próximo commit</b>. Pueden agregarse archivos individuales o directorios completos.
            </li>
            <li>
              Si un archivo está ignorado, <b>no se añadirá al staging</b> salvo que uses la opción <code>--force</code>.
            </li>
            <li>
              Los directorios se procesan de forma <b>recursiva</b>. Todos los archivos dentro serán añadidos al área de staging.
            </li>
            <li>
              La opción <code>--force</code> permite forzar el agregado de archivos ignorados. <b>Úsalo con precaución</b>.
            </li>
            <li>
              El área de staging es <b>local</b> y se guarda en <code>.trackit/Staging.index</code>.
            </li>
            <li>
              Si modificás un archivo después de hacer staging, deberás volver a hacer <code>trackit stage</code> para esa versión actualizada.
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default StageCommand;