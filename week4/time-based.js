// setTimout 

// function sayHello(name) {
//     console.log("Hello " + name+ ", this script was loaded 5 second ago");
// }

// const myTimeout = setTimeout(sayHello, 5000, "Jannes");
// console.log("Ik kan direct afgedrukt worden.")
// clearTimeout(myTimeout);

// setInterval 

// const myInterval = setInterval(sayHello, 500, "Jannes");

// setTimeout(clearInterval, 2050, myInterval);



// let seconds = 0;
// startTicker = () => {
//   setInterval(ticker,1000);
// } 

// ticker = () => {
//     seconds++;
//   console.log(`${seconds}s`);
// }
// setTimeout(startTicker, 3000);


let output = "Oefeningen maken!";
startTicker = () => {
  setInterval(ticker,1000);
} 
let x = 0;
ticker = () => {
    x++;
    output+= " Joepie!";
    if(x == 20) {output = "Oefeningen maken!"; x=0;};
  console.log(`${output}`);
}
setTimeout(startTicker, 3000);

