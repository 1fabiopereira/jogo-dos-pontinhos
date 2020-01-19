import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {Actions as GameActions} from "../../modules/Store/Ducks/Game";

import './GameOver.style.css';

function GameOver() {
    const dispatch = useDispatch();
    const data = useSelector(reducer => reducer.game);
    const { scores, names, rows, columns } = data;

    const hasPlayerOneWon = scores[0] > scores[1];
    const isTie = scores[0] === scores[1];
    const winner =  hasPlayerOneWon ? names[0] : names[1];

    const [message] = useState(isTie ? `Empatou 😩🤬` : `${winner} ganhou! 🥳😎🎉`);

    // Dispatch action to restart game
    function endGame() {
        dispatch(GameActions.restartGame());
    }

  // Dispatch action to restart game
  function restartGame() {
    dispatch(GameActions.startGame({rows, columns, names}));
    dispatch(GameActions.generateGrid());
  }

  return (
      <div className="start-menu">
        <div className="start-menu__header">
          <h3>Fim de Jogo</h3>
          <span role="img" aria-label="" aria-labelledby="" className="start-menu__app-logo">🏆</span>
            <h1 className="start-menu__center start-menu__font-40px">{message}</h1>
          <div className="game-page__note">
            <Link className="start-menu__bg-purple" to="/game" onClick={restartGame}>REINICIAR</Link>
          </div>
          <div className="game-page__note">
            <Link to="/" onClick={endGame}>SAIR</Link>
          </div>
        </div>
      </div>
  );
}

export default GameOver;
