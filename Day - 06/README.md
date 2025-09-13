# 🚀 Day 6 – Async JavaScript (setTimeout, Callbacks, Promises, Chaining)

## 📌 Overview
This file contains **20 JavaScript practice questions with solutions** covering:
- `setTimeout` & `setInterval`
- `Callbacks` & `Callback Hell`
- `Promises` & `Chaining`
- Async simulation with Fake API
- DOM Event handling with Promises

---

## 🎯 Topics Covered
- Delays & intervals using **setTimeout / setInterval**
- Handling async flow using **callbacks**
- The problem of **callback hell**
- Using **Promises** for cleaner async code
- **Chaining Promises** for sequential async tasks
- Creating **Fake API simulation** with random success/failure

---

## 💡 What I Practiced & Learned
- Difference between **callbacks vs promises**
- How **callback hell** makes code messy
- Why **Promises** are better (chaining, cleaner flow)
- How to build a **fake API** simulation
- DOM + Promises → async operations with buttons

---

# 📝 Questions & Solutions
Each Questions has been added inside [`script.js`](./script.js).  
👉 **Q17 & Q18 require HTML setup** – already included in [`index.html`](./index.html).

---

### 🔑 Sample Outputs
- **Q1:** Logs `"Hello after 3 seconds"`.  
- **Q2:** Logs `Count: 1 → 5`.  
- **Q3:** Logs current time every sec.  
- **Q6 / Q13:** Nested outputs `1–5` step by step.  
- **Q7 / Q15:** Either `"Resolved"` or `"Rejected"`.  
- **Q17 (Fake API):** Shows `"Loading..."` → then `"User data received successfully"` OR `"Failed to fetch data"`.  
- **Q18 (Chaining):** Shows `"Fetching User..."` → `"Processing User Data..."` → `"✅ User: Suresh Sharma, Role: Frontend Developer"`.  


```js
// ====================================================
// 🔹 setTimeout & setInterval Basics
// ====================================================

// Q1. Print "Hello after 3 seconds"
setTimeout(() => {
  console.log("Hello after 3 seconds");
}, 3000);

// Q2. Print count from 1 to 5 using setInterval
let count = 1;
const interval1 = setInterval(() => {
  console.log("Count:", count);
  count++;
  if (count > 5) clearInterval(interval1);
}, 1000);

// Q3. Print current time every second
setInterval(() => {
  let time = new Date().toLocaleTimeString();
  console.log("Time:", time);
}, 1000);

// ====================================================
// 🔹 Callbacks
// ====================================================

// Q4. Order food simulation with callback
function orderFood(food, callback) {
  console.log("Ordering:", food);
  callback();
}
function delivered() {
  console.log("Food Delivered!");
}
orderFood("Chicken", delivered);

// Q5. Add two numbers using callback
function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}
add(5, 10, (result) => console.log("Sum:", result));

// ====================================================
// 🔹 Callback Hell
// ====================================================

// Q6. Nested setTimeouts (1–5)
setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
      setTimeout(() => {
        console.log("4");
        setTimeout(() => {
          console.log("5");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// ====================================================
// 🔹 Promises
// ====================================================

// Q7. Basic Promise resolve/reject
let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Task Finished!");
  else reject("Task Rejected!");
});
myPromise.then(console.log).catch(console.log);

// Q8. Random success/failure Promise
let randomPromise = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num > 0.5) resolve("Success");
  else reject("Failed");
});
randomPromise.then(console.log).catch(console.log);

// Q9. Callback vs Promise version
function fetchData(cb) {
  console.log("Fetching data...");
  setTimeout(() => cb("User data received!"), 2000);
}
fetchData((data) => console.log("Callback:", data));

function fetchDataPromise() {
  return new Promise((resolve) => {
    console.log("Fetching data...");
    setTimeout(() => resolve("User data received!"), 2000);
  });
}
fetchDataPromise().then((data) => console.log("Promise:", data));

// ====================================================
// 🔹 More Async Examples
// ====================================================

// Q10. Count 1–10 every second
let num = 1;
const timer = setInterval(() => {
  console.log(num);
  num++;
  if (num > 10) clearInterval(timer);
}, 1000);

// Q11. Digital Clock
setInterval(() => {
  let time = new Date().toLocaleTimeString();
  console.log("Clock:", time);
}, 1000);

// Q12. Greet User with delay
function greetUser(name, callback) {
  setTimeout(() => {
    console.log("Hello,", name);
    callback();
  }, 2000);
}
function welcomeMsg() {
  console.log("Welcome to Async JS!");
}
greetUser("Suresh", welcomeMsg);

// Q13. Nested timeout 1–5
setTimeout(() => {
  console.log("One");
  setTimeout(() => {
    console.log("Two");
    setTimeout(() => {
      console.log("Three");
      setTimeout(() => {
        console.log("Four");
        setTimeout(() => {
          console.log("Five");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// Q14. Promise with setTimeout
let study = new Promise((resolve) => {
  setTimeout(() => resolve("Finished Studying"), 2000);
});
study.then(console.log);

// Q15. Random Promise (success/fail)
let random = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num > 0.5) resolve("✅ Success");
  else reject("❌ Failed");
});
random.then(console.log).catch(console.log);

// Q16. Promise returning object
function fetchUser() {
  return new Promise((resolve) => {
    resolve({ name: "Suresh", age: 22 });
  });
}
fetchUser().then((data) => console.log("Data:", data));

// ====================================================
// 🔹 HTML + JS Based (Require index.html)
// ====================================================

// Q17. Fake API using Promise + Button
const fetchBtn = document.getElementById("fetchBtn");
const output1 = document.getElementById("output");

if (fetchBtn && output1) {
  function fakeApiCall() {
    return new Promise((resolve, reject) => {
      output1.textContent = "Loading...";
      setTimeout(() => {
        let success = Math.random() > 0.3;
        if (success) resolve("User data received successfully");
        else reject("Failed to fetch data, Try again");
      }, 2000);
    });
  }

  fetchBtn.addEventListener("click", () => {
    fakeApiCall()
      .then((msg) => (output1.textContent = msg))
      .catch((err) => (output1.textContent = err));
  });
}

// Q18. Promise Chaining Demo
const startBtn = document.getElementById("startBtn");
const output2 = document.getElementById("output");

if (startBtn && output2) {
  function fetchUserData() {
    return new Promise((resolve) => {
      output2.textContent = "⏳ Fetching User...";
      setTimeout(() => resolve({ id: 1, name: "Suresh Sharma" }), 2000);
    });
  }

  function processUser(user) {
    return new Promise((resolve) => {
      output2.textContent = "⚙️ Processing User Data...";
      setTimeout(() => {
        user.role = "Frontend Developer";
        resolve(user);
      }, 1500);
    });
  }

  function displayUser(user) {
    return new Promise((resolve) => {
      output2.textContent = `✅ User: ${user.name}, Role: ${user.role}`;
      resolve();
    });
  }

  startBtn.addEventListener("click", () => {
    fetchUserData()
      .then(processUser)
      .then(displayUser)
      .catch((err) => (output2.textContent = err));
  });
}
