function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
}
// arrayManipulation.js
function formatArrayStrings(stringArr, numberArr) {
    return stringArr.map((str, index) => {
        if (numberArr[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}
