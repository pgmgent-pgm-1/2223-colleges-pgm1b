function calcSum(x, y) {
    // console.log(x+y);
    return x + y;  
}

let sum = calcSum(5, 6);
console.log(sum);

const personA = "John Doe";

function swap(person) {
  person = "Jane Doe";
  return person;
}

const personB = swap(personA);
console.log("personA:", personA);
console.log("personB:", personB);



function doubleSalary(sal) {
    sal *= 2;
  }
  // sal bestaat niet buiten de functie
  // console.log(sal);
  let salary = 1999;
  console.log(`Your salary is € ${salary}.`);
  
  doubleSalary(salary);
  console.log(`Your salary is € ${salary}.`);

  function doubleSalaryForPerson(p) {
    p.salary *= 2;
  }
  
  let person = {
    firstName: "Phil",
    salary: 1999,
  };
  console.log(`Your salary is € ${person.salary}.`);
  
  doubleSalaryForPerson(person);
  console.log(`Your salary is € ${person.salary}.`);
  
  
