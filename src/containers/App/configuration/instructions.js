import React from 'react';
import Footer from '../../../components/footer/footer';
import instrucciones from './assets/instrucciones.png'

const Instructions = () => {

    return(
        <section id="seccion_14" >
        <img src={instrucciones} alt="instrucciones"></img>
            <Footer></Footer>
        </section>
    );

}

export default Instructions;