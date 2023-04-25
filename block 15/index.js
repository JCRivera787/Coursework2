const dinner = {
    cheeseburger: 12,
    steak: 20,
    soup: 8,
    macnCheese: 14,
    combo: 16,
}
console.log(Object.keys(dinner));

console.log(Object.values(dinner));

const prices = Object.values(dinner);

let totalCost = 0;
for (let i = 0; i < prices.length; i++) {
    totalCost += prices[i];
}

console.log(totalCost)
