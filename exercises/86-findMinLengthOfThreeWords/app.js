// Write your function here
function findMinLengthOfThreeWords (word1, word2, word3) {
    let arrayToSort = [ word1.length, word2.length, word3.length];
    return Math.min(...arrayToSort);
}