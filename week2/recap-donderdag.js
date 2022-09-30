let output = "";
for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 5; column++) {
        output += "* ";
        console.log(output);
        console.log();
    }
    output += "\n"
}

console.log(output);


// while
let x = 0;
while (x<10) {
    x++;
    console.log(x); // 1 2 ... 10
}

do {
    console.log("Voer dit 1 keer uit");
} while (false);

while(false) { 
    // unreachable code detected
    console.log("")
}

let word = "bird";

console.log(word[0]);