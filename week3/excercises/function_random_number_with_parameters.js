// oplossing

let generateRandomNumber = (min, max) =>
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// testmethode
let arrAnswers = [];
for (let index = 0; index < 100; index++) {
    arrAnswers[index] = generateRandomNumber(50, 100);  
}
console.log(arrAnswers);
