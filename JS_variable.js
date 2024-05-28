//Display the sum of 5 + 10, using two variables: x and y.
let x=5;
let y=10;
console.log(x+y);

// Create two variables, `a` and `b`, and assign them the values 7 and 3, respectively. Then create a variable `sum` that stores the sum of `a` and `b`. Display the result using `console.log`.

let a = 7;
let b = 3;
let sum = a + b;
console.log("The sum of a and b is: " + sum);

// Create two variables, `x` and `y`, and assign them the values 5 and 10, respectively. Swap the values of `x` and `y` using a temporary variable `temp`. Display the values of `x` and `y` after the swap.

let x1 = 5;
let y1 = 10;
console.log("Before swapping, x is: " + x1); 
console.log("Before swapping, y is: " + y1);
let temp = x1;
x1 = y1;
y1 = temp;
console.log("After swapping, x is: " + x1); 
console.log("After swapping, y is: " + y1);

// Create two string variables, `firstName` and `lastName`, and assign them your first and last names, respectively. Create a variable `fullName` that concatenates `firstName` and `lastName` with a space in between. Display the `fullName` using `console.log`.

let firstName = "John";
let lastName = "Johnson";
let fullName = firstName + " " + lastName;
console.log("Full name is: " + fullName);

// Create three variables, `num1`, `num2`, and `num3`, and assign them the values 8, 5, and 2, respectively. Calculate the product of these three numbers and store it in a variable `product`. Display the `product` using `console.log`.

let num1 = 8;
let num2 = 5;
let num3 = 2;
let product = num1 * num2 * num3;
console.log("The product of num1, num2, and num3 is: " + product);

// Create a variable `score` and assign it the value 0. Then, increase the value of `score` by 10, decrease it by 3, and finally double it. Display the final value of `score` using `console.log`.

let score = 0;
score += 10;
score -= 3;  
score *= 2; 
console.log("The final score is: " + score);

// Create two boolean variables, `isStudent` and `isTeacher`, and assign them the values `true` and `false`, respectively.Create a variable `isSchoolMember` that is true if either `isStudent` or `isTeacher` is true. Display the value of `isSchoolMember` using `console.log`.

let isStudent = true;
let isTeacher = false;
let isSchoolMember = isStudent || isTeacher; //Or statement needs one condition to be true
console.log("Is the person a school member? " + isSchoolMember);

// Create a variable `data` without assigning any value to it. Display the value of `data` using `console.log`.Then assign the value `null` to `data` and display it again.

let data;
console.log("The value of data is: " + data); 

data = null;
console.log("The value of data is: " + data);
