export default (scores, currentTurnScore, currentPlayer) => {
    const updatedScores = [...scores];
    updatedScores[currentPlayer - 1] = updatedScores[currentPlayer - 1] + currentTurnScore;
    return updatedScores;
};
