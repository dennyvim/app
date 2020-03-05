import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeClassic from './containers/App/home/homeClassic.js'
import HomeTimed from './containers/App/home/homeTimed.js'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component ={HomeClassic}/>
                <Route path="/Timed" component  ={HomeTimed}/>
            </Switch>
        </BrowserRouter>
        
    );
}
export default Router;