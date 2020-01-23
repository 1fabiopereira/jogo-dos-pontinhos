export const Types = {
  START_GAME: '@game/START_GAME',
  GENERATE_GRID: '@game/GENERATE_GRID',
  UPDATE_GRID: '@game/UPDATE_GRID',
  RESTART_GAME: '@game/RESTART_GAME',
  SAVE_GAME: '@game/SAVE',
  LOAD_GAME: '@game/LOAD_GAME',
  COMMON: '@game/COMMON'
};

// Start game action creator
const startGame = data => {
  return {
    type: Types.START_GAME,
    payload: { ...data }
  };
};

// Generate grid action creator
const generateGrid = () => ({ type: Types.GENERATE_GRID });

// Update grid action creator
const updateGrid = (row, column, type) => ({
  type: Types.UPDATE_GRID,
  payload: { row, column, type }
});

// Restart game action creator
const restartGame = () => ({ type: Types.RESTART_GAME });

// Save game action creator
const saveGame = ({ code }) => ({
  type: Types.SAVE_GAME,
  payload: { code }
});

// Load game action creator
const loadGame = payload => ({
  type: Types.LOAD_GAME,
  payload: { ...payload }
});

// Common actions
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
