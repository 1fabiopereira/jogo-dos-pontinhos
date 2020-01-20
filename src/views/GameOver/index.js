import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GameActions from '../../Store/Ducks/Game/actions';
import './GameOver.style.css';

function GameOver() {
  const dispatch = useDispatch();
  const data = useSelector(reducer => reducer.game);
  const { scores, names, rows, columns, code } = data;

  const hasPlayerOneWon = scores[0] > scores[1];
  const isTie = scores[0] === scores[1];
  const winner = hasPlayerOneWon ? names[0] : names[1];
  const [message] = useState(isTie ? `Empatou 😩🤬` : `${winner} ganhou! 🥳😎🎉`);

  /**
   * @function out
   * @description Function called before redirect user out the game,
   * this function clear all config passed on game start
   * @return {void}
   */
  function out() {
    dispatch(GameActions.restartGame());
  }

  /**
   * @function restart
   * @description Function called when the game is restarted,
   * this function set config of columns, names and rows
   * and generate a new empty grid
   * @return {void}
   */
  function restart() {
    dispatch(GameActions.startGame({ columns, names, rows }));
    dispatch(GameActions.generateGrid());
  }

  /**
   * @function save
   * @param {string | number | null} game - Code of saved's game
   * @description Function called when we wanna save the game
   */
  function save(game = null) {
    dispatch(GameActions.saveGame({ code: game }));
    window.alert('💾 Jogo salvo com sucesso!');
  }

  return (
    <div className="game-over">
      <div className="game-over__header">
        <h3>Fim de Jogo</h3>
        <span
          role="img"
          aria-label=""
          aria-labelledby=""
          className="game-over__app-logo"
        >
          🏆
        </span>
        <h1 className="game-over__center game-over__font-40px">{message}</h1>
        <div className="game-over__note">
          <Link
            className="game-over__bg-purple"
            to="/game"
            onClick={restart}
          >
            REINICIAR
          </Link>
        </div>
        <div className="game-over__note">
          <button type="submit" onClick={() => save(code)}>
            SALVAR
          </button>
        </div>
        <br />
        <div className="game-over__note">
          <Link to="/" onClick={out}>
            SAIR
          </Link>
          <div className="game-over__button">
            <Link to="/list" type="submit">
              Lista de Jogos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameOver;
