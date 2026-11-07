console.log("Hello from script.js");

const tags = ["spicy", "bold flavors", "late night"]; 
const prices = [12.99, 11, 17, 13.50]; 

console.log(tags);
console.log(prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";

for (let i = 0; i < tags.length; i++) {
  tagText.textContent = tagText.textContent + tags[i] + " ."; 
}

