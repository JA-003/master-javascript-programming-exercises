// Write your function here

let obj = {
  key: [1, 2, 3]
};

function getAverageOfElementsAtProperty(object, key) {
    return !object.hasOwnProperty(key) || !Array.isArray(object[key]) || object[key].length == 0
    ? 0
    : object[key].reduce((accumulator, currentValue) => accumulator + currentValue, 0) / object[key].length;
}

console.log(getAverageOfElementsAtProperty(obj, 'key'));