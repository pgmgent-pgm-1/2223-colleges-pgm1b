// function expression
// screencast


const sq = function(number) {
  return number * number;
}

console.log(`square(3): ${sq(3)}` );

const fac = function factorial(n) { 
  return n < 2 ? 1 : n * factorial(n - 1);
}

console.log(`Faculteit 5: ${fac(5)}`);




