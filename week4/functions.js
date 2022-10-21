const nameFunction = (parameter1, parameter2) => {
    // function body
    // do iets met parameter 1 en 2
    console.log(parameter1, parameter2);
}

// naamgeving is belangrijk
const printToConsole = (parameter1, parameter2 = "World!") => {
    // function body
    // do iets met parameter 1 en 2
    console.log(parameter1, parameter2);
}

// aanroepen van functie
printToConsole("Hello", "Jannes")

// function error(){
//     return error();
// }

// error();

const calcSomethingVeryDifficult = () =>
{
    const calcSomethingVerySimple = () => {

    }
    const calcSomethingVerySimple1 = () => {
        
    }
    const calcSomethingVerySimple2 = () => {
        
    }

    return calcSomethingVerySimple() + calcSomethingVerySimple1 + calcSomethingVerySimple2;
}

