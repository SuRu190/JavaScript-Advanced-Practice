/* -------------------------
   🚀 Day 3 – Destructuring, Template Literals & setTimeout
   This file contains 16 JavaScript practice questions with solutions covering: Array & Object Destructuring, Nested Destructuring, Default Values in Destructuring, Template Literals, setTimeout in loops.
   ------------------------- 
*/

// Q1. Destructuring an array
const numbers = [10, 20, 30];
const [a, , c] = numbers;
console.log(`a = ${a}`);
console.log(`c = ${c}`);

// Q2. Destructuring with skipping values
const colors = ["red", "green", "blue", "yellow"];
const [, second, , fourth] = colors;
console.log(`second color = ${second}`);
console.log(`fourth color = ${fourth}`);

// Q3. Destructuring coordinates
const coords = [12, 45, 78];
const [x, y, z] = coords;
console.log(x, y, z);

// Q4. Object destructuring
const car = { brand: "Tesla", model: "X", year: 2022 };
const { brand, year } = car;
console.log(`Brand: ${brand}`);
console.log(`Year: ${year}`);

// Q5. Object destructuring with multiple properties
const laptop = { cpu: "i5", ram: "8GB", storage: "512GB" };
const { cpu, ram, storage } = laptop;
console.log(`CPU: ${cpu}, RAM: ${ram}, Storage: ${storage}`);

// Q6. Destructuring with renamed variables
const person = { name: "Suresh", age: 23, city: "Delhi" };
const { name, city } = person;
console.log(`Name: ${name}, City: ${city}`);

// Q7. Nested array of objects destructuring
const users = [
  { id: 1, username: "Aman" },
  { id: 2, username: "Neha" },
  { id: 3, username: "Suresh" },
  { id: 4, username: "Mohit" },
];
const [{ id: firstUserID }, , { username: thirdUserName }] = users;
console.log(`firstUserID = ${firstUserID}`);
console.log(`thirdUserName = ${thirdUserName}`);

// Q8. Simple array destructuring
const fruits = ["apple", "banana", "mango"];
const [fruit1, , fruit3] = fruits;
console.log(fruit1, fruit3);

// Q9. Skipping values with arrays
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

// Q12. Nested object destructuring (Weather API example)
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
  wind: { speed },
} = apiResponse;

console.log(`📍 Location: ${locCity}, ${country}`);
console.log(`🌡 Temp: ${current}°C (Feels like ${feels_like}°C), Humidity: ${humidity}`);
console.log(`☀️ Condition: ${condition}`);
console.log(`💨 Wind Speed: ${speed} km/h`);

// Q13. Nested object destructuring with defaults
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
console.log(`🎂 Second User Age: ${secondUserAge}`);
console.log(`🆔 Third User ID: ${thirdUserId}`);
console.log(`📊 Status: ${status}`);

// Q14. Complex destructuring with missing nested objects
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
    { id: thirdId }
  ],
  meta: { verified }
} = apiResponse2;

console.log(`🏙 Ravi's City: ${firstUserCity}`);
console.log(`🎂 Priya's Age: ${secondUserAge}`);
console.log(`🆔 Suresh's ID: ${thirdId}`);
console.log(`✅ Verified: ${verified}`);

// Q15. setTimeout inside loop
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// Q16. Template literals
function greet(name, age) {
  return `Hello, my name is ${name}, and I am ${age} years old.`;
}
console.log(greet("Suresh", 21));
