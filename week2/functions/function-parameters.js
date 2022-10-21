function addition(a, b = 0) {
  return a + b;
}

console.log("addition(8):", addition(8));

function sumOfEverything(message, ...numbers){
  console.log(message);
  let total = 0;
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    total += element;
  }
  return total;
}


console.log(sumOfEverything("Hallo",1,2,3,4,5,65,7,41,5,4,1));