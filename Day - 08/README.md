# 🚀 Day 8 – LocalStorage & SessionStorage
 
## 📌 Overview
This file contains **10 JavaScript practice questions with solutions** covering:
- `localStorage` & `sessionStorage`
- Storing strings, objects, and arrays
- Counters & checks
- Theme toggle with persistence
- Saving form data in localStorage
 
--- 
 
## 🎯 Topics Covered
- Store and retrieve simple data in **localStorage**
- Store **objects/arrays** using `JSON.stringify` & `JSON.parse`
- Implement **counter** with persistence
- Check if keys exist in localStorage
- Add, remove, and clear localStorage items
- **Theme toggle** (dark/light) saved across reloads
- Save and restore **form input values**
- Session-based storage using **sessionStorage**

---

## 💡 What I Practiced & Learned
- Difference between **localStorage (persistent)** vs **sessionStorage (tab-based)**
- How to **store objects & arrays** properly (must stringify/parse)
- Clearing storage vs removing specific items
- Building **real use-cases** like:
  - Persistent counters
  - Theme preference
  - Saving form data locally
- Using DOM + Storage APIs together

---

# 📝 Questions & Solutions
Each Question has been added inside [`script.js`](./script.js).  
👉 **Q8 & Q9 require HTML setup** – already included in [`index.html`](./index.html).

---

### 🔑 Sample Outputs
- **Q1:** `Hello, Suresh`
- **Q2:** Store and Retrieve object `LoggedIn: true`  
- **Q3:** Count increments on each run  
- **Q4:** Logs `"Second fruit is: banana"`  
- **Q5:** Logs `"Name: Suresh, Skill: HTML"`  
- **Q6-1/2:** Shows `"Welcome back, Suresh"` or `"New User"`  
- **Q7:** Demonstrates remove & clear → outputs `null` after clearing  
- **Q8 (Theme):** Toggles between light/dark & persists after reload  
- **Q9 (Form):** Saves name/email in localStorage and retrieves after reload  
- **Q10:** Logs `"Suresh"` from sessionStorage


```js
// ====================================================
// 🔹 LocalStorage Basics
// ====================================================

// Q1. Store & retrieve a simple string
localStorage.setItem("name", "Suresh");
let userName = localStorage.getItem("name");
console.log("Hello,", userName);

// Q2. Store object in sessionStorage & retrieve
let user = { LoggedIn: true };
sessionStorage.setItem("user", JSON.stringify(user));
let retrieveData = JSON.parse(sessionStorage.getItem("user"));
console.log(retrieveData);

// Q3. Counter stored in localStorage
let count = localStorage.getItem("count") || 0;
count++;
localStorage.setItem("count", count);
console.log("Count:", count);

// Q4. Store array in localStorage & access element
let store = ["apple", "banana", "mango"];
localStorage.setItem("store", JSON.stringify(store));
let retrieve = JSON.parse(localStorage.getItem("store"));
console.log("Second fruit is:", retrieve[1]);

// Q5. Store object & access its properties
let obj = { id: 101, name: "Suresh", skills: ["HTML", "CSS", "JS"] };
localStorage.setItem("obj", JSON.stringify(obj));
let retrievedObj = JSON.parse(localStorage.getItem("obj"));
console.log(`Name: ${retrievedObj.name}, Skill: ${retrievedObj.skills[0]}`);

// ====================================================
// 🔹 Checking Data in localStorage
// ====================================================

// Q6-1. Check fixed username === "Suresh"
localStorage.setItem("username", "Suresh");
function checks1() {
  if (localStorage.getItem("username") === "Suresh") {
    console.log("Welcome back,", localStorage.getItem("username"));
  } else {
    console.log("New User");
  }
}
checks1();

// Q6-2. Check if any username exists
function checks2() {
  let user = localStorage.getItem("username");
  if (user) {
    console.log("Welcome back,", user);
  } else {
    console.log("New User");
  }
}
checks2();

// Q7. Add, remove, clear localStorage items
localStorage.setItem("name", "a");
localStorage.setItem("age", "b");
localStorage.setItem("city", "c");
localStorage.removeItem("age"); // removed "b"

console.log(localStorage.getItem("name")); // a
console.log(localStorage.getItem("age")); // null

localStorage.clear(); // clears all
console.log(localStorage.getItem("name")); // null
console.log(localStorage.getItem("age"));  // null
console.log(localStorage.getItem("city")); // null

// ====================================================
// 🔹 HTML + JS Based (Require index.html)
// ====================================================

// Q8. Theme Toggle (persist in localStorage)
let theme = localStorage.getItem("theme") || "light";
document.body.className = theme;
document.body.style.backgroundColor = theme === "dark" ? "#222" : "#fff";
document.body.style.color = theme === "dark" ? "#fff" : "#000";

function toggleTheme() {
  theme = theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme);
  document.body.style.backgroundColor = theme === "dark" ? "#222" : "#fff";
  document.body.style.color = theme === "dark" ? "#fff" : "#000";
}

// Q9. Save form data (name + email) in localStorage
let form = document.getElementById("myForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    localStorage.setItem("formData", JSON.stringify({ name, email }));
    console.log(`Saved name: ${name}, Saved email: ${email}`);
  });

  // On reload, check if data exists
  let saved = JSON.parse(localStorage.getItem("formData"));
  if (saved) {
    console.log("Stored Name:", saved.name, "Stored Email:", saved.email);
  }
}

// Q10. Store & retrieve in sessionStorage
sessionStorage.setItem("sessionUser", "Suresh");
let data = sessionStorage.getItem("sessionUser");
console.log(data);
