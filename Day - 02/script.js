// 🚀 Day 2 – Array Advanced Methods Practice
// This file contains 20+ practice questions with solutions covering:
// forEach, map, filter, reduce, some, every, find, findIndex, sort, slice, splice.

// ====================================================
// 🔹 forEach
// ====================================================

// Q1. Multiply by 5
[1, 2, 3, 4, 5].forEach(num => console.log(num * 5));

// Q2. Divide by 2
[2, 4, 6].forEach(num => console.log(num / 2));

// Q3. Convert fruits to uppercase
const fruit = ["apple", "banana", "cherry"];
fruit.forEach((element, index) => {
  fruit[index] = element.toUpperCase();
});
console.log(fruit);

// ====================================================
// 🔹 map
// ====================================================

// Q4. Double numbers
const double = [1, 2, 3].map(num => num * 2);
console.log(double);

// Q5. Divide by 5
const div = [10, 15, 20].map(num => num / 5);
console.log(div);

// Q6. Extract student names
const students = [
  { name: "Suresh", marks: 85 },
  { name: "Amit", marks: 45 },
  { name: "Neha", marks: 92 },
  { name: "Ravi", marks: 67 },
  { name: "Priya", marks: 74 }
];
const names = students.map(student => student.name);
console.log(names);

// ====================================================
// 🔹 filter
// ====================================================

// Q7. Numbers > 15
const adds = [1, 2, 4, 8, 16, 32].filter(num => num > 15);
console.log(adds);

// Q8. Even numbers greater than 9
const one = [1, 2, 4, 10, 14, 17, 20, 22, 23].filter(num => num > 9 && num % 2 === 0);
console.log(one);

// Q9. Students passed (>70 marks)
const passed = students.filter(student => student.marks > 70);
console.log(passed);

// ====================================================
// 🔹 reduce
// ====================================================

// Q10. Sum with squares
const sum = [1, 2, 3, 4].reduce((a, b) => a + b * b);
console.log(sum);

// Q11. Add all numbers
const addOne = [1, 2, 3].reduce((a, b) => a + b, 0);
console.log(addOne);

// Q12. Average marks
const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const average = totalMarks / students.length;
console.log(average);

// Q13. Max value in array
const nums = [12, 45, 7, 89, 34];
console.log(nums.reduce((max, n) => Math.max(max, n), nums[0]));

// ====================================================
// 🔹 some
// ====================================================

// Q14. Any divisible by 5?
console.log([1, 2, 3, 4].some(num => num % 5 === 0));

// Q15. Any number < 5?
console.log([1, 2, 3, 4].some(num => num < 5));

// ====================================================
// 🔹 every
// ====================================================

// Q16. All divisible by 3?
console.log([2, 4, 6].every(num => num % 3 === 0));

// Q17. All even?
console.log([2, 4, 6].every(num => num % 2 === 0));

// ====================================================
// 🔹 find
// ====================================================

// Q18. First number > 5
console.log([5, 1, 15, 10].find(num => num > 5));

// Q19. First even number
console.log([12, 4, 6].find(num => num % 2 === 0));

// Q20. Topper (marks > 90)
const topper = students.find(student => student.marks > 90);
console.log(topper);

// Q21. Find product in price range
const products = [
  { name: "Pen", price: 50 },
  { name: "Phone", price: 2000 },
  { name: "Laptop", price: 50000 }
];
console.log(products.find(num => num.price > 1000 && num.price < 3000));

// ====================================================
// 🔹 findIndex
// ====================================================

// Q22. First even number
console.log([1, 2, 3, 4, 5].findIndex(num => num % 2 === 0));

// Q23. First number > 30
console.log([5, 12, 34, 35].findIndex(num => num > 30));

// Q24. Index of "cat"
const arr = ["dog", "cat", "elephant"];
let findIn = arr.findIndex(num => num === "cat");
console.log(`${findIn} (because "cat" has 'a')`);

// ====================================================
// 🔹 sort
// ====================================================

// Q25. Ascending numbers
console.log([12, 23, 4, 5, 23, 54].sort((a, b) => a - b));

// Q26. String numbers as numbers
console.log(["23", "2", "33", "4"].sort((a, b) => a - b));

// Q27. People by age (descending)
const people = [
  { name: "Suresh", age: 23 },
  { name: "Aman", age: 20 },
  { name: "Neha", age: 25 }
];
const sortPeople = people.sort((a, b) => b.age - a.age);
console.log(sortPeople);

// ====================================================
// 🔹 slice
// ====================================================

// Q28. Subarray
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.slice(1, 4));

const colors = ["red", "green", "blue", "yellow", "purple"];
console.log(colors.slice(0, 3));

// ====================================================
// 🔹 splice
// ====================================================

// Q29. Replace values
const first = [1, 2, 3, 4, 5];
first.splice(0, 2, 14, 15);
console.log(first);

// Q30. Remove and replace
const second = [10, 20, 30, 50, 70, 80, 70];
second.splice(3, 3, 40, 50, 60);
console.log(second);

// Q31. Remove element
const colors = ["red", "green", "blue", "yellow", "purple"];
const removed = colors.splice(2, 1);
console.log("Removed:", removed);
console.log("After splice:", colors);
