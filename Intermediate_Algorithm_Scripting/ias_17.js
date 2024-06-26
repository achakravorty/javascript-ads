// Binary Agents
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents

function binaryAgent(str) {

    //split the str into indiviudal binray codes
    let binaryList = str.split(' ')

    let decimalList = binaryList.map(bin => binaryToDecimal(bin));

    let letterList = decimalList.map(dec => String.fromCharCode(dec));

    return letterList.join('');
  }

  function binaryToDecimal(str) {
    let binarySplit = str.split('').reverse();

    let decimal = 0;
    for(let i =0; i < binarySplit.length; i++) {
        decimal += parseInt(binarySplit[i]) * Math.pow(2, i);
    }

    return decimal;
  }
  
//   console.log(binaryToDecimal('01000001'));
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));


