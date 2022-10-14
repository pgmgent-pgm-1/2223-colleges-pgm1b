const person = {
    firstName: "Jannes",
    lastName: "Lambrecht",
    age: 45,
    toString: function() {
        const fullName = `${ this.firstName } ${ this.lastName }`;
        return fullName;
      },
    walk: function(){
        console.log(`${ this.firstName } is walking`)
    },
    get getAge() { 
        return this.age;
      },
      set setAge(x) {
        this.age = x;
      }
}

person.setAge = 27;
console.log(person.getAge)
// // opvragen eigenschap
// console.log("Age:", person.age);

// person.hairColor = "black";
// console.log("Haircolor: ", person.hairColor );

// for (const key in person) {
//         const value = person[key];
//         console.log(key, value)
// }

// console.log(person.toString());

// person.walk();

// const car = {
//     color: 'red',
//     wheels: 4,
//     engine: {
//       cylinders: 6,
//       size: 3.6,
//       color: "matte",
// 			toString: function() {
// 				return this.color;
// 			}
//     },
// };
// console.log(car.engine.toString()); // Output: undefined

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// const person1 = new Person("fdsfs", 45);
// const person2 = new Person("fdsfs");
