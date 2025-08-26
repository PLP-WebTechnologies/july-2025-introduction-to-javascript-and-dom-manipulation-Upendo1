//PART 1
// variables declaration and If-else condition statement
//evample 1 variable
let num1 = 10;
let num2 = 3;
console.log("Addition:", num1 + num2);

//example 2 const variable
const birthYear = 2005;
console.log(birthYear);

//If / Else Condition
//example 1
let temperature = 30;

if (temperature > 25) {
    console.log("It's hot outside!");
} else {
    console.log("It's cool outside!");
}
//example2
let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}


//PART2 
//Functions
//function declaration and arrow functions

//example1 function declaration
function greet() {
    console.log("Good morning, welcome to JavaScript!");
}

greet();

//example 2 arrow function

let var1 = () => console.log("Congratulations, you did it!");

var1();


//PART3
//Loops

//example 1 for loop
console.log("Counting from 1 to 5:");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//example 2 while loop

console.log("Countdown from 5 to 1:");

let count = 5;

while (count >= 1) {
    console.log(count);
    count--; // decrease count by 1
}


//PART4
// DOM - Document Object Model
// Function to change the page content and styles
function changePage() {
  // Select the elements
  let intro = document.getElementById('intro');
  let body = document.getElementById('body');
  let paragraph = document.getElementById('paragraph');

  // Change the text and styles
  intro.textContent = "Introduction to JavaScript Concepts";
  intro.classList.toggle("highlight");

  paragraph.textContent = "JavaScript is fun to use!";
  paragraph.style.color = "red";

  body.style.backgroundColor = "lightgrey";

  // Create a new message and add it to the page
  let newMessage = document.createElement("h3");
  newMessage.textContent = "JavaScript For Interactive Web Pages";
  document.body.appendChild(newMessage);
}

// Add the click event to the button
document.getElementById("myButton").addEventListener("click", changePage);
