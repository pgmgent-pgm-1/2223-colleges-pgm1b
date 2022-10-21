// let person = new Object();
// person.firstName = "Jannes";
// person.lastName = "Lambrecht";
// person.age = 27;

// console.log(person.age);

let person = {
    firstName: "Jannes",
    lastName: "Lambrecht",
    age: 27, 
    // "hobbies enzo": "weetniet"
}

for (const key in person) {
    console.log(person[key]);
}

console.log(Date.now());

function Post(title, synopsis, body) {
    this.title = title;
    this.synopsis = synopsis;
    this.body = body;
  }
  
  const post1 = new Post('SpaceX assembleert en toont eerste Starship prototype', 'SpaceX heeft de beide helften van het Starship in elkaar gezet bij zijn fabriek in Texas. Het nieuwe generatie ruimtevaartuig moet onder meer gebruikt worden om naar Mars te reizen en is volledig herbruikbaar. Later op zaterdag komt SpaceX met een update over het programma.', '<p>Het Starship staat op een locatie van SpaceX in het zuiden van de Amerikaanse staat Texas, en werd door een grote kraan in elkaar gezet door twee helften op elkaar te plaatsen. Daarmee is er voor het eerst een volledig exemplaar van het Starship te zien. Het geheel, met de codenaam Mk1, is 50 meter hoog, aldus SpaceX-topman Elon Musk. Eerder <a href="https://tweakers.net/nieuws/155512/kleine-spacex-testraket-komt-kort-van-de-grond-tijdens-vrijevluchttest.html">testte</a> SpaceX al een kleinere versie, onder de naam Starhopper.</p>');

