const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
};

//console.log(customer)
//modify value notation.
customer["email"] = "Jak3Smith1992@email.com";

customer["phone"] = 3195551234;

customer["zipCode"] = "63132";

customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];

//console.log(customer)
//delete key items

delete customer.zipCode;

delete customer.favoriteStore;

//console.log(customer)
//add new items

customer["toppings"]=["chocolate sprinkles", "wafer straws",  "gummy bears"];

customer["futureFlavors"]= "mago";

customer["todaysPurchaseCost"]=5.32;
//console.log(customer)
//keys array
const keysArray = Object.keys(customer);
//keys array log
console.log(keysArray)