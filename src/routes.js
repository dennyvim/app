import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeClassic from './containers/App/home/homeClassic.js'
import HomeTimed from './containers/App/home/homeTimed.js'
import GameClassic from './containers/App/game/gameClassic.js'
import GameTimed from './containers/App/game/gameTimed.js'
import Credits from './containers/App/configuration/credits.js';
import Instructions from './containers/App/configuration/instructions.js';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component = {HomeClassic}/>
                <Route path="/Timed" component = {HomeTimed}/>
                <Route path="/GameClassic" component = {GameClassic}/>
                <Route path="/GameTimed" component = {GameTimed}/>
                <Route path="/Credits" component = {Credits}/>
                <Route path="/Instructions" component = {Instructions}/>
            </Switch>
        </BrowserRouter>
        
    );
}
export default Router;