//Prompt2 
//1. Print an array of all the drinks on the menu.

//2. Print an array of drinks that cost 5 and under.

//3. Print an array of drinks that are priced at an even number.

//4. Print the total if you were to order one of every drink.

//5. Print an array with all the drinks that are seasonal.

//6. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans"..



const coffeeMenu = require('./coffee_data');

// #1
const drinks = [];

for (let i = 0; i < coffeeMenu.length; i++) {
  drinks.push(coffeeMenu[i].name);
}

//#2
const cheapDrinks =[]

for (let i=0; i < coffeeMenu.length; i++){
    if (coffeeMenu[i].price <=5) {
        cheapDrinks.push(coffeeMenu[i].name);
    }
}
//#3
const evenPricedDrinks = [];

for (let i = 0; i < coffeeMenu.length; i++) {
  if (coffeeMenu[i].price % 2 === 0) {
    evenPricedDrinks.push(coffeeMenu[i].name);
  }
}
//#4
let total = 0;

for (let i = 0; i < coffeeMenu.length; i++) {
  total += coffeeMenu[i].price;
}

//#5
//const seasonalDrinks = coffeeMenu.filter ((drinks => drinks.seasonal ))

//#6
const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal);

const seasonalDrinksWithImportedBeans = seasonalDrinks.map(drink => {
  return {
    name: `${drink.name} with imported beans`,
    price: drink.price
  };
});

//#1
//console.log(drinks);

//#2
//console.log(cheapDrinks);

//#3
//console.log(evenPricedDrinks);

//#4
//console.log(`The total for every drink is $${total}.`);

//#5
//console.log(seasonalDrinks)

//#6
console.log(seasonalDrinksWithImportedBeans);