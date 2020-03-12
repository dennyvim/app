import React from 'react';
import './assets/header.css'
import { Link } from 'react-router-dom';

const Header = () => (
<aside id="modal" className="modal">
    <a href='/Classic' ><img src="http://icons.iconarchive.com/icons/hopstarter/button/256/Button-Close-icon.png" alt="" className="close-modal"/></a>
    <div className="content-modal">
        <header>
            <h2>Configuraciones</h2>            
        </header>
        <article>
             <Link to='/Credits'>    
                <button id="pestanacreditos" className="pestana">
                    <img src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/256/User-blue-icon.png" alt="" className="icon"/>
                    <h4 className="tituloconfig">Créditos</h4>
                </button> 
            </Link>
            <Link to ='/Instructions'>
                <button id="pestanainstrucciones"className="pestana">
                    <img src="http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Actions-help-about-icon.png" alt="" className="icon"/>
                    <h4 className="tituloconfig">Instrucciones</h4>
                </button> 
            </Link>
        </article>
    </div>
</aside>
);

export default Header;
