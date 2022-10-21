const arrayOne = [4, 6, 7];
const arrayTwo = [8, 1, 9];
// Example output:
// [12, 7, 16]
let arraySum = [];

// voor elk getal in array 1, 
for(let i = 0; i < arrayOne.length; i++){
    // neem de som van dat getal en het getal op dezelfde positie in array twee
    arraySum[i] = arrayOne[i] + arrayTwo[i];
}
// for in methode
for (const index in arrayOne) {
    arraySum[index] = arrayOne[index] + arrayTwo[index];
}
console.log(arraySum);