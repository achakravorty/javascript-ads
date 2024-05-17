// Palindrome Checker
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker


function palindrome(str) {
    let oneStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split(' ').join('');
    // let strArray = oneStr.split('');
    const reversed = oneStr.split('').toReversed().join('');
    return oneStr === reversed;
}

console.log(palindrome("_eye"));
console.log(palindrome("race CAR"));
console.log(palindrome(palindrome("My age is 0, 0 si ega ym.")));