// 🚀 Day 2 – Array Advanced Methods Practice
// This file contains 20+ practice questions with solutions covering: forEach, map, filter, reduce, some, every, find, findIndex, sort, slice, splice.

// ----------------------------------------------------
// Q1. forEach – Multiply by 5
// ----------------------------------------------------
[1, 2, 3, 4, 5].forEach(num => console.log(num * 5));

// ----------------------------------------------------
// Q2. forEach – Divide by 2
// ----------------------------------------------------
[2, 4, 6].forEach(num => console.log(num / 2));

// ----------------------------------------------------
// Q3. map – Double numbers
// ----------------------------------------------------
const double = [1, 2, 3].map(num => num * 2);
console.log(double);

// ----------------------------------------------------
// Q4. map – Divide by 5
// ----------------------------------------------------
const div = [10, 15, 20].map(num => num / 5);
console.log(div);

// ----------------------------------------------------
// Q5. filter – Numbers > 15
// ----------------------------------------------------
const adds = [1, 2, 4, 8, 16, 32].filter(num => num > 15);
console.log(adds);

// ----------------------------------------------------
// Q6. filter – Even numbers greater than 9
// ----------------------------------------------------
const one = [1, 2, 4, 10, 14, 17, 20, 22, 23].filter(num => num > 9 && num % 2 === 0);
console.log(one);

// ----------------------------------------------------
// Q7. reduce – Sum with squares
// ----------------------------------------------------
const sum = [1, 2, 3, 4].reduce((a, b) => a + b * b);
console.log(sum);

// ----------------------------------------------------
// Q8. reduce – Add all numbers
// ----------------------------------------------------
const addOne = [1, 2, 3].reduce((a, b) => a + b, 0);
console.log(addOne);

// ----------------------------------------------------
// Q9. some – Any divisible by 5?
// ----------------------------------------------------
console.log([1, 2, 3, 4].some(num => num % 5 === 0));

// ----------------------------------------------------
// Q10. some – Any number < 5?
// ----------------------------------------------------
console.log([1, 2, 3, 4].some(num => num < 5));

// ----------------------------------------------------
// Q11. every – All divisible by 3?
// ----------------------------------------------------
console.log([2, 4, 6].every(num => num % 3 === 0));

// ----------------------------------------------------
// Q12. every – All even?
// ----------------------------------------------------
console.log([2, 4, 6].every(num => num % 2 === 0));

// ----------------------------------------------------
// Q13. find – First number > 5
// ----------------------------------------------------
console.log([5, 1, 15, 10].find(num => num > 5));

// ----------------------------------------------------
// Q14. find – First even number
// ----------------------------------------------------
console.log([12, 4, 6].find(num => num % 2 === 0));

// ----------------------------------------------------
// Q15. findIndex – First even number
// ----------------------------------------------------
console.log([1, 2, 3, 4, 5].findIndex(num => num % 2 === 0));

// ----------------------------------------------------
// Q16. findIndex – First number > 30
// ----------------------------------------------------
console.log([5, 12, 34, 35].findIndex(num => num > 30));

// ----------------------------------------------------
// Q17. sort – Ascending numbers
// ----------------------------------------------------
console.log([12, 23, 4, 5, 23, 54].sort((a, b) => a - b));

// ----------------------------------------------------
// Q18. sort – String numbers as numbers
// ----------------------------------------------------
console.log(["23", "2", "33", "4"].sort((a, b) => a - b));

// ----------------------------------------------------
// Q19. slice – Subarray
// ----------------------------------------------------
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.slice(1, 4));

// ----------------------------------------------------
// Q20. splice – Replace values
// ----------------------------------------------------
const first = [1, 2, 3, 4, 5];
first.splice(0, 2, 14, 15);
console.log(first);

// ----------------------------------------------------
// Q21. splice – Remove and replace
// ----------------------------------------------------
const second = [10, 20, 30, 50, 70, 80, 70];
second.splice(3, 3, 40, 50, 60);
console.log(second);

// ----------------------------------------------------
// Q22. map – Extract student names
// ----------------------------------------------------
const students = [
  { name: "Suresh", marks: 85 },
  { name: "Amit", marks: 45 },
  { name: "Neha", marks: 92 },
  { name: "Ravi", marks: 67 },
  { name: "Priya", marks: 74 }
];
const names = students.map(student => student.name);
console.log(names);

// ----------------------------------------------------
// Q23. filter – Students passed (>70 marks)
// ----------------------------------------------------
const passed = students.filter(student => student.marks > 70);
console.log(passed);

// ----------------------------------------------------
// Q24. reduce – Average marks
// ----------------------------------------------------
const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const average = totalMarks / students.length;
console.log(average);

// ----------------------------------------------------
// Q25. find – Topper (marks > 90)
// ----------------------------------------------------
const topper = students.find(student => student.marks > 90);
console.log(topper);

// ----------------------------------------------------
// Q26. forEach – Log fruits
// ----------------------------------------------------
const fruit = ["apple", "banana", "cherry"];
fruit.forEach((element, index) => {
  fruit[index] = element.toUpperCase();
});
console.log(fruit);

// ----------------------------------------------------
// Q27. reduce – Max value in array
// ----------------------------------------------------
const nums = [12, 45, 7, 89, 34];
console.log(nums.reduce((max, n) => Math.max(max, n), nums[0]));

// ----------------------------------------------------
// Q28. sort – People by age (descending)
// ----------------------------------------------------
const people = [
  { name: "Suresh", age: 23 },
  { name: "Aman", age: 20 },
  { name: "Neha", age: 25 }
];
const sortPeople = people.sort((a, b) => b.age - a.age);
console.log(sortPeople);
