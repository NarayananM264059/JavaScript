// String Concatenation
// Create two variables, `firstName` and `lastName`, and assign them your first and last names, respectively.
// Concatenate these variables to create a variable `fullName` and display it using `console.log`.

let firstName = "John";
let lastName = "Johnson";
let fullName = firstName + " " + lastName;
console.log("Full name: " + fullName); // Output: Full name: John Johnson

//  String Length
// Create a string variable `sentence` and assign it a sentence of your choice.
// Display the length of the string using `console.log`.

let sentence = "The quick brown fox jumps over the lazy dog.";
console.log("Length of sentence: " + sentence.length); // Output: Length of sentence: 44

// String Methods - indexOf
// Create a string variable `text` and assign it the value "Hello, world!".
// Use the `indexOf` method to find the position of the first occurrence of the word "world" and display it using `console.log`.

let text = "Hello, world!";
let position = text.indexOf("world");
console.log("Position of 'world': " + position); // Output: Position of 'world': 7

//String Methods - slice
// Create a string variable `message` and assign it the value "JavaScript is fun!".
// Use the `slice` method to extract the word "JavaScript" and display it using `console.log`.

let message = "JavaScript is Versatile";
let extractedWord = message.slice(0, 10);
console.log("Extracted word: " + extractedWord); // Output: Extracted word: JavaScript

//  String Methods - toUpperCase and toLowerCase
// Create a string variable `greeting` and assign it the value "Good Morning!".
// Convert the entire string to uppercase and lowercase and display the results using `console.log`.

let greeting = "Good Morning.";
let upperCaseGreeting = greeting.toUpperCase();
let lowerCaseGreeting = greeting.toLowerCase();
console.log("Uppercase: " + upperCaseGreeting); // Output: Uppercase: GOOD MORNING.
console.log("Lowercase: " + lowerCaseGreeting); // Output: Lowercase: good morning.

// String Methods - replace
// Create a string variable `originalString` and assign it the value "I love JavaScript!".
// Use the `replace` method to change "JavaScript" to "coding" and display the result using `console.log`.

let originalString = "I love JavaScript!";
let newString = originalString.replace("JavaScript", "Python");
console.log("Replaced string: " + newString); // Output: Replaced string: I love Python!

// String Methods - split and join
// Create a string variable `words` and assign it the value "red,green,blue,yellow".
// Use the `split` method to split the string into an array of words and display the array using `console.log`.
// Then use the `join` method to join the array back into a string with spaces between each word and display it using `console.log`.

let words = "red,green,blue,yellow";
let wordsArray = words.split(",");
console.log("Array of words: ", wordsArray); // Output: Array of words:  ["red", "green", "blue", "yellow"]
let joinedWords = wordsArray.join(" ");
console.log("Joined string: " + joinedWords); // Output: Joined string: red green blue yellow

// String Methods - trim
// Create a string variable `paddedString` and assign it the value "   Hello, World!   ".
// Use the `trim` method to remove the leading and trailing whitespace and display the result using `console.log`.

let paddedString = "   Hello , World !   ";
let trimmedString = paddedString.trim();
console.log("Trimmed string: '" + trimmedString + "'"); // Output: Trimmed string: 'Hello, World!'

// Template Literals
// Create two variables, `name` and `age`, and assign them your name and age, respectively.
// Use template literals to create a string that says "My name is <name> and I am <age> years old." and display it using `console.log`.

let name = "Alice";
let age = 30;
let introduction = `My name is ${name} and I am ${age} years old.`;
console.log(introduction); // Output: My name is Alice and I am 30 years old.

// Check if String Contains Substring
// Create a string variable `phrase` and assign it the value "The quick brown fox jumps over the lazy dog."
// Use the `includes` method to check if the string contains the word "fox" and display the result using `console.log`.

let phrase = "The quick brown fox jumps over the lazy dog.";
let containsFox = phrase.includes("fox");
console.log("Contains 'fox': " + containsFox); // Output: Contains 'fox': true


// String Comparison in JavaScript
let str1 = "John";
let str2 = new String("John");

console.log(str1 == str2);
console.log(str1.localeCompare(str2));