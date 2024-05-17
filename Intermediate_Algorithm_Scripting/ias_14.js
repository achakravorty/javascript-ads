// Smallest Common Multiple
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

function smallestCommons(arr) {
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;
  
    let upperBound = 1;
    for(let i = min; i<= max; i++) {
        upperBound *= i;
    }

    // test all multiples of max 
    for( let multiple = max; multiple <= upperBound; multiple +=max) {
        // Check if every value in range divides 'multiple'
        let divisorCount = 0;
        for (let i = min; i<= max; i++) {
             // Count divisors
            if(multiple % i ===0) {
                divisorCount++;
            }
        }
        if (divisorCount === numberDivisors) {
            return multiple;
        }
    }
  }
  
  console.log(smallestCommons([1,5]));