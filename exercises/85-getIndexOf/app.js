// Write your function here

function getIndexOf (character, string) {
    for (position in string) {
        if (string[position].toLowerCase() === character.toLowerCase()) {
            return position;
        }
    }
    return -1;
}