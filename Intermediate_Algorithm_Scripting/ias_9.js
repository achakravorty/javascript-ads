// Missing letters
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters


function fearNotLetter(str) {
    const beginChar = str[0];
    const endChar = str.charAt(str.length-1);

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const beginIndex = alphabet.indexOf(beginChar);
    const endIndex = alphabet.indexOf(endChar);

    let origRange = alphabet.substring(beginIndex, endIndex + 1);

    let string = str.split('');
    // origRange = origRange.split('');
    // origRange = origRange.filter(char => !string.includes(char));

    return origRange.split('').filter(char => !string.includes(char))[0];

  }
  
console.log(fearNotLetter("abce"));
