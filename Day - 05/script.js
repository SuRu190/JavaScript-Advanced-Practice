// ⚙️ Day 5 – DOM Projects
// This file contains 4 mini-projects covering: Counter, Random Color Generator

// ==================================================
// 1️⃣ Counter
// ==================================================
let count = 0;
const countEl = document.getElementById("count");
document.getElementById("increase").addEventListener("click", () => {
  count++;
  countEl.textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countEl.textContent = count;
});
document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  countEl.textContent = count;
});

// ==================================================
// 2️⃣ Random Color Generator
// ==================================================
const colorBox = document.getElementById("colorBox");
document.getElementById("generateColor").addEventListener("click", () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  colorBox.style.backgroundColor = randomColor;
  colorBox.textContent = randomColor;
});

// ==================================================
// 3️⃣ To-Do List
// ==================================================
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

document.getElementById("addTodo").addEventListener("click", () => {
  if (todoInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = todoInput.value;
    todoList.appendChild(li);
    todoInput.value = "";
  }
});

// ==================================================
// 4️⃣ Live Text Preview
// ==================================================
const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

liveInput.addEventListener("input", () => {
  liveOutput.textContent = liveInput.value || "👀 Your text will appear here...";
});
