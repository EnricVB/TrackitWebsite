import React, { ReactNode } from "react";
import { Link } from 'react-router-dom';

import trackitIcon from 'assets/icons/trackit-icon.png';

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitle">
                <nav>
                    <Link to="/"><img className="icon headerIcon" src={trackitIcon} /></Link>
                </nav>

                <nav >
                    <Link to="/" style={{textDecoration: "none"}}><h1 className="headerTitle headerIcon">Trackit</h1></Link>
                </nav>

                <h1 className="headerSubtitle">Sistema de Control de Versiones</h1>

                {/* Botón de descarga en el Header */}
                <div className="buttonsInHeader">
                    <nav>
                        <Link to="/download">Descargar Trackit</Link>
                    </nav>
                    <nav>
                        <Link to="/commandguide">Más sobre Trackit</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;