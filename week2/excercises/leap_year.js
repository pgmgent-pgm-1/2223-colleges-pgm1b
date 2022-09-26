const year = 2000 ;

let isLeapYear = false;

// korte versie
if((year % 4 == 0 && year % 100 != 00) || year % 400 == 00)
{
    isLeapYear = true;
}

console.log(`${year} is ${isLeapYear ? "een" : "geen"} schrikkeljaar.`)
// lange versie
if(year % 4 == 0){
    if(year % 100 != 0)
    {
        // door 4 te delen maar niet door 100
        isLeapYear = true;
    }
}
// door 400 te delen
if(year % 400 == 0){
    isLeapYear = true;
}

// uitvoer
if(isLeapYear){
    console.log(`${year} is een schrikkeljaar`);
}
else{
    console.log(`${year} is geen schrikkeljaar`);
}