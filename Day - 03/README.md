# 🚀 Day 3 – Destructuring, Template Literals & setTimeout

## 📌 Overview
This file contains **16 JavaScript practice questions with solutions** covering:
- Array & Object Destructuring  
- Nested Destructuring  
- Default Values in Destructuring  
- Template Literals  
- setTimeout in loops  

---

## 🎯 Topics Covered
- Basic **array destructuring** with skipping values  
- **Object destructuring** with multiple properties  
- **Nested destructuring** for arrays and objects  
- Using **default values** when keys are missing  
- Template literals for cleaner string formatting  
- Behavior of `setTimeout` inside a `for` loop  

---

## 💡 What I Practiced & Learned
- How to extract data from arrays and objects quickly.  
- Skipping values and renaming variables in destructuring.  
- Applying **default values** in case of missing keys.  
- Working with **deeply nested API responses** using destructuring.  
- Using template literals for cleaner dynamic strings.  
- How closures + `setTimeout` interact with loops.  

---

# 📝 Questions & Answers

```js
// Q1. Destructure an array
const numbers = [10,20,30];
const [a, , c] = numbers;
console.log(a, c);

// Q2. Destructure with skipping
const colors = ["red", "green", "blue", "yellow"];
const [, second, , fourth] = colors;
console.log(second, fourth);

// Q3. Destructure coordinates
const coords = [12, 45, 78];
const [x, y, z] = coords;
console.log(x, y, z);

// Q4. Object destructuring
const car = { brand: "Tesla", model: "X", year: 2022 };
const { brand, year } = car;
console.log(brand, year);

// Q5. Multiple properties
const laptop = { cpu: "i5", ram: "8GB", storage: "512GB" };
const { cpu, ram, storage } = laptop;
console.log(cpu, ram, storage);

// Q6. Object destructuring with renaming
const person = { name: "Suresh", age: 23, city: "Delhi" };
const { name, city } = person;
console.log(name, city);

// Q7. Nested array of objects
const users = [
  { id: 1, username: "Aman" },
  { id: 2, username: "Neha" },
  { id: 3, username: "Suresh" }
];
const [{ id: firstUserID }, , { username: thirdUserName }] = users;
console.log(firstUserID, thirdUserName);

// Q8. Array destructuring
const fruits = ["apple", "banana", "mango"];
const [fruit1, , fruit3] = fruits;
console.log(fruit1, fruit3);

// Q9. Skipping values
const nums = [100, 200, 300, 400];
const [, secondNum, , fourthNum] = nums;
console.log(secondNum, fourthNum);

// Q10. Nested array destructuring
const values = [1, 2, [3, 4]];
const [first, ,[third, fourth]] = values;
console.log(first, third, fourth);

// Q11. Object destructuring
const student = { name: "Suresh", age: 23, course: "B.Tech" };
const { name: studentName, course } = student;
console.log(studentName, course);

// Q12. Nested object destructuring (Weather API)
const apiResponse = {
  location: { city: "Delhi", country: "India" },
  forecast: { temperature: { current: 32, feels_like: 35, humidity: "60%" }, condition: "Sunny" },
  wind: { speed: 12 }
};
const { location: { city: locCity, country }, forecast: { temperature: { current }, condition } } = apiResponse;
console.log(locCity, country, current, condition);

// Q13. Nested object with defaults
const apiData = {
  users: [{ name: "Aman", age: 25 }, { name: "Neha" }, { id: 3, name: "Suresh", age: 23 }],
  meta: { status: "active" }
};
const { users: [ { name: firstUserName }, { age: secondUserAge = "Not Provided" } ] } = apiData;
console.log(firstUserName, secondUserAge);

// Q14. Complex nested destructuring
const apiResponse2 = {
  users: [{ id: 1, name: "Ravi", details: { city: "Delhi" } }, { id: 2, name: "Priya" }, { id: 3, name: "Suresh", details: { age: 23 } }],
  meta: { verified: true }
};
const { users: [{ details: { city: firstUserCity } }, { details: { age: secondUserAge = "Not Provided" } = {} }] } = apiResponse2;
console.log(firstUserCity, secondUserAge);

// Q15. setTimeout with loop
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// Q16. Template literals
function greet(name, age) {
  return `Hello, my name is ${name}, and I am ${age} years old.`;
}
console.log(greet("Suresh", 21));
