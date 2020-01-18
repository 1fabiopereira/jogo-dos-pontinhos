export default (rows, columns, scores) => {
    return rows * columns <= scores[0] + scores[1];
};
