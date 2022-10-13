// TIP: maak arrays aan van 1 datatype
// const array1 = [1, 2, 4, 5, 5, false, "Jannes", 3.545];

// array1.forEach(element => {
//     console.log(element + 5);
// });

const arrayNumbers = [1, 2, 4, 5, 5];

// tel bij elke element van de array 5 op
arrayNumbers.forEach(element => {
    console.log(element + 5);
});

// tel bij elke element van de array 5 op
arrayNumbers.map(element => {
    console.log(element + 5);
});

// elementen aanspreken in array
let namen = ["Eden", "Mario", "Liesbeth"];

// op het einde van de array toevoegen
namen.push("Justine");

// aan het begin van de array toevoegen
namen.unshift("Eerste naam");

// toevoegen op bepaalde index
namen.splice(2,0, "Yana");
console.log(namen);



// de eerste naam 
console.log(namen[0]);

// de laatste naam 
console.log(namen[namen.length-1]);

// lussen met arrays
for(let index = 0; index < namen.length; index++){
    console.log(namen[index]);
}

namen.extraEigenschap = "Dit is een lijst van namen";

for (const key in namen) {
    console.log(key, namen[key]);
}

for (const iterator of namen) {
    console.log(iterator)
}