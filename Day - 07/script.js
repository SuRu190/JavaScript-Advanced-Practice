// 🚀 Day 7 – Fetch API, Async/Await & JSON
// ==========================================
// This file contains all practice questions (Q1 – Q18)
// Each question has explanation + solution.

// ====================================================
// 🔹 Fetch API Basics
// ====================================================

// Q1. Fetch data from an API
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log("Post 1:", data));

// Q2. Handle fetch error
fetch("https://invalid-api-url.com/data")
  .then(res => res.json())
  .catch(err => console.error("Error:", err.message));


// ====================================================
// 🔹 Async / Await
// ====================================================

// Q3. Using async/await for fetch
async function fetchUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    console.log("User:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}
fetchUser();


// ====================================================
// 🔹 JSON Methods
// ====================================================

// Q4. Convert JSON string to object
const str = '{"name":"Suresh","age":22}';
console.log(JSON.parse(str));

// Q5. Convert object to JSON string
const obj = { product: "Laptop", price: 55000 };
console.log(JSON.stringify(obj));


// ====================================================
// 🔹 API Data Handling
// ====================================================

// Q6. Fetch posts & show titles
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  console.log(posts.map(p => p.title));
}
getPosts();

// Q7. Fetch users & show names
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  users.forEach(u => console.log(u.name));
}
getUsers();

// Q8. Fetch comments of postId=1
async function getComments() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await res.json();
  console.log(comments.filter(c => c.postId === 1));
}
getComments();

// Q9. Fetch completed todos
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();
  console.log(todos.filter(t => t.completed));
}
getTodos();


// ====================================================
// 🔹 Advanced Fetch Handling
// ====================================================

// Q10. Handle status codes
async function fetchStatus() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  if (!res.ok) return console.error("Error Code:", res.status);
  console.log(await res.json());
}
fetchStatus();

// Q11. Promise.all() multiple fetch
async function fetchAll() {
  const [users, posts] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json())
  ]);
  console.log("Users:", users.length, "Posts:", posts.length);
}
fetchAll();

// Q12. Nested object properties
async function getNested() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await res.json();
  console.log(user.name, "-", user.address.city);
}
getNested();

// Q13. Loading simulation
async function fetchLoading() {
  console.log("Loading...");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  console.log(await res.json());
  console.log("Done ✅");
}
fetchLoading();

// Q14. Handle invalid JSON
async function invalidJson() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  console.log(await res.text());
}
invalidJson();


// ====================================================
// 🔹 API Requests
// ====================================================

// Q15. POST request
async function addPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "New Post", body: "Learning Fetch", userId: 1 })
  });
  console.log(await res.json());
}
addPost();

// Q16. PUT request
async function updatePost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: 1, title: "Updated Title", body: "Updated Content", userId: 1 })
  });
  console.log(await res.json());
}
updatePost();

// Q17. DELETE request
async function deletePost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "DELETE" });
  console.log("Deleted! Status:", res.status);
}
deletePost();


// ====================================================
// 🔹 Async Cleanup
// ====================================================

// Q18. try/catch/finally
async function fetchFinally() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
    console.log(await res.json());
  } catch (err) {
    console.error("Error:", err);
  } finally {
    console.log("Fetch attempt finished ✅");
  }
}
fetchFinally();
