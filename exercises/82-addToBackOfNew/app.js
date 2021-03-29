// Write your function here

let input = [1, 2];

function addToBackOfNew(array, element) {
    let arrayClone = array.map(x => x);
    arrayClone.push(element);
    return arrayClone;
}

let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]