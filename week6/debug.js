const functie = () => {
  console.log('test')
}

functie();
console.log("stap2");

const sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));
// expected output: 8


