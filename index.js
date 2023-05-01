//Clean the coffee_data.js file.
 const coffeeMenu = require("./coffee_data.js");
//console.log(coffeeMenu)

//Print an array of all the drinks on the menu.
const drinks = (item) => {
    return item.name;
}
console.log("All drinks on the Menu",coffeeMenu.map(drinks))


//Print an array of drinks that cost 5 and under.
const drinksUnder5 = (item) => {
    return item.price <= 5
}
const lowCostDrinks = coffeeMenu.filter(drinksUnder5);
console.log("Drinks $5 and under",lowCostDrinks);


//Print an array of drinks that are priced at an even number.
const drinksEven = (item) => {
    return item.price % 2 === 0;
} 
const evenPriceDrinks = coffeeMenu.filter(drinksEven);
console.log("Even price drinks",evenPriceDrinks)
console.log()


//Print the total if you were to order one of every drink.
const allPrices = (item) => {
    return item.price;
}
const total = (accu, value) => {
    return accu + value;
}
const eachPrice = coffeeMenu.map(allPrices);
const totalPrice = eachPrice.reduce(total)
console.log(`Total Cost for each drink on the menu $${totalPrice}`)
console.log()


//Print an array with all the drinks that are seasonal.
const seasonalDrinks = (item) => {
    return item.seasonal === true;
}
console.log("Seasonal Drinks",coffeeMenu.filter(seasonalDrinks))
console.log()


//Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
const imported = (item) => {
    item.seasonal === true;
    return item.name
} 
const seasonalCoffee = coffeeMenu.filter(seasonalDrinks)
//console.log(seasonalCoffee.map(imported))
const seasonalWithBean = seasonalCoffee.map(imported)

seasonalWithBean[0] = seasonalWithBean[0]+ ' with imported beans'
seasonalWithBean[1] = seasonalWithBean[1]+ ' with imported beans'
console.log('Seasonal Drinks',seasonalWithBean)



//Another way to print 'with imported beans'
//console.log(seasonalWithBean[0],"with imported beans","and", seasonalWithBean[1],"with imported beans")

//Another way to execute adding 'with imported beans'
// const seasonal = coffeeMenu.filter(seasonalDrinks)
// seasonal[0].name = 'affogato with imported beans'
// seasonal[1].name = 'cuban espresso with imported beans'
// console.log('Seasonal Drinks',seasonal)


