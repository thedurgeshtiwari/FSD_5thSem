// A simple starter JavaScript file

// 1. Print something to the console
console.log("JavaScript is ready!");

// 2. Variables
let name = "Aman";
const year = 2025;

// 3. A basic function
function greet(user) {
    return "Hello, " + user;
}

console.log(greet(name));

// 4. Working with the DOM (runs only in browser)
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("title");
    if (heading) {
        heading.textContent = "JS Connected Successfully!";
    }
});

// 5. A simple click handler (optional)
function handleClick() {
    alert("Button clicked!");
}
