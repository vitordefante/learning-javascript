function checkCashRegister(price, cash, cid) {
    // create an array of currency units with their respective values
    const currency = [
      { name: "ONE HUNDRED", value: 100.0 },
      { name: "TWENTY", value: 20.0 },
      { name: "TEN", value: 10.0 },
      { name: "FIVE", value: 5.0 },
      { name: "ONE", value: 1.0 },
      { name: "QUARTER", value: 0.25 },
      { name: "DIME", value: 0.1 },
      { name: "NICKEL", value: 0.05 },
      { name: "PENNY", value: 0.01 }
    ];
    
    let changeDue = cash - price; // calculate the change due
    
    // get the total cash in drawer
    let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);
  
    // if the total cash in drawer is less than the change due, return INSUFFICIENT_FUNDS
    if (totalCid < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    
    // if the total cash in drawer is equal to the change due, return CLOSED
    if (totalCid === changeDue) {
      return { status: "CLOSED", change: cid };
    }
    
    // array to hold the change to be returned
    let change = [];
    
    // loop through the currency array
    for (let i = 0; i < currency.length; i++) {
      let currencyUnit = currency[i];
      
      // check if the change due is greater or equal to the current currency unit value
      if (changeDue >= currencyUnit.value) {
        // find the amount of currency in the drawer for the current currency unit
        let currencyAmount = cid.find((el) => el[0] === currencyUnit.name)[1];
        let currencyCount = 0;
        
        // add currency to the change array until change due is less than the current currency unit value
        while (changeDue >= currencyUnit.value && currencyAmount > 0) {
          changeDue -= currencyUnit.value;
          changeDue = Math.round(changeDue * 100) / 100;
          currencyAmount -= currencyUnit.value;
          currencyCount++;
        }
        
        // if currencyCount is greater than 0, push it to the change array
        if (currencyCount > 0) {
          change.push([currencyUnit.name, currencyUnit.value * currencyCount]);
        }
      }
    }
    
    // if the changeDue is greater than 0, return INSUFFICIENT_FUNDS
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    
    // return the change array with status "OPEN"
    return { status: "OPEN", change: change };
  }