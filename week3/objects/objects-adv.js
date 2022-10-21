// voorgedefinieerde objecten

const waarOfNiet = new Boolean(false);
console.log(typeof waarOfNiet);
const waarOfNiet2 = 0;
console.log(typeof waarOfNiet2);

const b1 = Boolean('true'); // true
const b2 = Boolean(0); // false
const b3 = Boolean(undefined); //false
const b4 = Boolean(NaN); // false
const b5 = Boolean(1); // true
const b6 = Boolean(null); // false

// number
const minValue = Number.MIN_VALUE; // 5e-324
const maxValue = Number.MAX_VALUE; // 1.7976931348623157e+308
const posInfinity = Number.POSITIVE_INFINITY; // Infinity


const n1 = Number('123') // 123
const n2 = Number('12.3') // 12.3
const n3 = Number('12.00') // 12
const n4 = Number('123e-1') // 12.3
const n5 = Number('') // 0
const n6 = Number(null) // 0
const n7 = Number('0x11') // 17
const n8 = Number('foo') // NaN
const n9 = Number('100a') // NaN
const n10 = Number('-Infinity') //-Infinity
const n11 = Number(true); // 1
const n12 = Number(Date.now()); // 1569314197567

const v = 12.678904;
const vNew1 = v.toFixed(3); // "12.679"
const vNew2 = Number(v).toFixed(2); // "12.68"
const vNew3 = new Number(v).toFixed(2); // "12.68"

// String 

const sPrim = 'john';
const sObj = new String(sPrim);

console.log(typeof sPrim); // "string"
console.log(typeof sObj);  // "object"

const sObjToPrim1 = String(sObj); // typeof sObjToPrim1 => "string"
const sObjToPrim2 = sObj.valueOf(); // typeof sObjToPrim2 => "string"

"sfsfs".charAt(1); // f
"sfsfs".includes("sfsfs") //true

const greeting = '      like graphics love code make cool shit           ';
console.log(greeting);
console.log(greeting.trim());

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'Fox'.toLowerCase();
const position = paragraph.toLowerCase().indexOf(searchTerm);
if(position !== -1) {
	console.log(`We have a first occurence for the search term ${searchTerm} at position ${position}`);
} else {
	console.log(`No results for search term ${searchTerm}`);
}

// Math


while(false){
    let output = '';
    for (let index = 0; index < Math.random()*20; index++) {
        output += "*";
        
    }
    console.log(output);

}

// date

const startOfJS = Date.parse('04 Dec 1995 00:12:00 GMT');
console.log(startOfJS)
console.log(Date.now())

const person = {
    firstName: 'Philippe',
    surName: 'De Pauw - Waterschoot',
    666: 'The Devil',
    "quote": 'Learning by doing',
    toString: function() {
        return `${ this.firstName } ${ this.surName }`;
    },
    completeTask(task) {
        return `Task "${task}" completed!`;
    }
};
console.log(person.toString()); // Output: Philippe De Pauw - Waterschoot
console.log(person.completeTask('Buy some food')); // Output: Task "By some food" completed

// constructor function

function Post(title, synopsis, body) {
    this.title = title;
    this.synopsis = synopsis;
    this.body = body;
  }

  const post1 = new Post('SpaceX assembleert en toont eerste Starship prototype', 'SpaceX heeft de beide helften van het Starship in elkaar gezet bij zijn fabriek in Texas. Het nieuwe generatie ruimtevaartuig moet onder meer gebruikt worden om naar Mars te reizen en is volledig herbruikbaar. Later op zaterdag komt SpaceX met een update over het programma.', '<p>Het Starship staat op een locatie van SpaceX in het zuiden van de Amerikaanse staat Texas, en werd door een grote kraan in elkaar gezet door twee helften op elkaar te plaatsen. Daarmee is er voor het eerst een volledig exemplaar van het Starship te zien. Het geheel, met de codenaam Mk1, is 50 meter hoog, aldus SpaceX-topman Elon Musk. Eerder <a href="https://tweakers.net/nieuws/155512/kleine-spacex-testraket-komt-kort-van-de-grond-tijdens-vrijevluchttest.html">testte</a> SpaceX al een kleinere versie, onder de naam Starhopper.</p>');

  console.log(typeof post1);

  delete post1.body;
  console.log(post1.body);

  const person1 = { firstName: 'Philippe' };
const person2 = { firstName: 'Philippe' };
console.log(person1 == person2); // Output: false
console.log(person1 === person2); // Output: false