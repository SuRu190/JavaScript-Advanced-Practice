// 🚀 Day 2 – Array Methods Practice
// This file contains 35 practice questions with solutions covering: forEach(), map(), filter(), reduce(), some(), every(), find(), findIndex(), sort(), slice(), splice()

// ====================================================
// 🔹 forEach()
// ====================================================

// Q1. Multiply each element by 5
[1,2,3,4,5].forEach(num => console.log(num * 5));

// Q2. Divide each number by 2
[2,4,6].forEach(num => console.log(num / 2));

// Q3. Print numbers directly
[10,20,30,40,50].forEach(num => console.log(num));

// Q4. Convert fruits to uppercase
const fruit = ["apple", "banana", "cherry"];
fruit.forEach((element, index) => {
  fruit[index] = element.toUpperCase();
});
console.log(fruit);

// ====================================================
// 🔹 map()
// ====================================================

// Q5. Double numbers
const double = [1,2,3].map(num => num * 2);
console.log(double);

// Q6. Divide numbers by 5
const div = [10,15,20].map(num => num / 5);
console.log(div);

// Q7. Double an array
const numbers = [1,2,3,4];
let doubleNum = numbers.map(num => num * 2);
console.log(doubleNum);

// Q8. Extract names from users
const users = [
  { id: 1, name: "Suresh" },
  { id: 2, name: "Aman" },
  { id: 3, name: "Neha" }
];
console.log(users.map(u => u.name));

// Q9. Extract student names
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
// 🔹 filter()
// ====================================================

// Q10. Filter numbers greater than 15
const adds = [1,2,4,8,16,32].filter(num => num > 15);
console.log(adds);

// Q11. Filter even numbers greater than 9
const one = [1,2,4,10,14,17,20,22,23].filter(num => num > 9 && num % 2 === 0);
console.log(one);

// Q12. Filter numbers > 50
const array = [25,60,45,80,15];
let filt = array.filter(num => num > 50);
console.log(filt);

// Q13. Filter marks > 75
const marks = [45, 80, 60, 90, 30];
console.log(marks.filter(num => num > 75));

// Q14. Filter passed students
const passed = students.filter(student => student.marks > 70);
console.log(passed);

// ====================================================
// 🔹 reduce()
// ====================================================

// Q15. Add squares of numbers
const sum = [1,2,3,4].reduce((a, b) => a + b * b);
console.log(sum);

// Q16. Add numbers
const addOne = [1,2,3].reduce((a,b) => a+b, 0);
console.log(addOne);

// Q17. Sum of array
const num = [5,10,15,20];
let sumNum = num.reduce((a,b) => a + b,0);
console.log(sumNum);

// Q18. Maximum number
const nums = [12, 45, 7, 89, 34];
console.log(nums.reduce((max, n) => Math.max(max, n), nums[0]));

// Q19. Average student marks
const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const average  = totalMarks / students.length;
console.log(average);

// ====================================================
// 🔹 some()
// ====================================================

// Q20. Check if divisible by 5
console.log([1,2,3,4].some(num => num % 5 === 0));

// Q21. Check if less than 5
console.log([1,2,3,4].some(num => num < 5 ));

// Q22. Odd number check
const numb = [1,3,5,7,8];
let odd = numb.some(num => num % 2 !== 0);
console.log(odd);

// Q23. Negative number check
const numbers2 = [3, 5, -2, 9];
console.log(numbers2.some(num => num < 0));

// ====================================================
// 🔹 every()
// ====================================================

// Q24. Check if divisible by 3
console.log([2,4,6].every(num => num % 3 === 0));

// Q25. Check if all even
console.log([2,4,6].every(num => num % 2 === 0));
console.log([2,4,6,8].every(num => num % 2 === 0));

// Q26. Word length >= 3
const words = ["sum", "sky", "blue"];
console.log(words.every(num => num.length >= 3));

// ====================================================
// 🔹 find()
// ====================================================

// Q27. Find number > 5
console.log([5,1,15,10].find(num => num > 5));

// Q28. Find even number
console.log([12,4,6].find(num => num % 2 === 0));

// Q29. Find > 30
const numm = [10,20,35,40];
console.log(numm.find(num => num > 30));

// Q30. Find student topper
const topper = students.find(student => student.marks > 90);
console.log(topper);

// Q31. Find product price range
const products = [
  { name: "Pen", price: 50 },
  { name: "Phone", price: 2000 },
  { name: "Laptop", price: 50000 }
];
console.log(products.find(num => num.price > 1000 && num.price < 3000));

// ====================================================
// 🔹 findIndex()
// ====================================================

// Q32. Find index of even number
console.log([1,2,3,4,5].findIndex(num => num % 2 === 0)); 

// Q33. Find index > 30
console.log([5,12,34,35].findIndex(num => num > 30)); 

// Q34. Find index of "cat"
const arrAnimals = ["dog", "cat", "elephant"];
let findIn = arrAnimals.findIndex(num => num === "cat");
console.log(`${findIn} (because "cat" has 'a')`);

// Q35. Find index > 50
const numbe = [10,20,60,80];
console.log(numbe.findIndex(num => num > 50));

// ====================================================
// 🔹 sort()
// ====================================================

// Q36. Sort numbers ascending
console.log([12,23,4,5,23,54].sort((a, b) => a - b));
console.log([40,10,30,20].sort((a, b) => a - b));

// Q37. Sort strings as numbers
console.log(["23", "2", "33", "4"].sort((a, b) => a - b));

// Q38. Sort people by age (desc)
const people = [
  { name: "Suresh", age: 23 },
  { name: "Aman", age: 20 },
  { name: "Neha", age: 25 }
];
const sortPeople = people.sort((a,b) => b.age - a.age);
console.log(sortPeople);

// ====================================================
// 🔹 slice()
// ====================================================

// Q39. Slice [1,2,3,4,5]
const arr1 = [1,2,3,4,5];
console.log(arr1.slice(1, 4));

// Q40. Slice [4,5,2,57,43]
const arr2 = [4,5,2,57,43];
console.log(arr2.slice(1,3));

// Q41. Slice first 3 fruits
const fruits = ["apple", "banana", "cherry", "date", "grape"];
console.log(fruits.slice(0, 3));

// Q42. Slice colors
const colors = ["red", "green", "blue", "yellow", "purple"];
console.log(colors.slice(0, 3));

// ====================================================
// 🔹 splice()
// ====================================================

// Q43. Replace first 2 elements
const first = [1,2,3,4,5];
first.splice(0, 2, 14, 15);
console.log(first);

// Q44. Replace middle elements
const second = [10,20,30,50,70,80,70];
second.splice(3, 3, 40, 50, 60);
console.log(second);

// Q45. Remove 2 fruits
const fruits = ["apple", "banana", "cherry", "date", "grape"];
console.log(fruits.splice(1,2));
console.log(fruits);

// Q46. Splice colors
const removed = colors.splice(2, 1);
console.log("Removed:", removed);
console.log("After splice:", colors);
