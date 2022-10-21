const fruit = ["apple", "pear", "pineapple"];
console.log("Initial array: " + fruit);
console.log(fruit.push("banana"));
console.log("Added banana: " + fruit);
console.log(fruit.unshift("strawberry"));
console.log("Added strawberrry: " + fruit);

fruit.splice(2, 0, "ananas", "orange");

console.log(fruit);

// verwijder elementen van index 1 tot index 3
fruit.splice(1,3);

console.log(fruit);

const numbers = [1,2,3];

// plak arrays aan elkaar
// slecht idee, probeer arrays uit 1 datatype te maken
let arrayTotal = fruit.concat(numbers);

console.log(arrayTotal);
let total; 
arrayTotal.forEach(element => {
    total += element + ", "
});

console.log(total);

const cars = [
    ['Volvo', 22, 18],
    ['BMW', 15, 13],
    ['Saab', 5, 2],
    ['Land Rover', 17, 15],
  ];
  
  cars.forEach(function(car) {
    console.log(`${car[0]}: ${car[1]} in stock and ${car[2]} sold.`)
  });
  

  const boodschap = ["Welkom", "Lukas", "je", "was", "bijna", "op", "tijd"];

  //console.log(boodschap.join(" - "));
// eerste element afdrukken
  //console.log(boodschap.shift());

  //console.log(boodschap);

  // laatste element verwijderen en terug geven
  
  //console.log(boodschap.pop());

  console.log(boodschap);

  console.log(boodschap.slice(0,2));

  const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // Output: ["Dec", "Feb", "Jan", "March"]


const numbers2 = [1, 4, 9];
const roots = numbers2.map(function (num) {
  return Math.sqrt(num);
});
console.log(roots); // Output: [1, 2, 3]

const numbers3 = [1, 4, 9];
const pows = numbers3.map((num, index) => ({ key: index, value: num**2 }));
console.log(pows);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const filteredWords = words.filter(word => word.length > 6);
console.log(result); //Output: ["exuberant", "destruction", "present"]


