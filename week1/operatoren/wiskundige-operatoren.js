/* 
* Demo wiskundige operatoren
*/

// unaire operatoren
// let getal1 = 0;

// console.log(++getal1);
// console.log(getal1++);

// console.log(getal1);

// // binaire operatoren

// const getal2 = 4;
// const getal3 = 5;

// const som = getal2 + getal3;
// const verschil = getal2 - getal3;
// const deling = getal2 / getal3;
// const vermenigvuldiging = getal2 * getal3;
// const macht = getal2 ** getal3;

// const modulo = getal2 % getal3;

// // negatie

// const neg = -modulo;

// Toewijzingsoperatoren

// let getal = 5;
// let getal2 = 2;
// getal2 *= getal;

// logische operatoren

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && false); // false

// console.log(true || false); // true

// console.log(!false); // true
// console.log(!true); // false

// console.log(false || "PGM"); // returns 'PGM'

// ternaire operatoren
// let percentage = 98;
// console.log((percentage >= 50) ? "Geslaagd" : "Niet geslaagd");

// if(percentage >= 50) {
//     console.log("Geslaagd");
// }
// else {
//     console.log("Niet geslaagd");
// }

// delete

// x = 67;
// delete x; // returns true
// person = {
//     firstName: 'Philippe',
//     surName: 'De Pauw',
//     age: '999'
// }
// delete person.age; // returns true
// delete person; // returns true
// delete Math.PI; // returns false
// let y = 89;
// delete y; // retrurns false

// typeof

// let nummer = "zevenenzestig";
// nummer = 6;
// console.log(typeof nummer);


// relationele operators

// const daysOfWeek = [
//     "sunday",
//     "monday",
//     "tuesday",
//     "wednesday",
//     "thursday",
//     "friday",
//     "saturday",
//   ];

//   console.log(daysOfWeek[0])
  
//   console.log(0 in daysOfWeek); // returns true
//   console.log("monday" in daysOfWeek); // returns false
//   console.log("length" in daysOfWeek); // returns true because length is a property of a string
//   const person = { firstName: "Philippe" };
//   console.log("firstName" in person); // returns true;
//   console.log("lastName" in person);
  
// comma operator

let d, e, f;
d = ((e = 5), (f = 8));
console.log(d); // Output: 8
console.log("e", e, "f", f);
