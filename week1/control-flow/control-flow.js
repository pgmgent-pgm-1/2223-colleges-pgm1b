// if else
if (!true) {
    console.log("Dit is een leugen");
} else  {
    console.log("Dit klopt");
}

let age = 15;
if (age < 18) {
    console.log("Je bent minderjarig")
} else if(age < 25) {
    console.log("Je bent jonger dan 25.")
} else {
    console.log("Je bent ouder dan 25.")
}

// switch
let dayOfWeek = 5;
let dayString = "";
switch (dayOfWeek) {
    case 1:
        dayString = "monday"
        break;
    // ...
    case 5:
        dayString = "friday"
        break;
    default:
        dayString = "This day does not exist."
        break;
}
console.log(dayString);

