import React from 'react';
import './assets/victory.css'
import { Link } from 'react-router-dom';
import modaltitulo from './assets/modaltitulo.png'

class Victory extends React.Component{
    render(){
            return(
                <section id="trasfondomodal">
                    <div id="fondomodal">
                        <div id="modalcontent">
                            <img src={modaltitulo}></img>
                            <Link to="/GameClassic" id="btnmodal">Continuar</Link>
                        </div>
                    </div>
                </section>
            );
        }
    };
    
    export default Victory;