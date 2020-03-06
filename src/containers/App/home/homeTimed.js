import React from 'react'; 
import './assets/home.css'
import Footer from '../../../components/footer/footer.js';
import Header from '../../../components/header/header.js';
import { Link } from 'react-router-dom';

class HomeTimed extends React.Component{
    render(){
        return(
            <section id="seccion_3" className="timed">
            <a href="#modal"><img src="http://icons.iconarchive.com/icons/pixelkit/gentle-edges/128/Settings-icon.png" alt="a" className="btconfig"/></a>
                <Header/>
                    <h1 className="titulo">REMEMBER HER</h1>
                    <div className="imgclassic"/>
                    <h1 className="txttimed">TIMED</h1>
                    <Link to="/GameTimed"><img src="http://icons.iconarchive.com/icons/hopstarter/button/256/Button-Play-icon.png" alt="a"className="btinicio"/></Link>
                    <Link to='/'><img src="http://icons.iconarchive.com/icons/icons8/ios7/512/Arrows-Left-icon.png" alt="a" className="arrowtimed"/></Link>
                <Footer/>
            </section>
        );
    }
}
export default HomeTimed;