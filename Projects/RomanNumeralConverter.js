// Roman Numeral Converter 
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

function convertToRoman(num) {
    let romanNum = "";
    
    // 1.Compare given nmver with the base value in order
    // 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
    // 2.Divide the base number by largest base value the 
    // corresponding base symbol will be repeated quotient 
    // times, the remainder will then become the number for 
    // future division and repetitions.The process will be 
    // repeated until the number becomes zero.
    
    const numberList = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    const symbolList = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let i=12;

    while(num > 0) {
        let div = Math.floor(num/numberList[i]); //quotient
        num = num % numberList[i]; //remainder
        while(div--) {
            romanNum += symbolList[i];
        }
        i--;
    }
    return romanNum;
}

   
console.log(convertToRoman(36));
