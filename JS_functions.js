// Simple Function
// Create a function named `greet` that takes a single parameter `name` and logs "Hello, <name>!" to the console.

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("John"); // Output: Hello, John!

// Function with Return Value
// Create a function named `add` that takes two parameters `a` and `b`, adds them, and returns the result.

function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log("The sum is: " + result); // Output: The sum is: 8

//  Function with Default Parameters
// Create a function named `multiply` that takes two parameters `a` and `b`. If `b` is not provided, it should default to 1. Return the product of `a` and `b`.

function multiply(a, b = 1) {
    return a * b;
}

console.log("The product is: " + multiply(4, 2)); // Output: The product is: 8
console.log("The product is: " + multiply(4));    // Output: The product is: 4

//  Function Expression
// Create a function expression named `square` that takes a single parameter `x` and returns the square of `x`.

const square = function(x) {
    return x * x;
};

console.log("The square is: " + square(5)); // Output: The square is: 25

//  Arrow Function
// Create an arrow function named `subtract` that takes two parameters `a` and `b` and returns the result of `a - b`.

const subtract = (a, b) => a - b;

console.log("The result of subtraction is: " + subtract(10, 4)); // Output: The result of subtraction is: 6

// Function with Rest Parameters
// Create a function named `sumAll` that takes any number of arguments and returns their sum.

function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log("The sum of all numbers is: " + sumAll(1, 2, 3, 4, 5)); // Output: The sum of all numbers is: 15

//  Function with Callback
// Create a function named `processArray` that takes an array and a callback function.  The function should call the callback with each element of the array.

function processArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

processArray([1, 2, 3, 4], function(element) {
    console.log("Processing element: " + element);
});
// Output: 
// Processing element: 1
// Processing element: 2
// Processing element: 3
// Processing element: 4

// IIFE (Immediately Invoked Function Expression)
// Create an IIFE that logs "IIFE executed!" to the console.

(function() {
    console.log("IIFE executed!");
})();
// Output: IIFE executed!

//Function Returning a Function
// Create a function named `createMultiplier` that takes a number `n` and returns a new function. The returned function should take a number `x` and return the product of `x` and `n`.

function createMultiplier(n) {
    return function(x) {
        return x * n;
    };
}

const double = createMultiplier(2);
console.log("Double of 5 is: " + double(5)); // Output: Double of 5 is: 10

const triple = createMultiplier(3);
console.log("Triple of 5 is: " + triple(5)); // Output: Triple of 5 is: 15

//  Recursive Function
// Create a recursive function named `factorial` that takes a number `n` and returns the factorial of `n`.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("Factorial of 5 is: " + factorial(5)); // Output: Factorial of 5 is: 120
