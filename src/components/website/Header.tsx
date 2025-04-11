import React, { ReactNode } from "react";
import { Link } from 'react-router-dom';

import trackitIcon from 'assets/icons/trackit-icon.png';

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitle">
                <img className="icon headerIcon" src={trackitIcon} />
                <h1 className="headerTitle headerIcon">Trackit</h1>
                <h1 className="headerSubtitle">Sistema de Control de Versiones</h1>
                
                {/* Botón de descarga en el Header */}
                <div className="buttonsInHeader">
                    <nav>
                        <Link to="/download">Descargar Trackit</Link>
                    </nav>
                    <nav>
                        <Link to="/">Más sobre Trackit</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;