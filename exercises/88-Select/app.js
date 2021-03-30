// Write your function here
function select (arr, obj) {
    let newObj = {};
    for (string of arr) {
        if (obj.hasOwnProperty(string)) { newObj[string] = obj[string] };
    }
    return newObj;
}