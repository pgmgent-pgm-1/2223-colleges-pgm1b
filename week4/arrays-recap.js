/**
 * Arrays herhaling
 * 
 */

const names = ["Evelien", "Mathieu", "Rasul", "Yannis"];

// ophalen van 1 element

console.log(names[0]);

// laatste element ophalen

console.log(names[names.length-1]);

names.forEach(name => {
    console.log(name)
});

for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log(element)
}
// aanpassen element
names[0] = "Eveline";

const nameEveline = names[0]; // Eveline

// names[99] = "Philippe";

console.log(names);

// voeg toe op het einde
let arrLength = names.push("Philippe");
console.log(names);
console.log(arrLength);

arrLength = names.unshift("Philippe");
console.log(names);

// verwijderen van elementen -> pop, shift, splice

const removedElement = names.pop();
console.log(names);
console.log(removedElement);

const removedElementShift = names.shift();
console.log(names);
console.log(removedElementShift);

// splice

names.splice(2,0, "Philippe");
console.log(names);

names.splice(3,2, "Filip");
console.log(names);

// names.splice(-2,2);
// console.log(names);

for (const key in names) {
    console.log(names[key]);
}

for (const naam of names) {
    console.log(naam);
}

console.log(names.join(""))


