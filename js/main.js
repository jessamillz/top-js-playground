
function add7(num) {
    return num + 7;
}

console.log(add7(10));

function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(7, 3));

function capitalize(str) {
    let strLC = str.toLowerCase();
    let firstLet = strLC.charAt(0).toUpperCase();
    return strLC.replace(strLC[0], firstLet);
}
console.log(capitalize("jESSiCA"));

function lastLetter(str) {
    return str[str.length - 1];
}
console.log(lastLetter("Bobby"));
// console.log("hello world");

// let firstName = "Jessica";
// let surname = "Smith";

// console.log(firstName + " " + surname);