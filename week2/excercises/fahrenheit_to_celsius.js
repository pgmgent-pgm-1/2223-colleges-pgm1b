const convertFahrenheitToCelsius = (tempFahrenheit) => {
    tempCelcius = ((tempFahrenheit - 32) / 1.8).toFixed(1);
    return tempCelcius;
}
if(-17.8 == convertFahrenheitToCelsius(0)){
    console.log("Test1 geslaagd");
}
console.log(`${71} degrees fahrenheit is ${convertFahrenheitToCelsius(71)} degrees celsius`);
console.log(`${0} degrees fahrenheit is ${convertFahrenheitToCelsius(0)} degrees celsius`);


// druk boodschap
const drukBoodschapNaarConsole = (boodschap) => {
    console.log(boodschap);
}