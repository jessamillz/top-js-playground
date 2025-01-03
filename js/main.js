const container = document.querySelector("#container");

const content = document.createElement("div");
const para = document.createElement("p");
const h3 = document.createElement("h3");
const div = document.createElement("div");
const h1 = document.createElement("h1");
const para2 = document.createElement("p");


content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

para.style.color = "red";
para.textContent = "Hey I'm red!";
content.appendChild(para);

h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
content.appendChild(h3);

div.style.border = "1px solid black";
div.style.backgroundColor = "pink";
h1.textContent = "I'm in a div";
para2.textContent = "ME TOO!";
div.appendChild(h1);
div.appendChild(para2);
content.appendChild(div);

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    alert("Hello World");
  });

// function add7(num) {
//     return num + 7;
// }

// console.log(add7(10));

// function multiply(num1, num2) {
//     return num1 * num2;
// }
// console.log(multiply(7, 3));

// function capitalize(str) {
//     const lowerCaseString = str.toLowerCase();
//     const firstLetter = lowerCaseString[0].toUpperCase();
//     return lowerCaseString.replace(lowerCaseString[0], firstLetter);
// }


// console.log(capitalize("jESSiCA"));

// function lastLetter(str) {
//     return str[str.length - 1];
// }
// console.log(lastLetter("Bobby"));
// console.log("hello world");

// let firstName = "Jessica";
// let surname = "Smith";

// console.log(firstName + " " + surname);