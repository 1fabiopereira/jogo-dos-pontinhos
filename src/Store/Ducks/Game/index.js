import {Types} from './actions';

// Game Initial State
const initialState = {
    rows: 3,
    columns: 3,
    currentPlayer: 1,
    names: ['Player 1', 'Player 2'],
    scores: [0, 0],
    grid: [],
    type: '',
    isGameComplete: false,
    code: null
};

// Game Reducer
export default function index(state = initialState, action) {
    switch (action.type) {
        case Types.RESTART_GAME: {
            return {...state, ...initialState};
        }

        case Types.LOAD_GAME: {
            return {...state, ...action.payload, isGameComplete: false};
        }

        default:
            return {...state, ...action.payload};
    }
}
