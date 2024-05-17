// Cash Register
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

function checkCashRegister(price, cash, cid) {
    //object for currecny unit and amount
    const currencyUnitValues = {
        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.1,
        'QUARTER': 0.25,
        'ONE': 1,
        'FIVE': 5,
        'TEN': 10,
        'TWENTY': 20,
        'ONE HUNDRED': 100
      };
  
    let change = cash-price;

    // total cash-in-drawer
    const total_cid = cid.reduce((sum, curr) => sum + curr[1], 0);

    if(total_cid < change) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    if(total_cid == change) {
        return { status: "CLOSED", change: cid };
    }

    //checking if its possible to return exact change by calulcating change
    let changeDue = [];
    //iterate through each currency unit in cid highest to lowest
    for(let i = cid.length -1; i >= 0; i--) {
        //for each currency unit check if its value is less than or equal to the remaining change amount 
        //and if there is still abvailable cash of that denomination in the drawer
        const currency = cid[i][0];
        const unitValue = currencyUnitValues[currency];
        let count = 0;

        //check if currency unit can be used for change
        while (change >= unitValue && cid[i][1] > 0) {
            change -= unitValue;
            cid[i][1] -= unitValue;
            change = Math.round(change * 100) / 100;
            count++;
        }

        if(count > 0) {
            changeDue.push([currency, count * unitValue]);
        }
    }

    //for when there is no exact change available
    if (change > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] }
    }  
    
    return { status: "OPEN", change: changeDue };
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0], ["NICKEL", 2.05], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 20], ["TWENTY", 0], ["ONE HUNDRED", 100]]));
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));