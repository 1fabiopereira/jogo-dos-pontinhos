import GenerateGrid from '../../../utils/GenerateGrid';
import GetUpdatedState from '../../../utils/GetUpdatedState';

// Game Types
export const Types = {
    START_GAME: '@game/START_GAME',
    GENERATE_GRID: '@game/GENERATE_GRID',
    UPDATE_GRID: '@game/UPDATE_GRID',
    RESTART_GAME: '@game/RESTART_GAME',
};

// Game Action Creators
export const Actions = {
    startGame: ({ rows, columns, names }) => ({
        type: Types.START_GAME,
        payload: { rows, columns, names },
    }),

    generateGrid: () => ({
        type: Types.GENERATE_GRID,
        payload: {},
    }),

    updateGrid: (row, column, type) => ({
        type: Types.UPDATE_GRID,
        payload: {row, column, type},
    }),

    restartGame: () => ({
        type: Types.RESTART_GAME,
        payload: {},
    })
};

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
};

// Game Reducer
export default function game(state = initialState, action) {
    switch (action.type) {
        case Types.START_GAME: {
            return {...state, ...action.payload};
        }

        case Types.GENERATE_GRID: {
            return {...state, grid: GenerateGrid(state.rows, state.columns)};
        }

        case Types.UPDATE_GRID: {
            return {...state, ...GetUpdatedState(state, action)};
        }

        case Types.RESTART_GAME: {
            return {...state, ...initialState};
        }

        default:
            return state;
    }
}
