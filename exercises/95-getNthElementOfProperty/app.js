// Write your function here
function getNthElementOfProperty (obj, key, index) {
    if(!obj.hasOwnProperty(key) || obj[key].length == 0 || obj[key].length <= index || !Array.isArray(obj[key])) {
        return undefined;
    } else {
        return obj[key][index];
    }
}