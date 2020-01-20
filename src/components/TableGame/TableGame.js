import React from 'react';

export default (props) => {
  const {games, callback} = props;
  const keys = Object.keys(games);

  /**
   * @function players
   * @description It format players's names
   * @param game
   * @return {string}
   */
  function players(game) {
    return `${game.names[0]} x ${game.names[1]}`;
  }

  /**
   * @function scores
   * @description It format players's scores
   * @param game
   * @return {string}
   */
  function scores(game) {
    return `${game.scores[0]} x ${game.scores[1]}`;
  }

  /**
   * @function scores
   * @description The function check if the game ends
   * @param game
   * @return {string}
   */
  function complete(game) {
    return game.isGameComplete ? 'Sim' : 'Não';
  }

  // Generate table's rows
  const info = keys.map(key => {
    const date = new Date(Number(key));
    return (
      <tr key={key}>
        <td>{date.toLocaleTimeString()}</td>
        <td>{players(games[key])}</td>
        <td>{scores(games[key])}</td>
        <td>{complete(games[key])}</td>
        <td>
          <button type="submit" onClick={() => callback(key)}>
            Recarregar
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Horário</th>
          <th>Jogadores</th>
          <th>Score</th>
          <th>Finalizado</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{info}</tbody>
    </table>
  );
};
