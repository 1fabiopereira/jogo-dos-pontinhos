import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import GameActions from '../../Store/Ducks/Game/actions';

import Score from '../../components/Score/Score';
import Grid from '../../components/Grid/Grid';
import Colors from '../../modules/Colors';
import './Game.style.css';

export default () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.game);
  const { scores, names, rows, columns, isGameComplete, code } = data;

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

  /**
   * @function generateGrid
   * @description Function that generate grid when rows or columns change
   */
  function generateGrid() {
    if (window.location.href.indexOf('game') !== -1 && !code) {
      dispatch(GameActions.generateGrid());
    }
  }

  // Monitoring changes on rows and columns
  useEffect(() => generateGrid(), [rows, columns]);

  // Redirect to game over page when game was finish
  if (isGameComplete) {
    return <Redirect to="/game-over" />;
  }

  return (
    <div className="game">
      <div className="game__scores">
        <Score
          title={names[0]}
          color={Colors.PrimaryBarColor}
          value={scores[0]}
        />
        <Score
          title={names[1]}
          color={Colors.SecondaryBarColor}
          value={scores[1]}
        />
      </div>
      <div className="game__grid">
        <Grid state={{ ...data }} dispatch={dispatch} />
      </div>
      <br />
      <div className="game__note">
        <button type="submit" onClick={restart}>
          REINICIAR
        </button>
      </div>
      <div className="game__note">
        <button type="submit" onClick={() => save(code)}>
          SALVAR
        </button>
      </div>
      <div className="game__note">
        <Link to="/" onClick={out}>
          SAIR
        </Link>
        <div className="game__button">
          <Link to="/list" type="submit">
            Lista de Jogos
          </Link>
        </div>
      </div>
    </div>
  );
};
