// Search and Replace
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

function myReplace(str, before, after) {
    if(before[0] == before[0].toLowerCase()) {
        after = after[0].toLowerCase() + after.substr(1);
    } else {
        after = after[0].toUpperCase() + after.substr(1);
    }
    return str.replace(before, after);
    
}
  
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));