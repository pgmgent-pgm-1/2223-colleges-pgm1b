// for lus
// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }
// let klasNamen = ["Ibrahim", "Rasul", "Markha"];
// for (let index = 0; index < klasNamen.length; index++) {
//     const element = klasNamen[index];
//     console.log(element);
// }

const rows = 10;
const cols = 10;
let output = "";

for (let row = 0; row < rows; row++) {
  
    for (let col = 0; col < cols; col++) {
    output += "* "; 
    // output: * * * * * * * * * * \n * * * * * * * * * * 
  }
  output += "\n";
  
}

console.log(output);


output = "";

for (let i = 0; i < rows * cols; i++) {

  output += "* ";

  if ((i + 1) % cols === 0) {
    output += "\n";
  }

}



console.log(output);






// while-lus
// let x = 0;
// while (x <= 10) {
//     // x = 11
//     x++;
// }
// // x = 11
// console.log(x);

// slechte code
// while (true) {
//     console.log("Oneindige loop");
// }

// while(false){
//     console.log("Test");
// }

// let isPlaying = true;
// let level = 0;
// while (isPlaying) {
//     console.log("Game is running, current level " + level);
//     level++;
//     if(level === 10){
//         isPlaying = false;
//     }
// }

// console.log("Game is finished");

// do while
do {
    console.log("Dit is het effect van een do while");
} while (1 < 0);

while (1 < 0) {
    console.log("Dit is het effect van een while lus");
}

// let password = "1234";
// do {
//     // inlezen wachtwoord
// } while (password != ingegevenPassword);


// for in
let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  
  ];

  console.log(daysOfWeek[0]);
  
  daysOfWeek.info = "Represents the days of the week";

  for (const key in daysOfWeek) {
    console.log(key);
    }
  

// for of

for (const iterator of daysOfWeek) {
    console.log(iterator)
}

for (let index = 0; index < 10; index++) {
    break;
    console.log("Dit gaat nooit gebeuren.")    
}

