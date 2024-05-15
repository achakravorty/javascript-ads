// Split a String into an Array Using the split Method

/*
The split method splits a string into an array of strings. It takes
 an argument for the delimiter, which can be a character to use to 
 break up the string or a regular expression. For example, if the 
 delimiter is a space, you get an array of words, and if the 
 delimiter is an empty string, you get an array of each character 
 in the string.
*/

function splitify(str) {
    // Only change code below this line
    return str.split(/\W/);
  
    // Only change code above this line
}
  
splitify("Hello World,I-am code");


const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
