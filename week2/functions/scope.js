const num1 = 20;
const num2 = 30;
const name = "Olivier";


// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply());

// nested function
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2} goals. He’s a great soccer player!`;
  }
  return add();
}

console.log(getScore());


function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log("addSquares(2, 3):", addSquares(2, 3));
console.log("addSquares(3, 4):", addSquares(3, 4));
console.log("addSquares(4, 5):", addSquares(4, 5));
