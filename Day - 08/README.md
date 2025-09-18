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
