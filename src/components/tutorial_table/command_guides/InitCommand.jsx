import React from "react";
import 'styles/global.css';
import 'styles/guide.css';

class InitCommand extends React.Component {
  render() {
    return (
      <div className="command_tutorial">
        <section>
          <commandTitle>
            trackit init
          </commandTitle>

          <p>
            El comando <code>trackit init</code> es el punto de partida para trabajar con Trackit.
            Se utiliza para <b>inicializar un nuevo repositorio</b> en el directorio actual.
            Al ejecutarlo, Trackit crea la estructura necesaria para comenzar a versionar archivos, gestionar ramas, usuarios, permisos, etc.
          </p>
        </section>

        <section>
          <h3 className="sectionTitle">
            Sintaxis
          </h3>

          <codeBlock>
            trackit init [opciones]
          </codeBlock>
        </section>

        <section>
          <h3 className="sectionTitle">
            Opciones disponibles
          </h3>

          <table>
            <tr>
              <th>
                Opción
              </th>
              <th>
                Descripción
              </th>
            </tr>

            <tr>
              <td>
                <code>-q, --quiet</code>
              </td>
              <td>
                Ejecuta <b>sin mostrar información por consola</b>. Ideal para scripts automatizados.
              </td>
            </tr>

            <tr>
              <td>
                <code>--only-errors</code>
              </td>
              <td>
                <b>Muestra únicamente los errores</b>, ocultando los mensajes informativos.
              </td>
            </tr>
            <tr>
              <td>
                <code>-v, --verbose</code>
              </td>
              <td>
                Muestra los <b>stacktrace</b> en caso de error.
              </td>
            </tr>
          </table>
        </section>

        <section>
          <h3 className="sectionTitle">
            Ejemplo básico
          </h3>

          <codeBlock>
            trackit init
          </codeBlock>

          <ul>
            <li>
              <b>Inicializa</b> un repositorio en la <b>ruta actual</b>, agregando las carpetas y ficheros necesarios, como .trackit
            </li>
            <li>
              Pedira un <b>usuario y contraseña</b> que será el usuario 'dueño' del repositorio
            </li>
            <li>
              Crea automáticamente la <b>rama main</b>, sobre la que se trabajará, junto a 3 roles 'owner', 'project manager' y 'undefined'.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="sectionTitle">
            Notas importantes
          </h3>

          <ul>
            <li>
              No necesitas conexión a Internet para inicializar un repositorio.
            </li>
            <li>
              <code>trackit init</code> es completamente local. Puedes trabajar sin servidor hasta 
              que quieras sincronizar con un repositorio remoto.
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default InitCommand;