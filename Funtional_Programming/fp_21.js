// Use the every Method to Check that Every Element in an Array Meets a Criteria

/*
The every method works with arrays to check if every element passes a 
particular test. It returns a Boolean value - true if all values meet 
the criteria, false if not.
*/

function checkPositive(arr) {
    // Only change code below this line
    return arr.every(function(curr) {
        return curr > 0;
    })
  
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);