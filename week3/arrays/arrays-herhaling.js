/**
 * Arrays herhaling
 */

// index        0           1
const namen = ["Jannes", "Nick" ];

console.log(namen[0])

namen[0] = "Jannis";
namen[2] = "Tom";
// array resetten
// namen.length = 0;
// index dat nog niet is aangemaakt
console.log(namen[3]);
// lus 1
for (let index = 0; index < namen.length; index++) {
    const element = namen[index];
    console.log(element);
}

for (const key in namen) {
    console.log(key);
}

for (const naam of namen) {
    console.log(naam)
}

namen.forEach((element) => {
    console.log(element);
});