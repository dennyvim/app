import React from 'react';
import { Link } from 'react-router-dom';
import './assets/footer.css'
import home from './assets/home.png'
import rank from './assets/rank.png'
import premio from './assets/premio.png'
const Footer = () => (

    <div className="menu">
        <Link to="/Classic"><img src={home} alt="home" className="home"/></Link>
        <Link to="/Classic"><img src={rank} alt="rank" className="rank"/></Link>
        <Link to='/Classic'><img src={premio} alt="premio" className="premio"/></Link>
    </div>

)

export default Footer;