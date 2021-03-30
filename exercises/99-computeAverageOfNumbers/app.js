// Write your function here
function computeAverageOfNumbers (array) {
    return array.length == 0 ? 0 : array.reduce((sum, currentValue) => sum + currentValue) / array.length;
}