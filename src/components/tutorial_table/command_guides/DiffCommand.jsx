import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class DiffCommand extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            trackit diff
          </commandTitle>

          <p>
            El comando <code>trackit diff</code> muestra las diferencias entre archivos en distintas versiones del repositorio. Puede usarse para comparar cambios entre el área de staging y el último commit, entre archivos específicos, o entre ramas.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit diff [opciones] [archivo | commit | rama]
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
              <td><code>-s, --staged</code></td>
              <td>Muestra las diferencias de los archivos que están en el área de staging con respecto al último commit.</td>
            </tr>

            <tr>
              <td><code>-c, --cached</code></td>
              <td>Muestra las diferencias entre el commit anterior y la versión cacheada (área de staging).</td>
            </tr>

            <tr>
              <td><code>--only-errors</code></td>
              <td>Solo muestra errores, omitiendo la salida estándar.</td>
            </tr>

            <tr>
              <td><code>-q, --quiet</code></td>
              <td>Ejecuta el comando sin mostrar nada por consola (útil para scripts).</td>
            </tr>

            <tr>
              <td><code>-v, --verbose</code></td>
              <td>Muestra salida más detallada con contexto expandido.</td>
            </tr>
          </table>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplos de uso
          </h3>

          <codeBlock>
            trackit diff
          </codeBlock>
          <ul>
            <li>Muestra las diferencias entre el estado actual del repositorio y el último commit.</li>
          </ul>

          <codeBlock>
            trackit diff -s
          </codeBlock>
          <ul>
            <li>Muestra las diferencias de los archivos que ya están en el área de staging.</li>
          </ul>

          <codeBlock>
            trackit diff archivo.txt
          </codeBlock>
          <ul>
            <li>Muestra los cambios locales en <code>archivo.txt</code> desde el último commit.</li>
          </ul>

          <codeBlock>
            trackit diff main develop
          </codeBlock>
          <ul>
            <li>Compara las diferencias entre las ramas <code>main</code> y <code>develop</code>.</li>
          </ul>

          <codeBlock>
            trackit diff 12a4d3b 9efc32e
          </codeBlock>
          <ul>
            <li>Muestra las diferencias entre dos commits específicos.</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Notas adicionales
          </h3>

          <ul>
            <li>El formato del diff incluye líneas añadidas (<code>+</code>) y eliminadas (<code>-</code>).</li>
            <li>Es una herramienta útil para revisar cambios antes de hacer commit.</li>
            <li>Se pueden combinar opciones para refinar la salida.</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default DiffCommand;
