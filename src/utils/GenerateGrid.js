import GridBlockObject from "./GridBlockObject";

export default (rows, columns) => {
    const grid = [];
    let i; let j; let rowData;

    for (i = 0; i < columns; i++) {
        rowData = [];
        for (j = 0; j <= rows; j++) {
            const isLastRow = j === rows;
            rowData.push(GridBlockObject(j, i, 0, isLastRow ? null : 0, isLastRow ? null : 0));
        }
        grid.push(rowData);
    }

    // Last row
    rowData = [];
    for (j = 0; j < rows; j++) {
        rowData.push(GridBlockObject(j, i, null, 0, null));
    }

    // Last row and Last column, just dot.
    rowData.push(GridBlockObject(j, i, null, null, null));
    grid.push(rowData);

    return grid;
};
