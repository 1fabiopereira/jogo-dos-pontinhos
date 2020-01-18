import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {Actions as GameActions} from "../../modules/Store/Ducks/Game";

import './GameOver.style.css';

function GameOver() {
    const dispatch = useDispatch();
    const data = useSelector(reducer => reducer.game);
    const { scores, names } = data;

    const hasPlayerOneWon = scores[0] > scores[1];
    const isTie = scores[0] === scores[1];
    const winner =  hasPlayerOneWon ? names[0] : names[1];

    const [message] = useState(isTie ? `Empatou 😩🤬` : `${winner} ganhou! 🥳😎🎉`);

    // Dispatch action to restart game
    function restartGame() {
        dispatch(GameActions.restartGame());
    }

  return (
      <div className="start-menu">
        <div className="start-menu__header">
          <h3>Fim de Jogo</h3>
          <span role="img" aria-label="" aria-labelledby="" className="start-menu__app-logo">🏆</span>
            <h1 className="center">{message}</h1>
            <Link to="/" onClick={restartGame}>Sair</Link>
        </div>
      </div>
  );
}

export default GameOver;
