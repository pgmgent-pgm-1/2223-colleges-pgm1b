
// numbers.map((element) => console.log(element));
// let numbersSquare = numbers.map((element) => element * element);
// let numbersSquare =  numbers.map(function(element, index){
    // console.log(index);
//     return element * element;
// });
// console.log(numbersSquare);

const numbers1 = [1, 4, 9];
const pows = numbers1.map(function (num, index) {
  return { key: index, value: num**2};
});
console.log(pows);

