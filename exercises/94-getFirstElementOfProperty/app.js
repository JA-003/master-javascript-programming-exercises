// Write your function here
function getFirstElementOfProperty (obj, key) {
    if(!obj.hasOwnProperty(key) || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return [];
    } else {
        return obj[key][0];
    }
}