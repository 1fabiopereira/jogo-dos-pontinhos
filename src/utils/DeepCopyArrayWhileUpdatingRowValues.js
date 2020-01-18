export default (array, row, column, valueToBeUpdatedAtRow) => {
    return Object.assign([...array], {
        [column]: Object.assign([...array[column]], {
            [row]: valueToBeUpdatedAtRow,
        }),
    });
};
