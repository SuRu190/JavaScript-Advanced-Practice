# 🚀 Day - 09 | Mixed Revision, covering all days from Day

## 📌 Overview
This day is a **revision mix** of **Day-01 to Day-08** covering all major topics:  
- Advanced Functions  
- Arrays & ES6 Features  
- DOM Manipulation (Events & Forms)  
- Asynchronous JavaScript (setTimeout, setInterval, Promises)  
- Fetch API & JSON  
- LocalStorage & SessionStorage  

---

## 🎯 Topics Covered
- Function declarations, expressions & arrow functions  
- Rest/Spread, Default Parameters, Closures  
- Arrays (`map`, `filter`, `reduce`, `slice`, `splice`, etc.)  
- ES6+ Features (Destructuring, Template Literals, let/const)  
- DOM events (`click`, `keydown`, `submit`, etc.)  
- setTimeout, setInterval, Promises & Async/Await  
- Fetch API for external data  
- JSON Parse & Stringify  
- LocalStorage + SessionStorage usage  

---

## 📝 Instructions
- Open **index.html** in browser.  
- For **console-based questions** → see output in browser console.  
- For **DOM-based questions** → uncomment the required HTML elements (mentioned in comments in `index.html`).  

---

## ✅ Example Flow
- **Q26 (DOM – Button Click):** Uncomment `<button id="btn">` in `index.html` → clicking prints `"Button Clicked!"` in console.  
- **Q40 (Fetch API):** Runs directly, logs API response in console.  
- **Q52 (Theme Toggle):** Uncomment button in `index.html`, click to toggle theme (light/dark).


