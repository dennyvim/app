import React from 'react';
import { Link } from 'react-router-dom';
import './assets/footer.css'
const Footer = () => (

    <div className="menu">
        <Link to="/"><img src="http://icons.iconarchive.com/icons/icons8/ios7/512/Very-Basic-Home-icon.png" alt="" className="home"/></Link>
        <Link to="/"><img src="http://icons.iconarchive.com/icons/icons8/ios7/512/Messaging-Star-icon.png" alt="" className="rank"/></Link>
        <Link to='/'><img src="http://icons.iconarchive.com/icons/icons8/ios7/512/Military-Military-Medal-icon.png" alt="" className="premio"/></Link>
    </div>

)

export default Footer;