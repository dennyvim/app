import React from 'react'; 
import './assets/home.css'
import Footer from '../../../components/footer/footer.js';
import Header from '../../../components/header/header.js';
import { Link } from 'react-router-dom';
import empezar from './assets/empezar.png'
import configuracion from './assets/configuracion.png'
import titulo from './assets/titulo.png'

class HomeClassic extends React.Component{
    render(){
            return(
                <section id="seccion_1" className="inicio">
                    <a href="#modal"><img src={configuracion} alt="configuracion"className="btconfig"/></a>
                    <Header/>
                    <img src={titulo} alt="titulo" className="titulo"></img>
                    <div className="imgclassic"/>
                    <h1 className="txtinicio">CLASSIC</h1>
                    <Link to='/GameClassic'><img src={empezar} alt="empezar"className="btinicio"/></Link>
                    <Footer/>
                </section>
            );
        }
}
export default HomeClassic;