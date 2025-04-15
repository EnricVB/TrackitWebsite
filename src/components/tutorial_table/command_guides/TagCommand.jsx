import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class TagCommands extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            Gestión de etiquetas en Trackit
          </commandTitle>
          <p>
            Las etiquetas (<code>tags</code>) permiten identificar versiones específicas del repositorio,
            facilitando su acceso o clasificación. Trackit soporta etiquetas simples (sin mensaje) y complejas (con mensaje).
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">Comando: <code>trackit create-tag</code></h3>

          <p>
            Crea una etiqueta nueva, simple o compleja, y la asigna a uno o varios commits.
          </p>

          <codeBlock>
            trackit create-tag -n &lt;nombre&gt; [-m &lt;mensaje&gt;] [-c &lt;commit&gt;...]
          </codeBlock>

          <table>
            <tr><th>Opción</th><th>Descripción</th></tr>
            <tr><td><code>-n, --name</code></td><td>Nombre de la etiqueta (obligatorio).</td></tr>
            <tr><td><code>-m, --message</code></td><td>Mensaje descriptivo para una etiqueta compleja (opcional).</td></tr>
            <tr><td><code>-c, --commit</code></td><td>Uno o varios hashes de commit a etiquetar (opcional, usa HEAD por defecto).</td></tr>
            <tr><td><code>-s, --sudo</code></td><td>Ejecutar como otro usuario con permisos elevados.</td></tr>
            <tr><td><code>-q, --quiet</code></td><td>No muestra logs.</td></tr>
            <tr><td><code>--only-errors</code></td><td>Solo muestra errores.</td></tr>
            <tr><td><code>-v, --verbose</code></td><td>Muestra información detallada.</td></tr>
            <tr><td><code>-h, --help</code></td><td>Muestra la ayuda.</td></tr>
          </table>

          <h4 className="subsectionTitle">Ejemplos:</h4>
          <ul>
            <li><code>trackit create-tag -n v1.0.0 -m "Primera versión estable"</code><br />Crea una etiqueta compleja.</li>
            <li><code>trackit create-tag -n hotfix-123 -c a1b2c3</code><br />Crea una etiqueta simple sobre un commit específico.</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">Comando: <code>trackit assign-tag</code></h3>

          <p>
            Asigna una etiqueta existente a uno o varios commits adicionales.
          </p>

          <codeBlock>
            trackit assign-tag -n &lt;nombre&gt; -c &lt;commit&gt;...
          </codeBlock>

          <table>
            <tr><th>Opción</th><th>Descripción</th></tr>
            <tr><td><code>-n, --name</code></td><td>Nombre de la etiqueta a asignar.</td></tr>
            <tr><td><code>-c, --commit</code></td><td>Commits a los que se asignará la etiqueta.</td></tr>
            <tr><td><code>-s, --sudo</code></td><td>Ejecutar como otro usuario.</td></tr>
            <tr><td><code>-q, --quiet</code></td><td>No muestra logs.</td></tr>
            <tr><td><code>--only-errors</code></td><td>Solo muestra errores.</td></tr>
            <tr><td><code>-v, --verbose</code></td><td>Modo detallado.</td></tr>
          </table>

          <h4 className="subsectionTitle">Ejemplo:</h4>
          <ul>
            <li><code>trackit assign-tag -n v1.0.0 -c 123456 789abc</code><br />Asigna la etiqueta <code>v1.0.0</code> a dos commits.</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">Comando: <code>trackit list-tags</code></h3>

          <p>
            Lista todas las etiquetas del repositorio.
          </p>

          <codeBlock>
            trackit list-tags
          </codeBlock>

          <table>
            <tr><th>Opción</th><th>Descripción</th></tr>
            <tr><td><code>-s, --sudo</code></td><td>Ejecutar como otro usuario.</td></tr>
            <tr><td><code>-q, --quiet</code></td><td>No muestra logs.</td></tr>
            <tr><td><code>--only-errors</code></td><td>Solo muestra errores.</td></tr>
            <tr><td><code>-v, --verbose</code></td><td>Modo detallado.</td></tr>
          </table>

          <h4 className="subsectionTitle">Ejemplo:</h4>
          <ul>
            <li><code>trackit list-tags</code><br />Muestra todas las etiquetas creadas en el repositorio.</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">Usar etiquetas al hacer commit</h3>

          <p>
            Puedes crear un commit y etiquetarlo directamente usando la opción <code>--tag</code>.
          </p>

          <codeBlock>
            trackit commit -t &lt;etiqueta&gt;... "Título" "Mensaje"
          </codeBlock>

          <table>
            <tr><th>Opción</th><th>Descripción</th></tr>
            <tr><td><code>-t, --tag</code></td><td>Una o más etiquetas a aplicar al nuevo commit.</td></tr>
          </table>

          <h4 className="subsectionTitle">Ejemplo:</h4>
          <ul>
            <li>
              <code>trackit commit -t hotfix-23 "Fix crash" "Resolved null pointer issue in LoginService"</code><br />
              Crea un commit y le asigna automáticamente la etiqueta <code>hotfix-23</code> (como etiqueta simple).
            </li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">Notas importantes</h3>
          <ul>
            <li>Las etiquetas deben tener nombres únicos.</li>
            <li>Puedes asignar múltiples commits a la misma etiqueta, pero una etiqueta solo puede apuntar a una lista concreta de commits, no a ramas.</li>
            <li>Las etiquetas simples no tienen mensaje; las complejas sí.</li>
            <li>La opción <code>--tag</code> al hacer commit siempre crea etiquetas simples.</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default TagCommands;
