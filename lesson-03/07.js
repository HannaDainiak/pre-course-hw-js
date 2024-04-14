​const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

const removeOddNumbersIn2DArray = (arr) => {
    return arr.map((subArray) => removeOddNumbers(subArray));
};

const result = removeOddNumbersIn2DArray(numbers);

console.log(result);
