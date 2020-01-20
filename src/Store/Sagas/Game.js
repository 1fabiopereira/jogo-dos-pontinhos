import { all, takeLatest, put, select } from 'redux-saga/effects';
import GetUpdatedState from '../../utils/GetUpdatedState';
import GenerateGrid from '../../utils/GenerateGrid';
import Storage from '../../modules/Storage';
import { Types } from '../Ducks/Game/actions';


// Saga called when start game actions is fired
function* startGame({ payload }) {
  const { rows, columns, names, grid = [] } = payload;
  const data = { rows, columns, names, scores: [0, 0], currentPlayer: 1, isGameComplete: false, grid };

  yield put({ type: Types.COMMON, payload: {...data} });
}

// Saga called when need to generate game grid
function* generateGrid() {
  const data = yield select((state) => state.game);
  const grid = yield GenerateGrid(data.rows, data.columns);

  yield put({ type: Types.COMMON, payload: {...data, grid}});
}

// Saga called when need to update game grid
function* updateGrid(action) {
  const data = yield select((state) => state.game);
  const result = yield GetUpdatedState(data, action);

  yield put({ type: Types.COMMON, payload: {...result}});
}

// Saga called when need to save game state
function* saveGame(action) {
  const data = yield select((state) => state.game);
  yield new Storage().add({...data, ...action.payload});

  yield put({type: Types.COMMON, payload: {...data, ...action.payload}});
}


export default all([
  takeLatest(Types.START_GAME, startGame),
  takeLatest(Types.UPDATE_GRID, updateGrid),
  takeLatest(Types.GENERATE_GRID, generateGrid),
  takeLatest(Types.SAVE_GAME, saveGame)
]);
