// Write your function here

function getAllElementsButNth(array, position) {
    return array.splice(position, 1);
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']