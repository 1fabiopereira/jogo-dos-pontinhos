import React, {useState} from 'react';
import { Redirect} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Actions as GameActions } from '../../modules/Store/Ducks/Game';

import './Intro.style.css';

function Intro() {
  const [rows, setRows] = useState('');
  const [columns, setColumns] = useState('');
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  // Dispatch action to start game
  function startGame() {
    const rowsInt = parseInt(rows || 0, 10);
    const columnsInt = parseInt(columns || 0, 10);

    if (!player1 || !player2) {
         window.alert('😭 O nome dos jogadores deve ser definido.');
         return;
    }

    if (rowsInt <= 0 || rowsInt > 10 || columnsInt <= 0 || columnsInt > 10) {
      window.alert('😭 O limite para linhas ou colunas é 10.');
      return;
    }

    dispatch(GameActions.startGame({ rows: rowsInt, columns: columnsInt, names: [player1, player2] }));
    setRedirect(true);
  }

  if (redirect) {
      return <Redirect to="/game" />;
  }

  return (
      <div className="start-menu">
        <div className="start-menu__header">
          <span role="img" aria-label="" aria-labelledby="" className="start-menu__app-logo">🕹️</span>
          <h3>Jogo dos Pontinhos</h3>
        </div>
          <div className="start-menu__input">
              <input type="input" value={player1} placeholder="Jogador 1" onChange={e => setPlayer1(e.target.value)} />
          </div>
          <div className="start-menu__input">
              <input type="input" value={player2} placeholder="Jogador 2" onChange={e => setPlayer2(e.target.value)} />
          </div>
        <div className="start-menu__input">
          <input type="input" value={rows} placeholder="Nº de Linhas" onChange={e => setRows(e.target.value)} />
        </div>
        <div className="start-menu__input">
          <input type="input" value={columns} placeholder="Nº de Colunas" onChange={e => setColumns(e.target.value)} />
        </div>
        <div className="start-menu__button">
          <button type="submit" onClick={startGame}>Começar</button>
        </div>
      </div>
  );
}

export default Intro;
