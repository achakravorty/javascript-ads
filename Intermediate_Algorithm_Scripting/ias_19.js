// Arguments Optional
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

function addTogether() {
    const [first, second] = arguments;

    if(typeof(first) === "number") {
        if(typeof(second) === "number") {
            return first + second;
        }
        if(arguments.length === 1) return (second) => addTogether(first, second);
    }



    // if(args.length ==0) {
    //     return undefined;
    // }
    // if(args.length ==1 && typeof(args[0]) == "number") {
    //     const sumTwoAnd = function(y) {
    //         return args[1] + y;
    //     }
    //     return sumTwoAnd;
    // }

    // if(typeof(args[0]) != "number" || typeof(args[1]) != "number") {
    //     return undefined;
    // }

    // return args[0] + args[1];
  }
  
  console.log(addTogether(2,3));
  console.log(addTogether(5));
  console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
  console.log(addTogether(23.4, 30));