function showHello(name) {
    console.log(`Hello ${name}!`);
}

let name = "Solomon";

showHello("Markha");
showHello(name);




// pass by value
function doubleSalary(s) {
    s *= 2;
  }
  let salary = 1999;
  console.log(`Your salary is € ${salary}.`);
  doubleSalary(salary);
  console.log(`Your salary is € ${salary}.`);

  const sq = function(number) { 
    return number * number;
  }

  console.log("sq(3)", sq(3));

  const fac = function factorial(n) {
    return n < 2 ? 1 : n * factorial(n - 1);
  };
  console.log("fac(3):", fac(3));
  
  
  
// arrow function
const calcSum = (x = 0,y = 0, ...numbers) => {
    let sum = x + y;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}

console.log("calcSum(3,4)",calcSum(3,4));
console.log("calcSum()",calcSum());

console.log("calcSum(3,4, 5,6,7,8)",calcSum(3,4, 5,6,7,8));

function concat(separator) {
    let str = "";
    for (let i = 1; i < arguments.length; i++) {
      str += arguments[i] + (i < arguments.length - 1 ? separator : "");
    }
    console.log(arguments);
    return str;
  }
  let result;
  result = concat(" | ", "Computer Systems", "Programming 1", "Web Design");
  console.log(result);
  result = concat(", ", "@Work 1", "Programming 2", "UI Design");
  
  console.log(result);
  
  const nameFunction = (parameter1, parameter2) =>
  {
    // function body
  }

  (parameter1) => {

  }

  const gasses = ["helium", "neon", "argon", "krypton", "xenon", "radon"];



const a1 = gasses.map(function(s) {
  return s.length;
});

const a2 = gasses.map((s) => s.length);

console.log("a1:", a1);
console.log("a2:", a2);


(function (){
    console.log("hello world")
})()