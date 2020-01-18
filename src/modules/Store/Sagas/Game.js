import {all, takeLatest, put} from 'redux-saga/effects';
import {Types as GameTypes } from '../Ducks/Game';

// Start game saga function
function* startGame({payload}) {
    yield put(payload);
}

// Generate grid saga function
function* generateGrid() {
    yield put({ payload: null });
}

// Update grid saga function
function* updateGrid({payload}) {
    yield put(payload);
}

// Restart game saga function
function* restartGame() {
    yield put({ payload: null});
}

export default all([
    takeLatest(GameTypes.START_GAME, startGame),
    takeLatest(GameTypes.GENERATE_GRID, generateGrid),
    takeLatest(GameTypes.UPDATE_GRID, updateGrid),
    takeLatest(GameTypes.RESTART_GAME, restartGame),
]);
