import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { Provider } from 'react-redux';

import store from '../../Store';
import Intro from '../../views/Intro';
import Game from '../../views/Game';
import GameOver from '../../views/GameOver';
import List from '../../views/List';

export default () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Intro />
                </Route>
                <Route exact path="/game">
                    <Game />
                </Route>
                <Route exact path="/game-over">
                    <GameOver />
                </Route>
                <Route exact path="/list">
                    <List />
                </Route>
            </Switch>
        </Router>
    </Provider>
);
