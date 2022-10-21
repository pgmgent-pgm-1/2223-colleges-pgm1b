function addition(x, y){
  return x + y;
}

console.log(addition(5, 6));


const personA = "John Doe";
function swap(person){
  person = "Jane Doe";
  return person
}

const personB = swap(personA);

console.log(`personA: ${personA}`);
console.log(`personB: ${personB}`);

// pass by value
function doubleSalary(sal){
  sal *= 2;
}

let salary = 1999;

console.log(`Your salary is ${salary}`);

doubleSalary(salary);

console.log(`Your salary is ${salary}`);

// pass by reference

function doubleSalaryForPerson(person){
  person.salary *= 2;
}

let person = {
  firstName : "Jannes",
  salary : 1999,
}

console.log(`Your salary is $ ${person.salary}`);

doubleSalaryForPerson(person)

console.log(`Your salary is $ ${person.salary}`);

