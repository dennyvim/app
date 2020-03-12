import React from 'react';
import Footer from '../../../components/footer/footer';
import creditos from './assets/creditos.png'
const Credits = () => {
    return(
        <section id="seccion_15" >
            <img src={creditos} alt="creditos"></img>
            <Footer></Footer>
        </section>
    );

}
export default Credits;