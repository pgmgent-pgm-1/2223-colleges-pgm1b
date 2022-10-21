// for
// for(let i = 1; i < 10; i++){
//     console.log(i);
// }
// reverse for lus
const arrOne = [1,4,5,3434,343];
for (let index = arrOne.length - 1; index >= 0; index--) {
    const element = arrOne[index];
    console.log(element);
    
}
// for in
// extra eigenschap toevoegen aan array
arrOne.amountOfNumbers = arrOne.length;
for (const key in arrOne) {
    console.log(key);
}
// for of
for (const iterator of arrOne) {
    console.log(iterator);
}
// foreach
arrOne.forEach((element, index) => {
    console.log(index, element);
});
// while
let squareM = 30;
let months = 0;
while(squareM*2 < 1000) {
    squareM *= 2;
    months++;
}
console.log(`Na ${months} maand gaat de plant ${squareM} m2 omvatten`);
// do while 
do {
    
} while (condition);