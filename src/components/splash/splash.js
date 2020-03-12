import React from 'react';

import './assets/splash.css'
import splash from './assets/splash.gif'
class Splash extends React.Component{
    render(){
        return(
            <div>
                <img src={splash} alt='splash'></img>
            </div>
            );
    }
}
export default Splash;