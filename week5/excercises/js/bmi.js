/*

 * BMI indicator

 * ===================================================================

 * Course: Programming 1: Front-End Essentials

 * Week: 2

 * Developed by: Jannes Lambrecht

 * Last updated: 26/09/2022

 */


// Calculate the Body Mass Index (BMI)
const calculateBMI = (weight, length) => {
    return Math.floor(weight / (length * length));
}

const bmiToString = (bmi) => {
    // Log the BMI to the user
    let message = `Your bmi is ${bmi}. `;
    if (bmi <= 18.5) {
    message += "Je hebt ondergewicht.";
    } else if (bmi < 25) {
    message += "Je hebt het aanbevolen gewicht.";
    } else if (bmi <= 30) {
    message += "Je het overgewicht.";
    } else {
    message += "Je bent zwaarlijvig.";
    }
    return message;
} 

// Length of the person
const lengthPerson = parseFloat(window.prompt("Define your height (m)"));

// Weight of the person
const weightPerson = parseFloat(window.prompt("Define your weight (kg)"));

const bmi = calculateBMI(weightPerson, lengthPerson);
const message = bmiToString(bmi);

window.alert(message);
console.log(message);
