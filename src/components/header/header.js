import React from 'react';

import './assets/header.css'

const Header = () => (
<aside id="modal" className="modal">
    <a href="#seccion_1" ><img src="http://icons.iconarchive.com/icons/hopstarter/button/256/Button-Close-icon.png" alt="" className="close-modal"/></a>
    <div className="content-modal">
        <header>
            <h2>Configuraciones</h2>            
        </header>
        <article>
            <button id="pestanacreditos" className="pestana">
                <img src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/256/User-blue-icon.png" alt="" className="icon"/>
                <h4 className="tituloconfig">Créditos</h4>
            </button> 
            <button id="pestanainstrucciones"className="pestana">
                <img src="http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Actions-help-about-icon.png" alt="" className="icon"/>
                <h4 className="tituloconfig">Instrucciones</h4>
            </button> 
        </article>
    </div>
</aside>
);

export default Header;
