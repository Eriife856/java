// // Creating arrays with square brackets []
// let fruits = ["apple", "banana", "orange", "grape"];
// let numbers = [10, 25, 30, 45, 50];
// let booleans = [true, false, true, true];
// let mixedArray = ["John", 25, true, "student"];

// // Empty array
// let emptyArray = [];
// // Display the arrays
// console.log("Fruits array:", fruits);
// console.log("Numbers array:", numbers);
// console.log("Mixed array:", mixedArray);
// console.log("Empty array:", emptyArray);

// console.log(""); // Empty line
// // Array length property
// console.log("Number of fruits:", fruits.length);
// console.log("Number of numbers:", numbers.length);
// console.log("Empty array length:", emptyArray.length);

// console.log(""); // Empty line

// // Accessing individual elements with index [0, 1, 2, ...]
// console.log("First fruit:", fruits[0]);     // apple
// console.log("Second fruit:", fruits[1]);    // banana
// console.log("Last fruit:", fruits[fruits.length - 1]); // grape

// console.log("First number:", numbers[0]);   // 10
// console.log("Third number:", numbers[2]);   // 30

// // What happens with invalid indexes?
// console.log("Index that doesn't exist:", fruits[10]); // undefined

// // ## Modifying Arrays

// javascript
// let colors = ["red", "green", "blue"];
// console.log("Original colors:", colors);

// // Changing existing elements
// colors[0] = "purple";
// colors[2] = "yellow";
// console.log("After changes:", colors);

// console.log(""); // Empty line

// // Adding elements to the end with push()
// let shoppingList = ["milk", "bread"];
// console.log("Original list:", shoppingList);

// shoppingList.push("eggs");
// shoppingList.push("cheese", "butter"); // Can add multiple items
// console.log("After adding items:", shoppingList);

// console.log(""); // Empty line

// // Removing the last element with pop()
// let removedItem = shoppingList.pop(); // pop() returns the removed item
// console.log("Removed item:", removedItem);
// console.log("List after removing:", shoppingList);

// console.log(""); // Empty line

// // Adding elements to the beginning with unshift()
// shoppingList.unshift("apples");
// console.log("After adding to front:", shoppingList);

// // Removing the first element with shift()
// let firstItem = shoppingList.shift();
// console.log("Removed first item:", firstItem);
// console.log("Final list:", shoppingList);

// console.log(""); // Empty line

// // Finding elements
// let students = ["Alice", "Bob", "Charlie", "Diana"];
// console.log("Students:", students);
// console.log("Is Bob in class?", students.includes("Bob"));
// console.log("Where is Charlie?", students.indexOf("Charlie"));
// console.log("Where is Frank?", students.indexOf("Frank")); // -1 means not found
// // ```

// // // **Array Methods Summary:**
// // // - `push()` - Add to end
// // // - `pop()` - Remove from end  
// // // - `unshift()` - Add to beginning
// // // - `shift()` - Remove from beginning
// // // - `includes()` - Check if item exists
// // // - `indexOf()` - Find item's position


// More Array methods
let numbers = [1,2,3,4,5]
let names = ["john", "jane","Bob", "Alice"];

console.log("Original numbers:", numbers);
console.log("Original names:", names);
console.log("");


// slice()-Get a portion of the array(doesn't change original)
let firstThree = numbers.slice(0, 3);
let lastTwo = numbers.slice(-2);
console.log("First three numbers;", firstThree);
console.log("Last two numbers:", lastTwo);
console.log("Original unchanged:", numbers);

console.log("");

// splice() - Remove/add items at specific position(changes original)
let fruits = ["apple", "banana", "orange", "grape" , "kiwi"];
console.log("Original friuts;", fruits);

// Remove 2 items starting at index 1
let removed = fruits.splice(1,2)
console.log("Removed items:", removed)
console.log("After removal:", fruits)

// Add items at index 1
fruits.splice(1,0,"mango", "pineapple")
console.log("After adding :", fruits);
console.log("");

// join() - Convert array to string
let words =["Hello", "from", " JavaScript"];
let sentence = words.join(",");
let csv = words.join(",");
console.log("Words array:", words);