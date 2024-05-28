// Array Initialization
// Create an array named `colors` containing the names of some colors (e.g., "red", "green", "blue").

let colors = ["red", "green", "blue"];
console.log(colors);

//  Array Access
// Access the second element of the `colors` array and display it using `console.log`.

console.log("The second color is: " + colors[1]); // Output: The second color is: green

// Array Length
// Display the length of the `colors` array using `console.log`.

console.log("Number of colors: " + colors.length); // Output: Number of colors: 3

//  Array Modification
// Change the third element of the `colors` array to "yellow" and display the updated array using `console.log`.

colors[2] = "yellow";
console.log("Updated colors array: " + colors); // Output: Updated colors array: red,green,yellow

//  Array Methods - push
// Add two new colors ("orange" and "purple") to the end of the `colors` array using the `push` method.
// Display the updated array using `console.log`.

colors.push("orange", "purple");
console.log("Updated colors array after push: " + colors); // Output: Updated colors array after push: red,green,yellow,orange,purple

//  Array Methods - pop
// Remove the last color from the `colors` array using the `pop` method.
// Display the updated array using `console.log`.

let removedColor = colors.pop();
console.log("Removed color: " + removedColor); // Output: Removed color: purple
console.log("Updated colors array after pop: " + colors); // Output: Updated colors array after pop: red,green,yellow,orange

//  Array Methods - splice
// Remove the second color ("green") from the `colors` array using the `splice` method.
// Display the updated array using `console.log`.

let removedItems = colors.splice(1, 1); // Remove 1 element starting from index 1
console.log("Removed color: " + removedItems); // Output: Removed color: green
console.log("Updated colors array after splice: " + colors); // Output: Updated colors array after splice: red,yellow,orange

//  Array Methods - concat
// Create another array named `moreColors` containing some additional colors.
// Use the `concat` method to concatenate the `colors` array with the `moreColors` array.
// Display the concatenated array using `console.log`.

let moreColors = ["pink", "brown"];
let combinedColors = colors.concat(moreColors);
console.log("Combined colors array: " + combinedColors); // Output: Combined colors array: red,yellow,orange,pink,brown

// Array Iteration - forEach
// Use the `forEach` method to loop through each color in the `colors` array and display it using `console.log`.

console.log("Colors in the array:");
colors.forEach(function(color) {
    console.log(color);
});
// Output:
// red
// yellow
// orange

//  Array Methods - includes
// Use the `includes` method to check if the `colors` array contains the color "yellow" and display the result using `console.log`.

let containsYellow = colors.includes("yellow");
console.log("Does colors array contain 'yellow'? " + containsYellow); // Output: Does colors array contain 'yellow'? true
