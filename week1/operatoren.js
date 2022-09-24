let number1 = 3;

// unair
number1++;

// binair
let number3 = number1 + 7;

// ternair
console.log(true ? "Waar" : "Niet waar");

console.log(4 ** 2);
console.log(4 ** (1/2));
console.log(Math.sqrt(4));

// logische operatoren

// console.log(false || true);
// console.log(false && true);
let leeftijd = 20;
let isGents = true;
if((leeftijd > 18 && isGents)){
    console.log("Welkom in de club (met 50 Cent");
}
else if(!(leeftijd < 18)){
    console.log("Welkom in de club (met Lil Kleine)!");
}
else {
    console.log("Je bent niet welkom.")
}


// ternaire operator
let isPlaying = false;
const gameState = isPlaying ? "You are playing." : "The game is finished.";
console.log(gameState); // Output: "The game is finished."

// let code = Math.floor(Math.random() * 10);

// for (let index = 0; index < 10; index++) {
//     if(index = code){
//         console.log("De code was " + index );
//         break;
//     }
    
// }


