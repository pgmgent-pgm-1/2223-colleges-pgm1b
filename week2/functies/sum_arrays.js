const arrayOne = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
const arrayTwo = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
let sumArrayOne = 0;
let sumArrayTwo = 0;

// neem elk element van arrayOne
// sumArrayOne += arrayOne[0] + arrayOne[1] + ...
for(let i = 0; i < arrayOne.length; i++){
    const number1 = arrayOne[i];
    
    // tel dit element op bij het totaal
    sumArrayOne += number1;
    // andere methode: sumArrayOne = sumArrayOne + number1;
}

for(let i = 0; i < arrayTwo.length; i++){
    const number1 = arrayTwo[i];
    sumArrayTwo += number1;
}


let sumOfArrays = sumArrayOne + sumArrayTwo;
console.log(sumOfArrays);
// Example output:
// 276 + 351 = 627
