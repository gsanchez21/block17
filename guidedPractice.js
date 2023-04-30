const garageSale = require("./guidedPracticeData");

//Print an array of all the item names in garageSale.
const printName = (item) => {
    return item.name;
} 
console.log(garageSale.map(printName));

// Print an array of arrays of all the items with their prices.

const nameAndPrice = (item) => {
    return [item.name, item.price];
} 
console.log(garageSale.map(nameAndPrice));