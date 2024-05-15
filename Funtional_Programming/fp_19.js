// Combine an Array into a String Using the join Method

function sentensify(str) {
    // Only change code below this line
    const arr = str.split(/\W/);
    return arr.join(" ");
    // Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));