// Write your function here
function countAllCharacters (string) {
    let object = {};
    [...string].forEach(element => {
        object.hasOwnProperty(element)
        ? object[element] += 1
        : object[element] = 1;
    });
	return object;
}