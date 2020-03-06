import React from 'react'; 
import './assets/home.css'
import Footer from '../../../components/footer/footer.js';
import Header from '../../../components/header/header.js';
import { Link } from 'react-router-dom';

class HomeClassic extends React.Component{
    render(){

        return(
            <section id="seccion_1" className="inicio">
                <a href="#modal"><img src="http://icons.iconarchive.com/icons/pixelkit/gentle-edges/128/Settings-icon.png" alt="a"className="btconfig"/></a>
                <Header/>
                <h1 className="titulo">REMEMBER HER</h1>
                <div className="imgclassic" />
                <h1 className="txtinicio">CLASSIC</h1>
                <Link to="/GameClassic"><img src="http://icons.iconarchive.com/icons/hopstarter/button/256/Button-Play-icon.png" alt="a"className="btinicio"/></Link>
                <Footer/>
                <Link to='/Timed'><img src="http://icons.iconarchive.com/icons/icons8/ios7/512/Arrows-Right-icon.png" alt="a" className="arrowclasico"/></Link>
            </section>
        );
    }
}

export default HomeClassic;