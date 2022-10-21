function getFullName(firstName, lastName) {
  firstName = firstName[0] + '.';
  return `${firstName} ${lastName}`;
}

console.log(getFullName("Jannes", "Lambrecht"));

const getFullName2 = function(){
    firstName = firstName[0] + '.';
    return `${firstName} ${lastName}`;
}

const fac = function factorial(n) {
    return n < 2 ? 1 : n * factorial(n - 1);
  };
  
  console.log("fac(3):", fac(3));
  
  

