// 🚀 Day 7 – Fetch API, Async/Await, JSON & Error Handling
// This file contains practice questions covering:
// - Fetch API with .then()
// - Async/Await
// - Error Handling (try...catch)
// - JSON (parse, stringify)
// - Mixed Practice (nested fetch, multiple endpoints)


// ====================================================
// 🔹 Fetch API with .then()
// ====================================================

// Q1. Fetch a single post
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Error:", error));

// Q2. Invalid fetch URL
fetch("https://wrong-api-url.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log("API Fetch Failed:", err));

// Q3. Joke API with .then()
fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log("Error:", err));

// Q4. Fake URL error handling
fetch("https://www.fakeurl.com")
    .then((response) => response.json())
    .then((msg) => console.log(msg))
    .catch((err) => console.log("Error:", err));

// Q5. Fetch + .then() User API
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => console.log(`User Name: ${data.name}`))
    .catch((err) => console.log(err));


// ====================================================
// 🔹 Async/Await
// ====================================================

// Q6. Fetch single post with async/await
async function getPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
        const data = await response.json();
        console.log("Post Data:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}
getPost();

// Q7. Fetch multiple posts (first 5 only)
async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();

        posts.slice(0, 5).forEach((post) => {
            console.log(`📝 ${post.id}. ${post.title}`);
        });
    } catch (error) {
        console.log("❌ Error:", error);
    }
}
getPosts();

// Q8. Fetch joke with async/await
async function joke() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        console.log("Joke:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}
joke();

// Q9. Invalid fetch with async/await
async function invalid() {
    try {
        const response = await fetch("https://www.fakeurl.com");
        const dat = await response.json();
        console.log("Data:", dat);
    } catch (error) {
        console.log("Again Error:", error);
    }
}
invalid();

// Q10. Todos API
async function todos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todos = await response.json();

        todos.slice(0, 3).forEach((todo) => {
            console.log(`Title: ${todo.title}, Status = ${todo.completed}`);
        });
    } catch (error) {
        console.log("Error:", error);
    }
}
todos();

// Q11. Comments API
async function comment() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
        const cmnt = await response.json();
        cmnt.forEach((coment) => {
            console.log(`Email = ${coment.email}`);
        });
    } catch (error) {
        console.log("Error:", error);
    }
}
comment();

// Q12. Albums API
async function albums() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        const albums = await response.json();

        albums.slice(0, 5).forEach((album) => {
            console.log(`Album Title = ${album.title}`);
        });
    } catch (error) {
        console.log("Error:", error);
    }
}
albums();

// Q13. Fetch posts limited
async function letPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();

        posts.slice(0, 5).forEach((post) => {
            console.log(`📝 ${post.id}. ${post.title}`);
        });
    } catch (error) {
        console.log("❌ Error:", error);
    }
}
letPosts();

// Q14. Fetch by ID (valid + invalid)
async function fetchPostsById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if (!response.ok) {
            throw new Error("Post not found");
        }

        const post = await response.json();

        if (Object.keys(post).length === 0) {
            console.log("Post not found");
        } else {
            console.log(`Post ID: ${post.id}, Title: ${post.title}`);
        }
    } catch (error) {
        console.log("Error:", error.message);
    }
}
fetchPostsById(5); // valid
fetchPostsById(9999); // not found


// ====================================================
// 🔹 Error Handling
// ====================================================

// Q15. Fake URL error
async function fakeurl() {
    try {
        const response = await fetch("https://fakeurl123.com");
        const url = await response.json();
        console.log("Success");
    } catch (error) {
        console.log("❌ Something went wrong");
    }
}
fakeurl();


// ====================================================
// 🔹 JSON Practice
// ====================================================

// Q16. Object → JSON String
const user = { name: "Suresh", age: 22, skills: ["HTML", "CSS", "JS"] };
const jsonData = JSON.stringify(user);
console.log("JSON String:", jsonData);

// Q17. JSON String → Object
const jsonString = `{ "company": "OpenAI", "product": "ChatGPT", "year": 2025 }`;
const obj = JSON.parse(jsonString);
console.log("Parsed Obj:", obj);
console.log("Company:", obj.company);

// Q18. Convert object
let obj2 = { name: "Suresh", age: 22, skills: ["HTML", "CSS", "JavaScript"] };
const change = JSON.stringify(obj2);
console.log("Converted String:", change);

// Q19. Convert string back to JSON
let jsonString2 = `{ "company":"OpenAI","product":"ChatGPT" }`;
const toJson = JSON.parse(jsonString2);
console.log("Converted JSON:", toJson);

// Q20. Object to String & back
let person = { name: "Suresh", city: "Delhi", skills: ["HTML", "CSS", "JS"] };
let changeToString = JSON.stringify(person);
console.log("JSON String =", changeToString);
let changetoJson = JSON.parse(changeToString);
console.log("Back to Object =", changetoJson);

// Q21. Another object practice
let obj3 = { id: 101, title: "My Post", body: "This is test" };
let changeObj = JSON.stringify(obj3);
console.log(`Changed: ${changeObj}`);

// Q22. JSON.parse practice
let string = `{ "name": "Suresh", "city": "Delhi" }`;
let changeString = JSON.parse(string);
console.log("Changed:", changeString);


// ====================================================
// 🔹 Mixed Practice
// ====================================================

// Q23. Create a post (POST request)
async function createPosts() {
    try {
        const newPost = {
            title: "Learning Fetch API",
            body: "This is a new post",
            userId: 1
        };

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost)
        });

        const data = await response.json();
        console.log("✅ Post Created:", data);
    } catch (error) {
        console.log("❌ Error:", error);
    }
}
createPosts();

// Q24. Photos API
async function photos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const photos = await response.json();

        photos.slice(0, 3).forEach((photo) => {
            console.log(`Title: ${photo.title}, Thumbnail: ${photo.thumbnailUrl}`);
        });
    } catch (error) {
        console.log("Error:", error);
    }
}
photos();

// Q25. Fetch user and their posts
async function fetchUserAndPosts() {
    try {
        const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user = await userResponse.json();

        console.log(`👤 User: ${user.name} | Email: ${user.email}`);

        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        const posts = await postsResponse.json();

        console.log(`📝 ${user.name}'s Posts`);
        posts.slice(0, 5).forEach((post) => {
            console.log(`- ${post.title}`);
        });
    } catch (error) {
        console.log("ERROR:", error.message);
    }
}
fetchUserAndPosts();

// Q26. Post by ID log
async function log() {
    try {
        const userPost = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const log = await userPost.json();
        console.log(`Post Title: ${log.title}`);
    } catch (error) {
        console.log("Error:", error);
    }
}
log();
