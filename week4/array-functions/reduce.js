let numbers = [1, 2, 3, 4, 5];

let total = numbers.reduce(
    function(total, currentValue) {
    return total += currentValue;
});

let words = ["Hello","world", "again"];
let output = words.reduce((message, currentWord) => {
    return message += " " + currentWord;
});

console.log(output);

