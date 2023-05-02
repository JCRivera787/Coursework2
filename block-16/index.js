//Prompt:

//Write a program that calculates the total cost of prescription refills for three customers, taking into account any subscriptions or coupons they have.

// A Customer class with properties for prescription name, price per refill, number of refills, subscription status, and coupon status.
//Define a method that takes a Customer object and returns the total cost of their prescription refills.
//If the customer has a subscription, apply a 25% discount to the total cost.
//If the customer has a coupon, apply a $10 discount to the total cost after applying the subscription discount.
//Output the total cost for each customer.

//Pseudocode:
//Create a function that calculates the total cost of refills for a given customer, based on their prescription, price per refill, and number of refills.
//Create a function that can apply a 25% discount to the total refill cost if a customer has a subscription.
//Create a function that  can apply a $10 discount to the total refill cost if a customer has a coupon, after any subscription discount has been applied.


// Test with Customer Objects

// const timmy = {
    // prescription: "acetaminophen",
    // pricePerRefill: 25,
    // refills: 3,
    // subscription: false,
    // coupon: true,
// };
//1
//console.log(timmy)

// const sarah = {
    // prescription: "diphenhydramine",
    // pricePerRefill: 50,
    // refills: 1,
    // subscription: true,
    // coupon: false,
// }
// console.log(sarah)

// const rocky = {
    // prescription: "phenylephrine",
    // pricePerRefill: 30,
    // refills: 5,
    // subscription: true,
    // coupon: true,
// }
// console.log(rocky)

// Prompt 1: Calculate refill cost
function calculateRefillCost(customer) {
    const refillCost = customer.pricePerRefill * customer.refills;
    return refillCost;
  }
  
  // Prompt 2: Apply subscription discount
  function applySubscriptionDiscount(refillCost, customer) {
    if (customer.subscription) {
      const subscriptionDiscount = refillCost * 0.25;
      refillCost -= subscriptionDiscount;
    }
    return refillCost;
  }
  
  // Prompt 3: Apply coupon discount
  function applyCouponDiscount(refillCost, customer) {
    if (customer.coupon) {
      refillCost -= 10;
    }
    return refillCost;
  }
  
  // customer objects
  const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
  };
  
  const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
  }
  
  const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
  }
  // test block16
  // Test each customer object

  // Prompt 1: Calc refill cost
  const timmyRefillCost = calculateRefillCost(timmy);

   // Prompt 2: Apply sub discount
  const timmySubDiscount = applySubscriptionDiscount(timmyRefillCost, timmy);

  // Prompt 3: Apply coupon discount
  const timmyTotal = applyCouponDiscount(timmySubDiscount, timmy);
  console.log(`Timmy ==> Your grand total is $${timmyTotal}.`);
  
  // Prompt 1: Calcu refill cost
  const sarahRefillCost = calculateRefillCost(sarah);

  // Prompt 2: Apply sub discount
  const sarahSubDiscount = applySubscriptionDiscount(sarahRefillCost, sarah);

  // Prompt 3: Apply coupon discount
  const sarahTotal = applyCouponDiscount(sarahSubDiscount, sarah);
  console.log(`Sarah ==> Your grand total is $${sarahTotal}.`);
  
  // Prompt 1: Calc refill cost
  const rockyRefillCost = calculateRefillCost(rocky);

   // Prompt 2: Apply sub discount
  const rockySubDiscount = applySubscriptionDiscount(rockyRefillCost, rocky);

  // Prompt 3: Apply coupon discount
  const rockyTotal = applyCouponDiscount(rockySubDiscount, rocky);
  console.log(`Rocky ==> Your grand total is $${rockyTotal}.`);
  