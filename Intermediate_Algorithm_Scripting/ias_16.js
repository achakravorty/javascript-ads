// Steamroller
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller


function steamrollArray(arr) {
  let newArr = [];

    // newArr = arr.map(element => {
    //   if(Array.isArray(element)) {

    //   } else {
    //     return element;
    //   }
    // });

    //need recursion 
    for(let i =0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        newArr.push(...steamrollArray(arr[i]));
      } else {
        newArr.push(arr[i]);
      }
    }

    return newArr;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));


  //another solution //
  /*
  function steamrollArray(val,flatArr=[]) {
  val.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}
  */