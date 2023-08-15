//Problem #1
//Using if/else statements, create a JavaScript code in a script tag that follows the following rules:

//If the value is truthy, print true;
//If the value is falsy, print the corresponding result:
//"The boolean value false is falsy";
//"The null value is falsy";
//"undefined is falsy";
//"The number 0 is falsy (the only falsy number)";
//"The empty string is falsy (the only falsy string)";

function checkValue(value) { 
    if (value) {  
    console.log ("true");
} else if ( value === false) {
   console.log ("The Bolean value false is falsy"); 
} else if (value === null) {
    console.log ("The null value is falsy");
} else if ( value === undefined) {
    console.log ("undefined is falsy");
} else if (value === 0) {
    console.log ("The number 0 is falsy (the only falsy number)");
} else if ( value === "") {
    console.log ("The empty string is falsy(the only falsy string)");
} else {
    console.log ("Uknown value");
    }
}

//Test Cases

checkValue("I am a string");                           // true
checkValue(false);                                    // "The boolean value false is falsy"
checkValue(null);                                     // "The null value is falsy"
checkValue(undefined);                                // "undefined is falsy"
checkValue(0);                                        // "The number 0 is falsy (the only falsy number)"
checkValue("");                                       // "The empty string is falsy (the only falsy string)"

// Problem #2 
//Using if/else if/else statements, JavaScript code in a script tag that takes the sum of two numbers and prints the corresponding result:

//sum + " is less than -1000";
//sum + " is a negative number";
//sum + " is equal to 0";
//sum + " is larger than 0";
//sum + " is greater than 100";

function calculateSumAndPrintResult(num1, num2) {
    var sum = num1 + num2;

    if (sum > 100) {
        console.log(sum + " is greater than 100");
    } else if (sum > 0) {
        console.log(sum + " is greater than 0");
    } else if (sum === 0) {
        console.log(sum + " is equal to 0");
    } else if (sum < 0) {
        console.log(sum + " is a negative number");
    }
}

// Test cases
calculateSumAndPrintResult(50, 51);   // 101 is greater than 100
calculateSumAndPrintResult(99, -2);   // 97 is greater than 0
calculateSumAndPrintResult(0, 101);   // 101 is greater than 100
calculateSumAndPrintResult(500, -500); // 0 is equal to 0
calculateSumAndPrintResult(-1000, 0); // -1000 is a negative number
calculateSumAndPrintResult(-5, 0);    // -5 is a negative number

//Problem #3
//Using if/else statements, JavaScript code in a script tag that prints true if both parameters are greater or equal to 5.


function checkParameters(num1, num2) {
    if (num1 >= 5 && num2 >= 5) {
        console.log("true");
    } else {
        console.log("false");
    }
}

// Test cases
checkParameters(5, 6);     // true
checkParameters(10, 11);   // true
checkParameters(0, 0);     // false
checkParameters(1000, -1000); // false
checkParameters(6, 4);     // false
checkParameters(5, 5);     // true


//Problem #4
//Using if/else statements and strict equality operators, JavaScript code in a script tag that compares two sets of two values. Print true if at least one of the pairs is truthy.

function comparePairs(param1A, param1B, param2A, param2B) {
    if ((param1A && param1B) || (param2A && param2B)) {
        console.log("true");
    } else {
        console.log("false");
    }
}

// Test cases
comparePairs("cat", "cat", 6, "6");      // true
comparePairs("five", 5, "dog", "dawg"); // false
comparePairs(0, false, "horse", "horse"); // true
comparePairs("eight", "eight", "ate", "ate"); // true
comparePairs(11, "eleven", "four", "for");   // false
comparePairs("cake", "cake", "pie", "pie");   // true
