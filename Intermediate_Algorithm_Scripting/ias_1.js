// Sum All Numbers in a Range
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
function sumAll(arr) {
    arr.sort(function compareNumbers(a, b) {
        return a - b;
      }); //sort the array to have lowest number first
    let sum = 0;
    for(let i = arr[0]; i <= arr[1]; i++) {
        sum += i;
    }
    return sum;
}
  
  console.log(sumAll([5, 10]));