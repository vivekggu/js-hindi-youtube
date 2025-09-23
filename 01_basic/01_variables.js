const accountId = 123433
let accountEmail = "vivek@123google.com"
var accountPassword = "3452"
accountCity = "ghazipur"
let accountState;

//accountId = 4 not allowed

accountEmail = "hcakh@.com"
accountPassword = "2243234"
accountCity = "Bengaluru"


console.log(accountId);


/*
prefer not use var
because of issue in block scope functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])