// DNA Pairing
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

function pairElement(str) {

    //AT CG are base pairs

    //split characters into an array
    let arr = str.split('');

    //map every character to a pair in a array
    arr = arr.map(char => {
        let pair = [];
        pair.push(char);
        let missing_pair ='';
        switch (char) {
            case 'G':
                missing_pair ='C';
                break;
            case 'C':
                missing_pair = 'G';
                break;
            case 'A':
                missing_pair = 'T';
                break;
            case 'T':
                missing_pair = 'A';
                break;
            default: 
                missing_pair ='invalid';
        }
        pair.push(missing_pair);
        return pair;
    });

    return arr;
  }
  
  console.log(pairElement("GCG"));
