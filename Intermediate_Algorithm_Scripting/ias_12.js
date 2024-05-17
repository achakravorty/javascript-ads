// Sum All Odd Fibonacci Numbers
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

function sumFibs(num) {

    let fibArr = [];
    let n1 =0, n2=1, nextTerm=0;
    nextTerm = n1 + n2;
    fibArr.push(0);
    fibArr.push(1);
    while(nextTerm <= num) {
        fibArr.push(nextTerm);
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }
    const oddFibArr = fibArr.filter(number => number <= num && !(number%2 ==0));
    return oddFibArr.reduce((sum, currentval) => sum + currentval, 0);
}
  
console.log(sumFibs(75025));