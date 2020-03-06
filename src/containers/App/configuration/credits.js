import React from 'react';
import Footer from '../../../components/footer/footer';

const Credits = () => {

    return(
        <section id="seccion_15" >
            <div id="credito1" className="credito">
                <img src="http://icons.iconarchive.com/icons/thesquid.ink/free-flat-sample/1024/snowman-icon.png" alt="" className="imgcredito"/>
                <p className="txtcredito">Mi nombre es Denny Villalobos Estudiante de 7mo semestre de ingeniería de sistemas e informática</p>
            </div>
            <div id="credito2" className="credito">
                <img src="http://icons.iconarchive.com/icons/thesquid.ink/free-flat-sample/1024/owl-icon.png" alt="" className="imgcredito"/>
                <p className="txtcredito">Mi nombre es Diana Valentina Sepúlveda estudiante de 7mo semestre de ingeniería de sistemas e informática</p>
            </div>  
            <Footer></Footer>
        </section>
    );

}

export default Credits;