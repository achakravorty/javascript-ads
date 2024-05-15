// Sorted Union
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

/*
Write a function that takes two or more arrays and returns a new array of unique 
values in the order of the original provided arrays.
*/

function uniteUnique(arr) {
    const args = [...arguments];
    // const union = (a,b) => b.filter(num => !a.includes(num));

    let newArray = [];
    for(let i=0; i < args.length; i++) {
        for(let j =0; j < args[i].length; j++) {
            if(!newArray.includes(args[i][j])) {
                newArray.push(args[i][j]);
            }
        }
    }

    return newArray;
}

// console.log(uniteUnique([1,3,2,3]))
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //returns [1, 3, 2, 5, 4]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); //returns [1, 3, 2, 5, 4]
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));