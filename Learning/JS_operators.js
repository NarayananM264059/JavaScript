// Arithmetic Operators
// Create two variables, `num1` and `num2`, and assign them the values 15 and 4, respectively.Perform addition, subtraction, multiplication, division, and modulus operations on these variables.Display the results using `console.log`.

let num1 = 15;
let num2 = 4;

let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;

console.log("Addition: " + addition);       // Output: Addition: 19
console.log("Subtraction: " + subtraction); // Output: Subtraction: 11
console.log("Multiplication: " + multiplication); // Output: Multiplication: 60
console.log("Division: " + division);       // Output: Division: 3.75
console.log("Modulus: " + modulus);         // Output: Modulus: 3

// Assignment Operators
// Create a variable `x` and assign it the value 10.Use the +=, -=, *=, /=, and %= operators to modify the value of `x`. Display the results using `console.log`.

let x = 10;
console.log("X= "+x);
let x1=x += 5;  // x = x + 5
console.log("x after += 5: " + x1); // Output: x after += 5: 15

let x2=x -= 3;  // x = x - 3
console.log("x after -= 3: " + x2); // Output: x after -= 3: 12

let x3=x *= 2;  // x = x * 2
console.log("x after *= 2: " + x3); // Output: x after *= 2: 24

let x4=x /= 4;  // x = x / 4
console.log("x after /= 4: " + x4); // Output: x after /= 4: 6

let x5=x %= 5;  // x = x % 5
console.log("x after %= 5: " + x5); // Output: x after %= 5: 1

// Comparison Operators
// Create two variables, `a` and `b`, and assign them the values 7 and 10, respectively.Use comparison operators to compare these variables and display the results using `console.log`.

let a = 7;
let b = 10;
console.log("a = "+ a + " , b = " +b);
console.log("a == b: " + (a == b));   // Output: a == b: false
console.log("a != b: " + (a != b));   // Output: a != b: true
console.log("a > b: " + (a > b));     // Output: a > b: false
console.log("a < b: " + (a < b));     // Output: a < b: true
console.log("a >= b: " + (a >= b));   // Output: a >= b: false
console.log("a <= b: " + (a <= b));   // Output: a <= b: true

// Logical Operators
// Create three boolean variables, `isTrue`, `isFalse`, and `isUnknown`, and assign them the values true, false, and true, respectively.Use logical operators to combine these variables and display the results using `console.log`.

let isTrue = true;
let isFalse = false;
let isUnknown = true;

console.log("isTrue && isFalse: " + (isTrue && isFalse)); // Output: isTrue && isFalse: false
console.log("isTrue || isFalse: " + (isTrue || isFalse)); // Output: isTrue || isFalse: true
console.log("!isFalse: " + (!isFalse));                   // Output: !isFalse: true
console.log("isTrue && isUnknown: " + (isTrue && isUnknown)); // Output: isTrue && isUnknown: true

//  Increment and Decrement Operators
// Create a variable `count` and assign it the value 10. Use the ++ and -- operators to modify the value of `count`. Display the results using `console.log`.

let count = 10;
console.log("Count= "+count);
count++;
console.log("count after count++: " + count); // Output: count after count++: 11

count--;
console.log("count after count--: " + count); // Output: count after count--: 10

// Ternary Operator
// Create a variable `age` and assign it a value. Use the ternary operator to check if `age` is greater than or equal to 18. If true, assign the value "Adult" to the variable `status`; otherwise, assign "Minor". Display the value of `status` using `console.log`.

let age = 20;
console.log("Status: " + age >= 18 ? "Adult" : "Minor"); // Output: Status: Adult

// Typeof Operator
// Create variables of different data types (string, number, boolean, object, undefined) and use the `typeof` operator to display their types using `console.log`.

let name = "Alice";
let number = 42;
let isStudent = true;
let person = { firstName: "Alice", lastName: "Johnson" };
let undef;

console.log("Type of name: " + typeof name);        // Output: Type of name: string
console.log("Type of number: " + typeof number);    // Output: Type of number: number
console.log("Type of isStudent: " + typeof isStudent); // Output: Type of isStudent: boolean
console.log("Type of person: " + typeof person);    // Output: Type of person: object
console.log("Type of undef: " + typeof undef);      // Output: Type of undef: undefined
