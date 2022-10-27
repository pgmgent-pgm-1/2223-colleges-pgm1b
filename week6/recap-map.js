// object aanmaken
const students = [
  {
    id: 1,
    fullName: {
      firstName: 'Jannes',
      lastName: 'Lambrecht'
    },
    age: 28,
    hobbies: [
      'programmeren',
      'nerdlab',
      'sporten'
    ]
  },
  {
    id: 1,
    fullName: {
      firstName: 'Jan',
      lastName: 'Echt'
    },
    age: 28,
    hobbies: [
      'programmeren',
      'nerdlab',
      'sporten'
    ]
  }
];

const getStringForName = (name) =>{
  return `${name.firstName} ${name.lastName}`;
}

const getStringForHobbies = (hobbies) =>{
  return hobbies.join();
}


const printToConsole = (students) =>
{
  // index for demonstration purposes
  students.map((student, index) => {
    console.log( `
    ${index} 
    ID: ${student.id}
    Full name: ${getStringForName(student.fullName)}
    Age: ${student.age}
    Hobbies: ${getStringForHobbies(student.hobbies)}
    `)
  });
}
// methode 2
const printToConsoleWithReturn = (students) =>
{
  return students.map((student) => {
    console.log( `
    ID: ${student.id}
    Full name: ${getStringForName(student.fullName)}
    Age: ${student.age}
    Hobbies: ${getStringForHobbies(student.hobbies)}
    `)
  }).join("");
}
printToConsole(students);
console.log(printToConsoleWithReturn(students));