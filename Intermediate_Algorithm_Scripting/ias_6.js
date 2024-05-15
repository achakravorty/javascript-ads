// Pig Latin

/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or 
consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
*/

function translatePigLatin(str) {

    //2-word begins with vowel
    //add way at end
    const firstChar = str.charAt(0).toLowerCase();
    if(/^[aeiou]/.test(firstChar)) {
        return str + "way";
    } 
    //1-word begins with consonant 
    //remove first consonant or cluster of consonants and move it to the end 
    //add ay to it
    else if (/^[a-z]$/i.test(firstChar)) {
        const firstVowelIndex = str.search(/[aeiou]/);
        // If a vowel is found, split the word
        if (firstVowelIndex !== -1) {
            const beforeVowel = str.slice(0, firstVowelIndex);
            const afterVowel = str.slice(firstVowelIndex);
            return afterVowel + beforeVowel + "ay";
        } else {
            // If no vowel is found, return the whole word as the first part and an empty string as the second part
            return str + "ay";
        }
    }
    return str;
  }
  
console.log(translatePigLatin("glove"));

//another solution//
/*
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");
*/

/*
function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

*/