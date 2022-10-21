// naming functions

const person = {
  name: "Jannes",
  lastName: "Lambrecht",
}

// get
function getFullName(person){
  return `${person.name} ${person.lastName}`
}

// set
function setFullName(person){
  person.lastName = "Larssen";
  person.name = "Erik";
}

console.log(getFullName(person));
setFullName(person);
console.log(getFullName(person));
// calc
function calcSum(x, y) {
  return x + y;
}
let available = true;
// check
function checkAvailable(){
  if(available) return true
  else return false
}

// create
function createPerson(name, lastName){
  return {
    name: name,
    lastName: lastName,
  }
}

const person2 = createPerson("Mo", "Ruyte")

// fetch
// bv. fetchRandomUsers

// show
function showMessage(){
  console.log("Hallo World");
}

showMessage();