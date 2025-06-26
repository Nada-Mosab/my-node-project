console.log("Hello from Node.js!");
const fs = require('fs');

// Read quotes from the JSON file
const data = fs.readFileSync('./quotes.json', 'utf8');
const quotes = JSON.parse(data);

// Pick a random quote
const randomIndex = Math.floor(Math.random() * quotes.length);
const quote = quotes[randomIndex];

// Show it in the terminal
console.log("💬 Quote of the Day:");
console.log(`👉 "${quote}"`);

