import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import GameActions from '../../Store/Ducks/Game/actions';
import './Intro.style.css';

function Intro() {
  const [rows, setRows] = useState('');
  const [columns, setColumns] = useState('');
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  /**
   * @function start
   * @description Function that check all variables and it redirect the user to the Game.
   * @return {void}
   */
  function start() {
    const rowsInt = parseInt(rows, 10);
    const columnsInt = parseInt(columns, 10);

    if (!player1 || !player2) {
      window.alert('😭 O nome dos jogadores deve ser definido.');
      return;
    }

    if (isNaN(rowsInt) || isNaN(columnsInt)) {
      window.alert(
        '😭 Os campos Nº de Linhas e Nº de colunas devem ser números.'
      );
      return;
    }

    if (rowsInt <= 0 || rowsInt > 10 || columnsInt <= 0 || columnsInt > 10) {
      window.alert('😭 O limite para linhas ou colunas é 10.');
      return;
    }

    dispatch(
      GameActions.startGame({
        columns: columnsInt,
        names: [player1, player2],
        rows: rowsInt
      })
    );

    setRedirect(true);
  }

  // Redirect user to the Game view
  if (redirect) {
    return <Redirect to="/game" />;
  }

  return (
    <div className="intro">
      <div className="intro__header">
        <span
          role="img"
          aria-label=""
          aria-labelledby=""
          className="intro__app-logo"
        >
          🕹️
        </span>
        <h3>Jogo dos Pontinhos</h3>
      </div>
      <div className="intro__input">
        <input
          type="input"
          value={player1}
          placeholder="Jogador 1"
          onChange={e => setPlayer1(e.target.value)}
        />
      </div>
      <div className="intro__input">
        <input
          type="input"
          value={player2}
          placeholder="Jogador 2"
          onChange={e => setPlayer2(e.target.value)}
        />
      </div>
      <div className="intro__input">
        <input
          type="input"
          value={rows}
          placeholder="Nº de Linhas"
          onChange={e => setRows(e.target.value)}
        />
      </div>
      <div className="intro__input">
        <input
          type="input"
          value={columns}
          placeholder="Nº de Colunas"
          onChange={e => setColumns(e.target.value)}
        />
      </div>
      <div className="intro__button">
        <button type="submit" onClick={start}>
          Começar
        </button>
      </div>
      <div className="intro__button">
        <Link to="/list" type="submit">
          Lista de Jogos
        </Link>
      </div>
    </div>
  );
}

export default Intro;
