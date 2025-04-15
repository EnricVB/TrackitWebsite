import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class GarbageCollectorCommand extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            trackit garbage-collector
          </commandTitle>

          <p>
            El comando <code>trackit garbage-collector</code> se utiliza para limpiar y eliminar los objetos no referenciados en el repositorio, optimizando el espacio de almacenamiento. Es ideal para mantener el repositorio limpio y eficiente.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit garbage-collector [opciones]
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
              <td><code>--only-errors</code></td>
              <td>Muestra solo los errores durante la ejecución, omitiendo otros detalles.</td>
            </tr>

            <tr>
              <td><code>-q, --quiet</code></td>
              <td>Ejecuta el comando sin mostrar salida por consola.</td>
            </tr>

            <tr>
              <td><code>-s, --sudo &lt;usuario&gt; &lt;contraseña&gt;</code></td>
              <td>Ejecuta el comando con privilegios de otro usuario.</td>
            </tr>

            <tr>
              <td><code>-v, --verbose</code></td>
              <td>Muestra información detallada durante la ejecución del comando.</td>
            </tr>
          </table>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplo básico
          </h3>

          <codeBlock>
            trackit garbage-collector
          </codeBlock>

          <ul>
            <li>Elimina objetos no referenciados para liberar espacio en el repositorio.</li>
            <li>Realiza una limpieza básica sin ninguna opción adicional.</li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Notas importantes
          </h3>

          <ul>
            <li>Este comando no afecta archivos o commits que estén en uso o referenciados.</li>
            <li>Es recomendable ejecutar este comando de manera regular para mantener el repositorio limpio.</li>
            <li>Recuerda revisar los archivos que quieras mantener antes de ejecutar la limpieza.</li>
            <li>El comando no requiere confirmación, pero es buena práctica realizar un respaldo antes de ejecutar cambios masivos.</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default GarbageCollectorCommand;
