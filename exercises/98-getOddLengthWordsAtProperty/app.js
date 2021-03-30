// Write your function here
function getOddLengthWordsAtProperty (obj, key) {
    if (
        obj[key].length == 0 ||
        !Array.isArray(obj[key]) ||
        !obj.hasOwnProperty(key)
    ) {
        return [];
    }

    let oddWords = [];

    for (string of obj[key]) {
        if (string.length % 2 != 0 ) {
            oddWords.push(string);
        }
    }

    return oddWords.length != 0 ? oddWords : [];
}