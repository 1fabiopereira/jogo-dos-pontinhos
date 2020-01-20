export const Types = {
  START_GAME: '@game/START_GAME',
  GENERATE_GRID: '@game/GENERATE_GRID',
  UPDATE_GRID: '@game/UPDATE_GRID',
  RESTART_GAME: '@game/RESTART_GAME',
  SAVE_GAME: '@game/SAVE',
  LOAD_GAME: '@game/LOAD_GAME',
  COMMON: '@game/COMMON'
};

const startGame = data => {
  return {
    type: Types.START_GAME,
    payload: { ...data }
  };
};

const generateGrid = () => ({ type: Types.GENERATE_GRID });

const updateGrid = (row, column, type) => ({
  type: Types.UPDATE_GRID,
  payload: { row, column, type }
});

const restartGame = () => ({ type: Types.RESTART_GAME });

const saveGame = ({ code }) => ({
  type: Types.SAVE_GAME,
  payload: { code }
});

const loadGame = payload => ({
  type: Types.LOAD_GAME,
  payload: { ...payload }
});

const common = payload => ({
  type: Types.COMMON,
  payload: { ...payload }
});

export default {
  startGame,
  generateGrid,
  updateGrid,
  restartGame,
  saveGame,
  loadGame,
  common
};
