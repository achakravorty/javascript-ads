// Wherefore art thou

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

/*
Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value 
pairs (second argument). Each name and value pair of the source object 
has to be present in the object from the collection if it is to be 
included in the returned array.
*/

function whatIsInAName(collection, source) {
    //for each object, check if it contains all the name and valur pairs of source
    // if so then add it to the resulting array
    // const resultArr = [];

    // collection.forEach(element => {
    //     source.forEach((key, value) => {
    //         if(element.hasOwnProperty(key)) {
    //             if(element.key == value) {
    //                 resultArr.push(element);
    //             }
    //         }
    //     }
    //     )
    // });

    const resultArr = collection.filter(element => {
        for(let key in source) {
            if(!element.hasOwnProperty(key) || element[key] != source[key]) {
                return false;
            }
        }
        return true;
    });
    return resultArr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
//must return [{ first: "Tybalt", last: "Capulet" }]

// another solution //
/*

function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  const sourceKeys = Object.keys(source);

  return collection
    .filter(obj => sourceKeys
      .every(key => obj[key] === source[key]));
}

Code Explanation

    We filter through the collection using .filter().
    We return a Boolean value for the .filter() method by checkif if .every() source key 
    value matches the current object’s value.

*/ 