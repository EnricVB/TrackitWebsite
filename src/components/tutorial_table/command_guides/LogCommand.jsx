import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class LogCommand extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            trackit log
          </commandTitle>

          <p>
            El comando <code>trackit log</code> muestra el historial de commits del repositorio. Se puede filtrar por autor, mensaje, fechas, y también se puede personalizar el formato de salida.
            Es ideal para inspeccionar el historial de cambios, revisar cuándo y por qué se hicieron ciertos commits, o para buscar contribuciones de un autor específico.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit log [opciones]
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
              <td><code>-a, --author=&lt;autor&gt;</code></td>
              <td>Filtra los commits realizados por un autor específico.</td>
            </tr>
            <tr>
              <td><code>-f, --format=&lt;formato&gt;</code></td>
              <td>Personaliza el formato de salida de los commits.</td>
            </tr>
            <tr>
              <td><code>-l, --limit=&lt;cantidad&gt;</code></td>
              <td>Limita la cantidad de commits mostrados.</td>
            </tr>
            <tr>
              <td><code>-m, --message=&lt;mensaje&gt;</code></td>
              <td>Filtra los commits que contienen el texto especificado en el título o mensaje.</td>
            </tr>
            <tr>
              <td><code>-S, --since=&lt;fecha&gt;</code></td>
              <td>Muestra commits desde la fecha indicada (formato YYYY-MM-DD).</td>
            </tr>
            <tr>
              <td><code>-u, --until=&lt;fecha&gt;</code></td>
              <td>Muestra commits hasta la fecha indicada.</td>
            </tr>
            <tr>
              <td><code>--only-errors</code></td>
              <td>Solo muestra errores, omitiendo cualquier log informativo.</td>
            </tr>
            <tr>
              <td><code>-q, --quiet</code></td>
              <td>No muestra logs ni mensajes por consola.</td>
            </tr>
            <tr>
              <td><code>-v, --verbose</code></td>
              <td>Muestra más información detallada sobre cada commit.</td>
            </tr>
          </table>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplos de uso
          </h3>

          <codeBlock>
            trackit log
          </codeBlock>
          <ul>
            <li>Muestra todos los commits del repositorio desde el más reciente al más antiguo.</li>
          </ul>

          <codeBlock>
            trackit log -a "juanperez"
          </codeBlock>
          <ul>
            <li>Filtra el historial para mostrar solo los commits realizados por el autor "juanperez".</li>
          </ul>

          <codeBlock>
            trackit log -m "login"
          </codeBlock>
          <ul>
            <li>Muestra commits cuyo título o mensaje contenga la palabra "login".</li>
          </ul>

          <codeBlock>
            trackit log -S 2024-01-01 -u 2024-12-31
          </codeBlock>
          <ul>
            <li>Muestra commits realizados durante el año 2024.</li>
          </ul>

          <codeBlock>
            trackit log -l 5
          </codeBlock>
          <ul>
            <li>Muestra solamente los 5 commits más recientes.</li>
          </ul>

          <codeBlock>
            trackit log -f "hash,author,date,title"
          </codeBlock>
          <ul>
            <li>Muestra el log en un formato personalizado con solo el hash, autor, fecha y título del commit.</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Notas adicionales
          </h3>

          <ul>
            <li>Los filtros pueden combinarse entre sí para refinar la búsqueda.</li>
            <li>El formato de salida puede personalizarse usando campos separados por comas: <code>hash</code>, <code>author</code>, <code>date</code>, <code>title</code>, <code>message</code>, etc.</li>
            <li>El comando no modifica el estado del repositorio.</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default LogCommand;
