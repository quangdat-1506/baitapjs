// Toán tử ba ngôi 

const x = 100;
const result = x < 1000 ? "nhỏ hơn 1000" : "lớn hơn hoặc bằng 1000";
console.log(result);

// Shorthand Evaluated 

let variable1;
let variable2 = variable1 === null || variable1 === undefined ? "Giá trị null hoặc undefined" : variable1 + "!";
console.log(variable2);

// Variable declaration - If Comparison 

let x = 5;
let y = 10;
let result = x > y ? "x lớn hơn y" : x < y ? "x nhỏ hơn y" : "x bằng y";
console.log(result);

// ======

const isTurnOn = true;
const isTurnedOn = () => isTurnOn ? true : false;
console.log(isTurnedOn());

// For loop – For loop with decimal base

let age = 18;
let message = age >= 18 ? "Đã đủ tuổi." : "Chưa đủ tuổi.";
console.log(message);

// Object property 

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

// Rút gọn định nghĩa function

let isLoggedIn = true;
let message = isLoggedIn ? "Đã đăng nhập." : "Chưa đăng nhập.";
console.log(message);

// Set default value for parameter in function

const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
    },
  ];
    const product = products.find(product => product.id === 2);
console.log(product); 

// Template list

// Destructuring Assignment

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((a, b) => a + b, 0);

console.log(sum);

// Spead Operator

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);

// Constraint Param

// Find() in arrays






