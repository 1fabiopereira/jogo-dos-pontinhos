import React, {useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Actions as GameActions } from '../../modules/Store/Ducks/Game';

import Score from '../../components/Score/Score';
import Grid from '../../components/Grid/Grid';
import Colors from '../../modules/Colors';
import './Game.style.css';

export default () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.game);
    const {scores, names, rows, columns, isGameComplete} = data;

    // Dispatch action to restart game
    function restartGame() {
        dispatch(GameActions.restartGame());
    }

    // Dispatch action to render the grid
    function generateGrid() {
        if(window.location.href.indexOf('game') !== 0) {
            dispatch(GameActions.generateGrid());
        }
    }

    // Monitoring changes on some variables
    useEffect(() => generateGrid(), [rows, columns]);

    if (isGameComplete) {
        return <Redirect to="/game-over" />;
    }

    // Render view
    return (
        <div className="main-screen">
            <div className="main-screen__scores">
                <Score title={names[0]} color={Colors.PrimaryBarColor} value={scores[0]} />
                <Score title={names[1]} color={Colors.SecondaryBarColor} value={scores[1]} />
            </div>
            <div className="main-screen__grid">
                <Grid state={{...data}} dispatch={dispatch} />
            </div>
            <br/>
            <div className="main-screen__note">
                <Link to="/" onClick={restartGame}>SAIR</Link>
            </div>
        </div>
    );
};
