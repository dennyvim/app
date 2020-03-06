import React from 'react'; 
import Footer from '../../../components/footer/footer.js';

class GameTimed extends React.Component{
    render(){
        return(
            <section id="seccion_5" className="nivelesclassic">
                <h1 className="titulo">REMEMBER HER</h1>
                <h1 className="txtclassic">TIMED</h1>
                <button id="level1classic" className="level">1</button>
                <button id="level2classic" className="level">2</button>
                <button id="level3classic" className="level">3</button>
                <button id="level4classic" className="level">4</button>     
                <Footer/>
            </section>

        );
    }
}
export default GameTimed;