```js
// ==========================
// Day - 01 | Advanced Functions
// ==========================

/* Q1 - Write a function that returns the sum of 2 numbers using both function declaration and function expression. */
/*
console.log(sum(5, 10));
function sum(a, b) {
    return a + b;
}
let add = function(a, b) {
    return a + b;
}
console.log(add(5, 10));
*/


/* Q2 - Create an arrow function that returns the square of a number. */
/*
let square1 = function(a) { return a * a; }
console.log(square1(4));
let square2 = a => a * a;
console.log(square2(5));
*/


/* Q3 - Write a function that uses default parameters (if no value is passed, it should print "Guest"). */
/*
function auto(name = "Guest") {
    return `Hello, ${name}`;
}
console.log(auto());
console.log(auto("Suresh"));
*/


/* Q4 - Use rest parameter ...args to create a function that calculates the sum of all numbers. */
/*
function sumAll(...args) {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3, 4));
*/


/* Q5 - Create a higher-order function that takes a function as an argument and calls it. */
/*
function multiplier(factor) {
    return function(num) {
        return num * factor;
    }
}
const double = multiplier(2);
console.log(double(5));
*/


/* Q6 - Write a function calculate(operation, ...nums) that: 
  -  If operation = "add" → returns the sum of nums
  -  If operation = "multiply" → returns the product of nums
*/
/*
function calculate(operation, ...nums) {
    if (operation === "add") return nums.reduce((a, b) => a + b, 0);
    if (operation === "multiply") return nums.reduce((a, b) => a * b, 1);
    throw new Error("Invalid Operator");
}
console.log(calculate("multiply", 1, 2, 3, 4));
*/


/* Q7 - Create a function delayedMessage(msg, delay) that prints the message after the given delay (in milliseconds). */
/*
function delayedMessage(msg = "Hello, World!", delay = 2000) {
    setTimeout(() => {
        console.log(msg);
    }, delay);
}
delayedMessage();
delayedMessage("Hello User");
delayedMessage("After 3 sec", 3000);
*/


/* Q8 - Write a higher-order function once(fn) that ensures a function can only be called once. */
/*
function once(fn) {
    let called = false, result;
    return function(...args) {
        if (!called) {
            called = true;
            result = fn.apply(this, args);
        }
        return result;
    }
}
const greet = once((num) => {
    console.log("Running once with", num);
    return num * 2;
});
console.log(greet(5));
console.log(greet(10)); // won’t run again
*/



// ==========================
// Day - 02 | Arrays Advanced Methods
// ==========================

/* Q9 - Double each element in the array [2, 4, 6, 8] using map. */
/*
let arr1 = [2, 4, 6, 8];
console.log(arr1.map(num => num * 2));
*/


/* Q10 - Filter out all even numbers from an array. */
/*
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arr2.filter(num => num % 2 === 0));
*/


/* Q11 - Calculate the sum of the array [10, 20, 30, 40] using reduce. */
/*
let arr3 = [10, 20, 30, 40];
console.log(arr3.reduce((a, b) => a + b, 0));
*/


/* Q12 - Check if at least one element in an array is greater than 50 using some. */
/*
let check1 = [10, 30, 50, 60, 70];
console.log(check1.some(num => num > 50));
*/


/* Q13 - Check if all elements in an array are positive using every. */
/*
let check2 = [2, 4, 3];
console.log(check2.every(num => num > 0));
*/


/* Q14 - Sort the string array ["apple", "banana", "kiwi"] alphabetically. */
/*
let fruits = ["apple", "banana", "kiwi"];
console.log(fruits.sort());
*/


/* Q15 - Demonstrate the difference between slice and splice using the array [1, 2, 3, 4, 5] with examples. */
/*
let oneArr = [1, 2, 3, 4, 5];
console.log(oneArr.slice(0, 3));
oneArr.splice(1, 3);
console.log(oneArr);
*/


/* Q16 - Given:
  const students = [
  { name: "Aman", marks: 85 },
  { name: "Neha", marks: 92 },
  { name: "Ravi", marks: 45 },
  { name: "Priya", marks: 77 }
];
  - Use filter to get students with marks > 75
  - Use map to return an array of just names
  - Use reduce to calculate average marks
*/
/*
const students = [
  { name: "Aman", marks: 85 },
  { name: "Neha", marks: 92 },
  { name: "Ravi", marks: 45 },
  { name: "Priya", marks: 77 }
];
// 1
const highScores = students.filter(s => s.marks > 75);
console.log("High Scores:", highScores);
// 2
const names = students.map( s => s.name);
console.log("Names:", names);
// 3
const avg = students.reduce((acc, s) => acc + s.marks, 0) / students.length;
console.log("Average marks:", avg);
*/


/* Q17 - Given [1, 2, 3, 4, 5], use reduce to reverse the array. (Don’t use .reverse()). */
/*
const arr = [1, 2, 3, 4, 5];
const reversed = arr.reduce((acc, val) => [val, ...acc], []);
console.log(reversed);
*/


/* Q18 - Sort the array ["banana", "apple", "Mango", "cherry"] in case-insensitive alphabetical order. */
/*
const fruits = ["banana", "apple", "Mango", "cherry"];
fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(fruits);
*/



// ==========================
// Day - 03 | ES6+ Features
// ==========================

/* Q19 - Provide an example that clearly demonstrates the difference in scope between var and let. */
/*
// var
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
// let
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 100);
}
*/


/* Q20 - Create a string using template literals: "My name is Suresh and I love JavaScript". */
/*
console.log(`My name is Suresh and I Love JavaScript`);
*/


/* Q21 - Destructure the object { name: "Suresh", city: "Delhi" } into separate variables. */
/*
let obj1 = { name: "Suresh", city: "Delhi" };
let { name, city } = obj1;
console.log(name, city);
*/


/* Q22 - Destructure the array [1, 2, 3] into variables a, b, and c. */
/*
let arr4 = [1, 2, 3];
let [a, b, c] = arr4;
console.log(a, b, c);
*/


/* Q23 - Use object destructuring to extract x, y from: const point = { x: 10, y: 20, z: 30 }; */
/*
const point = { x: 10, y: 20, z: 30 };
const { x: xVal, y: yVal } = point;
console.log(xVal, yVal);
*/


/* Q24 - Write a function using template literals that returns: "My name is ___ and I am ___ years old" */
/*
function literals(name, age) {
    return `My name is ${name}, and I am ${age} years old`;
}
console.log(literals("Suresh", 22));
*/


/* Q25 - Show with code: why let and const are block scoped but var is not. */
/*
// var 
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
// let 
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
// const
const num = 10;
num = 20; // ❌ Error
*/



// ==========================
// Day - 04 | DOM (Events)
// ==========================

/* Q26 - Create a button that prints "Button clicked" to the console when clicked. */
/*
const button = document.getElementById("btn");
button.addEventListener("click", () => console.log("Button Clicked!"));
*/


/* Q27 - Use event delegation to create a <ul> list where clicking on any <li> item prints its text content. */
/*
const list = document.getElementById("list");
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") console.log("Clicked:", e.target.textContent);
});
*/


/* Q28 - Create a keyboard event that logs "Enter Pressed" when the Enter key is pressed. */
/*
document.getElementById("input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Enter Pressed!");
  }
});
*/


/* Q29 - Create a form and use preventDefault() to prevent it from submitting, then log "Form submitted" to the console instead. */
/*
const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form Submitted");
});
*/


/* Q30 - Create a counter with + / - buttons and a span showing the value.
  - Use event delegation for buttons.
  - Prevent the counter from going below 0.
*/
/*
const count = document.getElementById("count");
let value = 0;
document.getElementById("buttons").addEventListener("click", (e) => {
  if (e.target.id === "inc") value++;
  if (e.target.id === "dec" && value > 0) value--;
  count.textContent = value;
});
*/


/* Q31 - Create a form with name + email input. On submit:
  - Prevent default refresh.
  - Show "Welcome, <name>!" below the form.
*/
/*
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const para = document.getElementById("para");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  para.textContent = `Welcome, ${nameInput.value}`;
  setTimeout(() => { para.textContent = ""; }, 2000);
});
*/


/* Q32 - Add an event listener that logs every key the user types in an input box */
/*
const input2 = document.getElementById("userInput");
input2.addEventListener("keydown", (e) => console.log(`User Pressed: ${e.key}`));
*/



// ==========================
// Day - 06 | Asynchronous JS
// ==========================

/* Q33 - Use setTimeout to print "Hello after 3s" after 3 seconds. */
/*
setTimeout(() => console.log("Hello after 3s"), 3000);
*/


/* Q34 - Use setInterval to print an increasing number every 2 seconds. */
/*
let num2 = 1;
let increase = setInterval(() => {
    console.log("Count:", num2++);
    if (num2 > 5) clearInterval(increase);
}, 2000);
*/


/* Q35 - Write a small example of callback hell (e.g., print "A" after 1s, "B" after 2s, and "C" after 3s). */
/*
setTimeout(() => {
    console.log("A");
    setTimeout(() => {
        console.log("B");
        setTimeout(() => console.log("C"), 1000);
    }, 1000);
}, 1000);
*/


/* Q36 - Create a promise that resolves after 2 seconds with the message "Promise resolved!" and log it using .then(). */
/*
let promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise Resolved!"), 2000);
});
promise1.then(msg => console.log(msg)).catch(err => console.log(err));
*/


/* Q37 - Write a function that prints "Start", waits 2s, prints "Middle", waits 2s, prints "End". */
/*
function wait(ms) { return new Promise(res => setTimeout(res, ms)); }
console.log("Start");
wait(2000).then(() => {
    console.log("Middle");
    return wait(2000);
}).then(() => console.log("End"));
*/


/* Q38 - Implement a wait(ms) function using Promise that resolves after ms milliseconds. */
/*
function delay(ms = 2000) {
    return new Promise(res => setTimeout(() => res(`After ${ms}ms`), ms));
}
delay().then(msg => console.log(msg));
*/


/* Q39 - Write an interval timer that prints numbers 1-5, then stops automatically. */
/*
let count2 = 1;
let interval = setInterval(() => {
    console.log("Num", count2++);
    if (count2 > 5) clearInterval(interval);
}, 1000);
*/



// ==========================
// Day - 07 | Fetch API + JSON
// ==========================

/* Q40 - Use fetch("") to print the title of the post. */
/*
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log("Title:", data.title))
  .catch(err => console.log("Error:", err));
*/


/* Q41 - Write an async/await function that fetches a random joke and prints it to the console. */
/*
async function randomJoke() {
    try {
        let res = await fetch("https://official-joke-api.appspot.com/random_joke");
        let joke = await res.json();
        console.log(joke);
    } catch (err) { console.log("Error", err); }
}
randomJoke();
*/


/* Q42 - Create a try...catch example that fetches data from an incorrect API and handles the error. */
/*
async function wrongApi() {
    try {
        let res = await fetch("https://wrongApi.com");
        let data = await res.json();
        console.log(data);
    } catch (err) { console.log("Error:", err); }
}
wrongApi();
*/


/* Q43 - Convert the object {id: 1, name: "Suresh"} to a JSON string and print it to the console. */
/*
let obj2 = {id: 1, name: "Suresh"};
console.log("String:", JSON.stringify(obj2));
*/


/* Q44 - Parse a JSON string and create a normal JavaScript object, then print its values. */
/*
const jsonStr = '{"company":"OpenAI","product":"ChatGPT","year":2025}';
const obj3 = JSON.parse(jsonStr);
console.log(obj3);
*/


/* Q45 - Fetch data from: 
  https://jsonplaceholder.typicode.com/todos/1
  - Print the title using both .then() and async/await.
*/
/*
// using .then()
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(res => res.json())
  .then(data => console.log("Title:", data.title));
// using async/await
async function extract() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await res.json();
    console.log("Title:", data.title);
}
extract();
*/


/* Q46 - Write a function getUsers() that: 
  - Fetches users from https://jsonplaceholder.typicode.com/users
  - Returns an array of just their names.
*/
/*
async function getUsers() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();
    users.forEach(u => console.log(u.name));
}
getUsers();
*/


/* Q47 - Convert this object to JSON string & back to object: 
  { id: 1, product: "Laptop", price: 50000 };
*/
/*
let obj4 = { id: 1, product: "Laptop", price: 50000 };
let str = JSON.stringify(obj4);
console.log("To String:", str);
console.log("Get back:", JSON.parse(str));
*/



// ==========================
// Day - 08 | LocalStorage + SessionStorage
// ==========================

/* Q48 - Store "username" = "Suresh" in LocalStorage and retrieve it to print. */
/*
localStorage.setItem("username", "Suresh");
console.log(localStorage.getItem("username"));
*/


/* Q49 - Store an object {loggedIn: true} in SessionStorage using stringify and retrieve it back. */
/*
sessionStorage.setItem("obj", JSON.stringify({ loggedIn: true }));
console.log(sessionStorage.getItem("obj"));
*/


/* Q50 - Store a counter in LocalStorage that increments by +1 on every reload. */
/*
let count3 = Number(localStorage.getItem("count")) || 0;
count3++;
localStorage.setItem("count", count3);
console.log("Count:", count3);
*/


/* Q51 - Save a fruit array in LocalStorage, retrieve it, and print its 2nd element */
/*
let fruit = ["mango", "banana", "kiwi"];
localStorage.setItem("fruit", JSON.stringify(fruit));
let retrieve = JSON.parse(localStorage.getItem("fruit"));
console.log(retrieve);
console.log("Second Element is:", retrieve[1]);
*/


/* Q52 - Save a theme (dark/light) in LocalStorage and apply the same theme on reload. */
/*
let theme = localStorage.getItem("theme") || "light";
applyTheme();

function toggleTheme() {
  theme = theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme);
  applyTheme();
}
function applyTheme() {
  document.body.style.backgroundColor = theme === "dark" ? "#222" : "#fff";
  document.body.style.color = theme === "dark" ? "#fff" : "#000";
}
*/


/* Q53 - Create a to-do app where:
  - Add task → saves to localStorage
  - Refresh page → tasks still show up
*/
/*
const taskInput = document.getElementById("input");
const taskBtn = document.getElementById("btn");
const taskList = document.getElementById("list");

if (taskBtn) {
  taskBtn.addEventListener("click", () => {
    const userInput = taskInput.value.trim();
    if (userInput !== "") {
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push(userInput);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      taskInput.value = "";
      renderTasks();
    }
  });

  function renderTasks() {
    taskList.innerHTML = "";
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task;
      taskList.appendChild(li);
    });
  }
  renderTasks();
}
*/


/* Q54 - Store user’s theme (dark / light) in sessionStorage.
  - Default is light
  - If dark is chosen, after reload --> still dark
*/
/*
let theme = sessionStorage.getItem("theme") || "light";
applyTheme();

function toggleTheme() {
  theme = theme === "light" ? "dark" : "light";
  sessionStorage.setItem("theme", theme);
  applyTheme();
}
function applyTheme() {
  document.body.style.backgroundColor = theme === "dark" ? "#222" : "#fff";
  document.body.style.color = theme === "dark" ? "#fff" : "#000";
}
*/


/* Q55 - Create a login form that:
  - On submit → saves email in localStorage
  - On reload → shows "Welcome back, <email>"
*/
/*
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    localStorage.setItem("formData", JSON.stringify({ email }));
    console.log("Saved email:", email);
  });

  let saved = JSON.parse(localStorage.getItem("formData"));
  if (saved) {
    console.log("Welcome back,", saved.email);
  }
}
*/
