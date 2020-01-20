import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import GameActions from '../../Store/Ducks/Game/actions';
import Table from '../../components/TableGame/TableGame';

import Storage from '../../modules/Storage';
import './List.style.css';

function GameOver() {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);

  let games = null;

  /**
   * @function reload
   * @description reload saved game
   * @param {string | number} game - Code of saved game
   * @return {void}
   */
  function reload(game) {
    dispatch(GameActions.loadGame(games[game]));
    setRedirect(true);
  }

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
   * @function renderTable
   * @description Function that render table of saved games
   * @return {Node} table
   */
  function renderTable() {
    games = new Storage().get();
    return <Table games={games} callback={reload} />;
  }

  // Redirect to game view
  if (redirect) {
    return <Redirect to="/game" />;
  }

  return (
    <div>
      <div>
        <h3>Jogos Salvos</h3>
      </div>
      <div>{renderTable()}</div>
      <div className="out">
        <Link to="/" onClick={out}>
          SAIR
        </Link>
      </div>
    </div>
  );
}

export default GameOver;
