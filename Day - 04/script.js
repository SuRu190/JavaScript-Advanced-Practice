// 🚀 Day 4 – DOM Deep Dive
// This file contains 10 practice questions with solutions covering: Event Bubbling, Capturing, Event Delegation, Input Events, Mouse Events, Double Click, Random Colors, and Form Handling.

// ====================================================
// 🔹 Event Bubbling
// ====================================================

// Q1. Add event listeners on Parent & Child div (Bubbling)
const parent1 = document.getElementById("parent");
const child1 = document.getElementById("child");

if (parent1 && child1) {
  parent1.addEventListener("click", () => {
    console.log("Parent Clicked!");
  });
  child1.addEventListener("click", () => {
    console.log("Child Clicked!");
  });
}

// ====================================================
// 🔹 Event Capturing
// ====================================================

// Q2. Add event listeners using Capturing phase
const parent2 = document.getElementById("parent");
const child2 = document.getElementById("child");

if (parent2 && child2) {
  parent2.addEventListener(
    "click",
    () => {
      console.log("Parent Clicked! (Capturing)");
    },
    true
  );

  child2.addEventListener(
    "click",
    () => {
      console.log("Child Clicked! (Capturing)");
    },
    true
  );
}

// Q3. Parent in Capturing, Child in Bubbling
const parent3 = document.getElementById("parent");
const child3 = document.getElementById("child");

if (parent3 && child3) {
  parent3.addEventListener(
    "click",
    () => {
      console.log("Parent Clicked! (Capturing)");
    },
    true
  );

  child3.addEventListener("click", () => {
    console.log("Child Clicked! (Bubbling)");
  });
}

// ====================================================
// 🔹 Event Delegation
// ====================================================

// Q4. Print clicked list item text
const list1 = document.getElementById("list");
if (list1) {
  list1.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      console.log("Pressed List: ", e.target.innerText);
    }
  });
}

// Q5. Change BG temporarily + log clicked item
const list2 = document.getElementById("list");
if (list2) {
  list2.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.style.backgroundColor = "lightblue";
      setTimeout(() => {
        e.target.style.backgroundColor = "";
      }, 1000);
      console.log(`You Clicked: ${e.target.innerText}`);
    }
  });
}

// ====================================================
// 🔹 Input Events
// ====================================================

// Q6. keydown & keyup events
const input1 = document.getElementById("input");
if (input1) {
  input1.addEventListener("keydown", (e) => {
    console.log(`Key Pressed: ${e.key}`);
    console.log(`Key code: ${e.code}`);
  });

  input1.addEventListener("keyup", (e) => {
    console.log(`Key Released!: ${e.key}`);
  });
}

// ====================================================
// 🔹 Mouse Events
// ====================================================

// Q7. mouseover, mouseout, click, dblclick
const button1 = document.getElementById("btn");
if (button1) {
  button1.addEventListener("mouseover", () => {
    console.log("Mouse Over");
  });

  button1.addEventListener("mouseout", () => {
    console.log("Mouse Out");
  });

  button1.addEventListener("click", () => {
    console.log("Button Clicked!");
  });

  button1.addEventListener("dblclick", () => {
    console.log("Button Double Clicked!");
    button1.style.backgroundColor = "cornflowerblue";
    button1.style.border = "none";
    setTimeout(() => {
      button1.style.backgroundColor = "";
      button1.style.border = "";
    }, 500);
  });
}

// ====================================================
// 🔹 Double Click – Random Colors
// ====================================================

// Q8. Div double click → random background color with RGB value
const square = document.getElementById("square");
if (square) {
  square.addEventListener("dblclick", () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                             ${Math.floor(Math.random() * 256)}, 
                             ${Math.floor(Math.random() * 256)})`;
    square.style.backgroundColor = randomColor;
    square.innerText = randomColor;
    console.log("Color Changed To:", randomColor);
  });
}

// ====================================================
// 🔹 Form Events
// ====================================================

// Q9. Form submit → print input value without reload
const form1 = document.getElementById("myForm");
const input2 = document.getElementById("input");

if (form1 && input2) {
  form1.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(input2.value);
  });
}

// Q10. Form submit → print + show success message
const form2 = document.getElementById("myForm");
const input3 = document.getElementById("input");
const message = document.getElementById("successMsg");

if (form2 && input3 && message) {
  form2.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(input3.value);
    input3.value = "";

    message.textContent = "Form Submitted Successfully!";
    setTimeout(() => {
      message.textContent = "";
    }, 1500);
  });
}
