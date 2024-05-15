// Diff Two Arrays

/*
Compare two arrays and return a new array with any items only found in 
one of the two given arrays, but not both. In other words, return the 
symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {

    // so - remove the duplicates 
    
    for(let i =0; i < arr1.length; i++) {
        for(let j=0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                delete arr1[i];
                delete arr2[j];
            }
        }
    }
    let newArr = arr1.concat(arr2);
    return newArr.filter(value => value!=null);
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


//   another solution //
//   merge the array and remove duplicates 
//   The best way to go about the callback function is to check if the number 
//   from the new merged array is not in both original arrays and return it
  function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }