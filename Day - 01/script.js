// 🚀 Day 1 – Advanced Functions Practice
// This file contains 20 practice questions with solutions covering: Function Declarations, Function Expressions, Arrow Functions, Default Parameters, Rest & Spread, Higher-Order Functions.

// ----------------------------------------------------
// Q1. Function Declaration vs Expression
// ----------------------------------------------------
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Suresh")); // Hello, Suresh

const greetExpr = function(name) {
  return `Hi, ${name}`;
};
console.log(greetExpr("Sharma")); // Hi, Sharma

// ----------------------------------------------------
// Q2. Difference in Hoisting
// ----------------------------------------------------
console.log(square(4)); // 16
function square(n) { return n * n; }

// console.log(cube(3)); ❌ Error
const cube = function(n) { return n * n * n; };
console.log(cube(3)); // 27

// ----------------------------------------------------
// Q3. Arrow Function – Simple Add
// ----------------------------------------------------
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// ----------------------------------------------------
// Q4. Arrow Function – Implicit Return
// ----------------------------------------------------
const double = n => n * 2;
console.log(double(7)); // 14

// ----------------------------------------------------
// Q5. Default Parameters
// ----------------------------------------------------
function greetUser(name = "Guest") {
  return `Welcome, ${name}`;
}
console.log(greetUser()); // Welcome, Guest
console.log(greetUser("Suresh")); // Welcome, Suresh

// ----------------------------------------------------
// Q6. Default Parameters with Math
// ----------------------------------------------------
function power(base, exponent = 2) {
  return base ** exponent;
}
console.log(power(5));    // 25
console.log(power(2, 3)); // 8

// ----------------------------------------------------
// Q7. Rest Operator – Average
// ----------------------------------------------------
const average = (...nums) => {
  if (nums.length === 0) return 0;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
};
console.log(average(2, 4, 6)); // 4

// ----------------------------------------------------
// Q8. Spread Operator – Arrays
// ----------------------------------------------------
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr); // [1, 2, 3, 4]

// ----------------------------------------------------
// Q9. Spread Operator – Objects
// ----------------------------------------------------
const person = { name: "Suresh", age: 25 };
const updatedPerson = { ...person, age: 26, city: "Delhi" };
console.log(updatedPerson);
// { name: "Suresh", age: 26, city: "Delhi" }

// ----------------------------------------------------
// Q10. Higher-Order Function Example
// ----------------------------------------------------
function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}
const doubleNum = multiplier(2);
console.log(doubleNum(10)); // 20

const tripleNum = multiplier(3);
console.log(tripleNum(5)); // 15

// ----------------------------------------------------
// Q11. Arrow Function with Default Parameters
// ----------------------------------------------------
const greetArrow = (name = "Guest") => `Hello, ${name}!`;
console.log(greetArrow("Suresh")); // Hello, Suresh!
console.log(greetArrow()); // Hello, Guest!

// ----------------------------------------------------
// Q12. Sum of Squares (Rest Parameter)
// ----------------------------------------------------
function sumOfSquares(...nums) {
  return nums.reduce((sum, n) => sum + n * n, 0);
}
console.log(sumOfSquares(2, 3, 4)); // 29

// ----------------------------------------------------
// Q13. Filter & Multiply (Higher-Order + Arrow)
// ----------------------------------------------------
const filterAndMultiply = (arr, minValue, factor) =>
  arr.filter(num => num > minValue).map(num => num * factor);

console.log(filterAndMultiply([1, 5, 10, 15], 5, 2)); // [20, 30]

// ----------------------------------------------------
// Q14. Merge Objects with Spread
// ----------------------------------------------------
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 3, c: 4 }

// ----------------------------------------------------
// Q15. Nested Function – Power Of
// ----------------------------------------------------
function powerOf(n) {
  return function(x) {
    return x ** n;
  };
}
const squareFn = powerOf(2);
console.log(squareFn(5)); // 25

const cubeFn = powerOf(3);
console.log(cubeFn(2)); // 8

// ----------------------------------------------------
// Q16. Arrow Function Returning Object
// ----------------------------------------------------
const createUser = (name, age) => ({ name, age });
console.log(createUser("Suresh", 25));
// { name: "Suresh", age: 25 }

// ----------------------------------------------------
// Q17. Rest + Spread Together
// ----------------------------------------------------
function combineArrays(...arrays) {
  return [].concat(...arrays);
}
console.log(combineArrays([1, 2], [3, 4], [5, 6]));
// [1, 2, 3, 4, 5, 6]

// ----------------------------------------------------
// Q18. Higher-Order Function with Map
// ----------------------------------------------------
function applyOperation(arr, operation) {
  return arr.map(operation);
}
console.log(applyOperation([1, 2, 3], n => n * 2)); // [2, 4, 6]

// ----------------------------------------------------
// Q19. Default Parameter with Rest
// ----------------------------------------------------
function join(separator = ", ", ...words) {
  return words.join(separator);
}
console.log(join("-", "I", "Love", "JS")); // I-Love-JS

// ----------------------------------------------------
// Q20. Arrow Function with Reduce
// ----------------------------------------------------
const product = (...nums) => nums.reduce((a, b) => a * b, 1);
console.log(product(2, 3, 4)); // 24
