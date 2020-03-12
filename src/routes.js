import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeClassic from './containers/App/home/homeClassic.js'
import GameClassic from './containers/App/game/gameClassic.js'
import GameTimed from './containers/App/game/gameTimed.js'
import Credits from './containers/App/configuration/credits.js';
import Instructions from './containers/App/configuration/instructions.js';
import LevelOne from './containers/App/game/levelsClassic/levelOne.js';
import LevelTwo from './containers/App/game/levelsClassic/levelTwo.js';
import LevelThree from './containers/App/game/levelsClassic/levelThree.js';
import LevelFour from './containers/App/game/levelsClassic/levelFour.js';
import Home from './containers/App/home/home.js';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component = {Home}/>
                <Route path="/Classic" component = {HomeClassic}/>
                <Route path="/GameClassic" component = {GameClassic}/>
                <Route path="/GameTimed" component = {GameTimed}/>
                <Route path="/Credits" component = {Credits}/>
                <Route path="/Instructions" component = {Instructions}/>
                <Route path="/LevelOne" component = {LevelOne}/>
                <Route path="/LevelTwo" component = {LevelTwo}/>
                <Route path="/LevelThree" component = {LevelThree}/>
                <Route path="/LevelFour" component = {LevelFour}/>
            </Switch>
        </BrowserRouter>
        
    );
}
export default Router;