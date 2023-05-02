
//const timmy = {
    //prescription: "acetaminophen",
    //pricePerRefill: 25,
    //refills: 3,
    //subscription: false,
    //coupon: true,
//};
//const sarah = {
    //prescription: "diphenhydramine",
    //pricePerRefill: 50,
    //refills: 1,
    //subscription: true,
    //coupon: false,
//};


const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}


//
// making a change

//let totalAmount = memeber.pricePerRefill * memeber.refills;
//if (member.subscription) {
    //totalAmount *= 0.75;  
//}

//let  totalAmount = member.pricePerRefill * member.refills;
//totalAmount -= 10;

let totalAmount = rocky.pricePerRefill * rocky.refills;

if (rocky.subscription) {
    totalAmount *= 0.75;
}

if (totalAmount >= 10) {
    totalAmount -= 10;
} else {
    totalAmount = 0;
}

const finalAmount = totalAmount.toFixed(2);

console.log(` grand total is $${finalAmount}.`);
