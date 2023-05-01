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

const underEqual50 = (item) => {
   return item.price <= 50
    } 
    const itemsUnderFifty = garageSale.filter(underEqual50);
console.log(itemsUnderFifty);

const usedItems = (item) => {
    return item.condition === 'used';
}
const itemsUsed = garageSale.filter(usedItems);
console.table(itemsUsed);


const allPriceArray = (item) => {
    return item.price;
}
const priceArray = garageSale.map(allPriceArray);
console.log(priceArray);

const totalCost = (index, value) => {
    return index + value;
}
const totalPrice = priceArray.reduce(totalCost);
console.log(totalPrice)

const numberOfItems = garageSale.length;
const averagePrice = totalPrice / numberOfItems;
console.log(averagePrice);
