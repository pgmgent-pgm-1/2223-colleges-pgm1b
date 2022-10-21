function factorial(n) {
  n = Math.abs(Math.round(n));
  let result = 1;
  if(n > 1){
    result = n * factorial(n-1);
  }
  return result;
}

console.log("factorial(0):", factorial(0));
console.log("factorial(1):", factorial(1));
console.log("factorial(2):", factorial(2));
console.log("factorial(3):", factorial(3));
console.log("factorial(4):", factorial(4));
console.log("factorial(5):", factorial(5)); // 5 * 4 * 3 * 2 * 1
console.log("factorial(6):", factorial(6));