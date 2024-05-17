// Spinal Tap Case
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

function spinalCase(str) {
    // First, split the string by spaces and underscores
    let parts= str.split(/[\s_]+/g);

    // Then, split camelCase words within each part
    parts = parts.map(part => part.split(/(?=[A-Z])/)).flat();

    return parts.join("-").toLowerCase();
  }
  
  console.log(spinalCase('The_Andy_Griffith_Show'));


  /*

  function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

Code Explanation

    Split the string at one of the following conditions (converted to an array)
        a whitespace character [\s] is encountered
        underscore character [_] is encountered
        or is followed by an uppercase letter [(?=[A-Z])]
    Join the array using a hyphen (-)
    Lowercase the whole resulting string

  */