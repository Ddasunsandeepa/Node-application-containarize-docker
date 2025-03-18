// === Variables and Constants ===
const appName = "My Cool App";
let counter = 0;

// === Functions ===
function greetUser(name) {
  console.log(`Welcome to ${appName}, ${name}!`);
}

// Arrow function for incrementing counter
const incrementCounter = () => {
  counter++;
  console.log(`Counter: ${counter}`);
};

// === Objects and Arrays ===
const products = [
  { id: 1, name: "Pizza", price: 10 },
  { id: 2, name: "Burger", price: 5 },
  { id: 3, name: "Soda", price: 2 },
];

// Display products
function displayProducts() {
  products.forEach((product) => {
    console.log(`${product.name} - $${product.price}`);
  });
}

// === Loops and Conditions ===
function checkPriceThreshold(threshold) {
  console.log(`Products below $${threshold}:`);
  for (const product of products) {
    if (product.price < threshold) {
      console.log(`- ${product.name}`);
    }
  }
}

// === DOM Manipulation (if running in a browser) ===
// document.addEventListener("DOMContentLoaded", () => {
//   const btn = document.createElement("button");
//   btn.textContent = "Click Me!";
//   btn.onclick = () => alert("Button clicked!");
//   document.body.appendChild(btn);
// });

// === Execution ===
greetUser("John Doe");
incrementCounter();
incrementCounter();
displayProducts();
checkPriceThreshold(6);

// Interval Example - Update counter every second
setInterval(incrementCounter, 1000);
