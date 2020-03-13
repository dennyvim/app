import React from 'react'; 
import Footer from '../../../components/footer/footer.js';
import { Link } from 'react-router-dom';
import clasico from './assets/clasico.png'
import './assets/gameClassic.css'
class GameClassic extends React.Component{
    render(){
        return(
            <section id="seccion_5" className="nivelesclassic">
                <img src={clasico} alt="clasico" className="clasico"></img>
                <Link to='/LevelOne'><button id="level1classic" className="level">1</button></Link>
                <Link to='/LevelTwo'><button id="level2classic" className="level">2</button></Link>
                <Link to='/LevelThree'><button id="level3classic" className="level">3</button></Link>   
                <Footer/>
            </section>

        );
    }
}
export default GameClassic;