// Caesars Cipher
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

function rot13(str) {

    let origStr = "";

    const alphaList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    //traverse each character of string
    for(let i = 0; i < str.length; i++) {
        //check if character is in alphabet list
        let char = str.charAt(i);
        if(alphaList.includes(char)) {
        //find index of it
            let index = alphaList.indexOf(char);
            //convert to original char
            origStr += alphaList[(index + 26 - 13) % 26];
        } else {
            origStr += char;
        }
    }
    return origStr;
}

console.log("S");
console.log("S".charCodeAt(0));
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));

