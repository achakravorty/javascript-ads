// Sum All Primes

function sumPrimes(num) {
    let primeArr=[];
    

    for(let i=2; i<=num; i++) {
        if(isPrime(i)) {
            primeArr.push(i);
        }
    }
    console.log(primeArr);
    return primeArr.reduce((sum, currentVal) => sum + currentVal, 0);
  }

  function isPrime(num) {
    if(num == 0 | num ==1) {
        return false;
    }
    for(let i=2; i < num; i++) {
        if(num%i ==0) {
            return false;
        }
    }
    return true;
  }
  
  console.log(sumPrimes(10));