
let arrayOne = ['Solomon', 'Rim', 'Lukas'];
arrayOne.contents = "Names";

for (let index = 0; index < arrayOne.length; index++) {
    const element = arrayOne[index];
    console.log(element);
}

for (const name of arrayOne) {
    console.log(name);
}

for (const key in arrayOne) {
    console.log(key)
}

arrayOne.forEach(element => {
    console.log(element);
});