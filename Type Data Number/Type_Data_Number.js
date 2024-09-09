// Example of Number types and operations in JavaScript

// 1. Decimal Notation
let decimal = 12345;
console.log("Decimal:", decimal); // Output: 12345

// 2. Exponential Notation
let exponential = 1.23e5; // Same as 1.23 * 10^5 = 123000
console.log("Exponential:", exponential); // Output: 123000

// 3. Hexadecimal Notation
let hexadecimal = 0xFF; // Same as 255 in decimal
console.log("Hexadecimal:", hexadecimal); // Output: 255

// 4. Binary Notation
let binary = 0b1010; // Same as 10 in decimal
console.log("Binary:", binary); // Output: 10

// 5. Octal Notation
let octal = 0o17; // Same as 15 in decimal
console.log("Octal:", octal); // Output: 15

// 6. BigInt Notation
let bigInt = 123456789123456789123456789n; // BigInt notation
console.log("BigInt:", bigInt); // Output: 123456789123456789123456789n

// 7. Arithmetic Operations
let a = 10;
let b = 3;
console.log("Addition:", a + b);        // Output: 13
console.log("Subtraction:", a - b);     // Output: 7
console.log("Multiplication:", a * b);  // Output: 30
console.log("Division:", a / b);        // Output: 3.333...
console.log("Modulo:", a % b);          // Output: 1

// 8. Special Number Values
console.log("Infinity:", 1 / 0);        // Output: Infinity
console.log("Negative Infinity:", -1 / 0); // Output: -Infinity
console.log("NaN:", 10 / "hello");      // Output: NaN

// 9. Methods and Functions
let num = 5.6789;

// toFixed(): rounds the number to 2 decimal places
console.log("toFixed(2):", num.toFixed(2)); // Output: 5.68

// toString(): converts number to string
console.log("toString():", num.toString()); // Output: "5.6789"

// parseInt(): parses a string to an integer
let intString = "123";
console.log("parseInt('123'):", parseInt(intString)); // Output: 123

// parseFloat(): parses a string to a float
let floatString = "3.14";
console.log("parseFloat('3.14'):", parseFloat(floatString)); // Output: 3.14

// 10. Math Object
console.log("Math.round(4.7):", Math.round(4.7));   // Output: 5
console.log("Math.floor(4.7):", Math.floor(4.7));   // Output: 4
console.log("Math.ceil(4.7):", Math.ceil(4.7));     // Output: 5
console.log("Math.random():", Math.random());       // Output: random number between 0 and 1

// 11. Safe Integers
console.log("Max Safe Integer:", Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
console.log("Min Safe Integer:", Number.MIN_SAFE_INTEGER); // Output: -9007199254740991

// Checking for NaN
console.log("isNaN(123):", isNaN(123)); // Output: false
console.log("isNaN('hello'):", isNaN("hello")); // Output: true

// Example of handling large numbers with BigInt
let safeNumber = 9007199254740991; // Max safe integer
console.log("Safe Number:", safeNumber);

let largeNumber = 9007199254740992n; // BigInt for numbers larger than the safe range
console.log("BigInt Number:", largeNumber);
