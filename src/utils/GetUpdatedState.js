import DeepCopyArrayWhileUpdatingRowValues from './DeepCopyArrayWhileUpdatingRowValues';
import GetUpdatedScoresWithCurrentTurnScore from './GetUpdatedScoresWithCurrentTurnScore';
import IsGameCompleted from './IsGameCompleted';
import TogglePlayer from './TooglePlayer';

export default (state, action) => {
    const { currentPlayer, grid, scores } = state;
    const { row, column, type } = action.payload;

    let currentTurnScore = 0;

    const isTopBarUpdated = type === 'top';
    const currentBlockState = grid[column][row];
    const hasAlreadyBeenChangedBefore = isTopBarUpdated ? currentBlockState.top !== 0 : currentBlockState.left !== 0;

    if (hasAlreadyBeenChangedBefore) {
        return state;
    }

    const top = { top: currentPlayer };
    const left = { left: currentPlayer };
    const updatedBlockState = Object.assign(currentBlockState, isTopBarUpdated ? top : left);
    let updatedGrid = DeepCopyArrayWhileUpdatingRowValues(state.grid, row, column, updatedBlockState);

    let shouldTogglePlayer = true;

    const currentBlock = updatedBlockState;
    let isNotPresentOnEdge = false;

    if (isTopBarUpdated) {
        const totalColumns = state.columns;
        isNotPresentOnEdge = column < totalColumns;
    } else {
        const totalRows = state.rows;
        isNotPresentOnEdge = row < totalRows;
    }

    if (isNotPresentOnEdge) {
        const bottomBlock = grid[column + 1][row];
        const rightBlock = grid[column][row + 1];
        const isCurrentBlockUpdated = updatedBlockState.left !== 0 && updatedBlockState.top !== 0 && bottomBlock.top !== 0 && rightBlock.left !== 0;

        if (isCurrentBlockUpdated) {
            shouldTogglePlayer = false;
            currentTurnScore += 1;
            updatedGrid = DeepCopyArrayWhileUpdatingRowValues(
                state.grid,
                row,
                column,
                Object.assign(updatedBlockState, { completedBy: currentPlayer })
            );
        }
    }

    if (isTopBarUpdated) {
        if (column > 0) {
            const topBlock = grid[column - 1][row];
            const topRightBlock = grid[column - 1][row + 1];
            const isTopBlockUpdated = topBlock.left !== 0 && topBlock.top !== 0 && currentBlock.top !== 0 && topRightBlock.left !== 0;

            if (isTopBlockUpdated) {
                shouldTogglePlayer = false;
                currentTurnScore += 1;
                updatedGrid = DeepCopyArrayWhileUpdatingRowValues(
                    state.grid,
                    row,
                    column - 1,
                    Object.assign(topBlock, { completedBy: currentPlayer })
                );
            }
        }
    } else if (row > 0) {
        const leftBlock = grid[column][row - 1];
        const bottomLeftBlock = grid[column + 1][row - 1];
        const isLeftBlockUpdated = leftBlock.left !== 0 && leftBlock.top !== 0 && bottomLeftBlock.top !== 0 && currentBlock.left !== 0;

        if (isLeftBlockUpdated) {
            currentTurnScore += 1;
            shouldTogglePlayer = false;
            updatedGrid = DeepCopyArrayWhileUpdatingRowValues(
                state.grid,
                row - 1,
                column,
                Object.assign(leftBlock, { completedBy: currentPlayer })
            );
        }
    }

    const updatedScores = GetUpdatedScoresWithCurrentTurnScore(scores, currentTurnScore, currentPlayer);
    const isGameComplete = IsGameCompleted(state.rows, state.columns, updatedScores);

    return {

        ...state,
        grid: updatedGrid,
        currentPlayer: shouldTogglePlayer ? TogglePlayer(currentPlayer) : currentPlayer,
        scores: updatedScores,
        isGameComplete
    };
};
