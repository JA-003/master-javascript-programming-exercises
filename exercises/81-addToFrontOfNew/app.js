// Write your function here

let input = [1, 2];

function addToFrontOfNew(array, element) {
    let arrayCopy = array.map(x => x);
    arrayCopy.unshift(element);
    return arrayCopy;
}

console.log(addToFrontOfNew(input, 3));