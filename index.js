/* Your code goes here */
var customerName = "bob"

const leastFavoriteCustomer ="rea"

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer(){
  bestCustomer = "not bob"
  return bestCustomer;
}

function overWriteBestCustomer(){
  bestCustomer = "maybe bob"
  return bestCustomer
}

function changeLeastFavoriteCustomer({
  leastFavoriteCustomer = "red"
})
