import React from 'react'; 
import './assets/home.css'
import Footer from '../../../components/footer/footer.js';
import Header from '../../../components/header/header.js';
import { Link } from 'react-router-dom';
import Splash from '../../../components/splash/splash';

class HomeClassic extends React.Component{
    render(){
            return(
                <section id="seccion_1" className="inicio">
                    <a href="#modal"><img src="http://icons.iconarchive.com/icons/pixelkit/gentle-edges/128/Settings-icon.png" alt="a"className="btconfig"/></a>
                    <Header/>
                    <h1 className="titulo">REMEMBER HER</h1>
                    <div className="imgclassic" />
                    <h1 className="txtinicio">CLASSIC</h1>
                    <Link to='/GameClassic'><img src="http://icons.iconarchive.com/icons/hopstarter/button/256/Button-Play-icon.png" alt="a"className="btinicio"/></Link>
                    <Footer/>
                </section>
            );
        }
}

export default HomeClassic;