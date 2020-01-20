import {all} from 'redux-saga/effects';
import game from './Game';

export default function* rootSaga() {
    yield all([game]);
}
