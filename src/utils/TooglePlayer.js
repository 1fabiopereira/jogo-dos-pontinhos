export default (currentPlayer) => {
    const updatedPlayer = currentPlayer === 1 ? 2 : 1;
    return updatedPlayer;
};
