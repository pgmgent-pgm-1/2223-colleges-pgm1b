const person = {
    name: "Jente",
    surname: "Coussement",
    class: "1PGM-b",
    score: 17,
    attending: true,
}
person.hobby = "onderwaterschaken";
let hobby = person.hobby;

for (const key in person) {
    console.log(key, ":", person[key])
}

// methode
// let person2 = new Object();
// person2.name = "Kyandro";

