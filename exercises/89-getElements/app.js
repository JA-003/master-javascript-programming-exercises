// Write your function here
function getElementsThatEqual10AtProperty (obj, key) {
    if(!obj.hasOwnProperty(key) || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return [];
    } else {
        let filteredArray = obj[key].filter(x => x);
        return filteredArray;
    }
}