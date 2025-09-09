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

// ====================================================
// 🔹 setTimeout
// ====================================================

// Q1. Print numbers with delay
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// ====================================================
// 🔹 Template Literals
// ====================================================

// Q2. Greeting message
function greet(name, age) {
  return `Hello, my name is ${name}, and i am ${age} years old`
}
console.log(greet("Suresh", 21));

// ====================================================
// 🔹 Basic Array Destructuring
// ====================================================

// Q3. Extract 1st and 3rd fruit
const fruits = ["apple", "banana", "cherry"];
const [f1, , f3] = fruits;
console.log(f1);
console.log(f3);

// Q4. Object destructuring (user)
const user = { id: 101, name: "Aman", city: "Delhi" };
const { name, city } = user;
console.log(`Name: ${name}, City: ${city}`);

// Q5. Numbers destructuring
const numbers = [10, 20, 30];
const [a, , c] = numbers;
console.log(`a = ${a}`);
console.log(`c = ${c}`);

// Q6. Colors destructuring
const colors = ["red", "green", "blue", "yellow"];
const [, second, , fourth] = colors;
console.log(`second color = ${second}`);
console.log(`fourth color = ${fourth}`);

// Q7. Coordinates destructuring
const coords = [12, 45, 78];
const [x, y, z] = coords;
console.log(x);
console.log(y);
console.log(z);

// ====================================================
// 🔹 Basic Object Destructuring
// ====================================================

// Q8. Car object
const car = { brand: "Tesla", model: "X", year: 2022 };
const { brand, year } = car;
console.log(`Brand: ${brand}`);
console.log(`Year: ${year}`);

// Q9. Laptop object
const laptop = { cpu: "i5", ram: "8GB", storage: "512GB" };
const { cpu, ram, storage } = laptop;
console.log(`CPU: ${cpu}`);
console.log(`RAM: ${ram}`);
console.log(`Storage: ${storage}`);

// Q10. Person object
const person = { name: "Suresh", age: 23, city: "Delhi" };
const { name: pName, city: pCity } = person;
console.log(`Name: ${pName}`);
console.log(`City: ${pCity}`);

// ====================================================
// 🔹 Array of Objects Destructuring
// ====================================================

// Q11. Extract from array of objects
const users = [
  { id: 1, username: "Aman" },
  { id: 2, username: "Neha" },
  { id: 3, username: "Suresh" },
  { id: 4, username: "Mohit" },
];
const [{ id: firstUserID }, , { username: thirdUserName }] = users;
console.log(`firstUserID = ${firstUserID}`);
console.log(`thirdUserName = "${thirdUserName}"`);

// ====================================================
// 🔹 More Array Destructuring
// ====================================================

// Q12. Fruits
const fruits2 = ["apple", "banana", "mango"];
const [fruit1, , fruit3] = fruits2;
console.log(fruit1);
console.log(fruit3);

// Q13. Numbers
const nums = [100, 200, 300, 400];
const [, secondNum, , fourthNum] = nums;
console.log(secondNum);
console.log(fourthNum);

// Q14. Nested array
const values = [1, 2, [3, 4]];
const [first, , [third, fourth]] = values;
console.log(first);
console.log(third);
console.log(fourth);

// Q15. Student object
const student = { name: "Suresh", age: 23, course: "B.Tech" };
const { name: sName, course } = student;
console.log(sName);
console.log(course);

// ====================================================
// 🔹 Advanced Nested Destructuring
// ====================================================

// Q16. API Response (weather)
const apiResponse = {
  location: { city: "Delhi", country: "India" },
  forecast: {
    temperature: { current: 32, feels_like: 35, humidity: "60%" },
    condition: "Sunny",
  },
  wind: { speed: 12, direction: "NE" },
};

const {
  location: { city: locCity, country },
  forecast: { temperature: { current, feels_like, humidity = "Not Provided" }, condition },
  wind: { speed }
} = apiResponse;

console.log(`📍 Location: ${locCity}, ${country}`);
console.log(`🌡 Temperature: ${current}°C (Feels like ${feels_like}°C), 💧 Humidity : ${humidity}`);
console.log(`☀️ Condition: ${condition}`);
console.log(`💨 Wind: ${speed} km/h`);

// Q17. API Data (users + meta)
const apiData = {
  users: [
    { id: 1, name: "Aman", age: 25 },
    { id: 2, name: "Neha" }, // age missing
    { id: 3, name: "Suresh", age: 23 }
  ],
  meta: { totalUsers: 3, status: "active" }
};

const {
  users: [
    { name: firstUserName },
    { age: secondUserAge = "Not Provided" },
    { id: thirdUserId }
  ],
  meta: { status }
} = apiData;

console.log(`👤 First User: ${firstUserName}`);
console.log(`🎂 Second User Age : ${secondUserAge}`);
console.log(`🆔 Third User ID: ${thirdUserId}`);
console.log(`📊 Status: ${status}`);

// Q18. API Response (optional chaining style)
const apiResponse2 = {
  users: [
    { id: 1, name: "Ravi", details: { age: 28, city: "Delhi" } },
    { id: 2, name: "Priya" }, // details missing
    { id: 3, name: "Suresh", details: { age: 23 } }
  ],
  meta: { total: 3, verified: true }
};

const {
  users: [
    { details: { city: firstUserCity } },
    { details: { age: secondUserAge = "Not Provided" } = {} },
    { id: thirdUserId }
  ],
  meta: { verified: verification }
} = apiResponse2;

console.log(`🏙 Ravi's City: ${firstUserCity}`);
console.log(`🎂 Priya's Age: ${secondUserAge}`);
console.log(`🆔 Suresh's ID: ${thirdUserId}`);
console.log(`✅ Verified: ${verification}`);
