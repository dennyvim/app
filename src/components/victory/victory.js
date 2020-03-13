import React from 'react'; 
import './assets/victory.css';
import { Link } from 'react-router-dom';
import cerrar from './assets/cerrar.png'


class Victory extends React.Component{
    render(){
            return(
            <section>
            <div id="modal">
                <div id="modalcontent">
                    <header id="titulovictory">
                    <h1 id="txtvictory">¡GANASTE!</h1> 
                    </header>
                    <article id="bodyvictory">
                        <Link to="/Classic" id="btnvictory">Continuar</Link>
                    </article>
                </div>
            </div>
            </section>
            );
        }
}
export default Victory;