/* 
* Converts seconds to years, hours, minutes and seconds
* Proudly coded by Jannes Lambrecht
*/
const secondsToConvert = 99876;
const secondsInMinute = 60;
const secondsInHour = secondsInMinute * 60;
const secondsInDay = secondsInHour * 24;
const secondsInYear = secondsInDay * 365;

let secondsLeft = secondsToConvert;

// calculate number of years
const amountOfYears = Math.floor(secondsLeft / secondsInYear);
//  
secondsLeft -= secondsInYear * amountOfYears;

// calculate number of days
const amountOfDays = Math.floor(secondsLeft / secondsInDay);
// subtract seconds in calculated days
secondsLeft -= secondsInDay * amountOfDays;


const amountOfHours = Math.floor(secondsLeft / secondsInHour);
// subtract seconds in calculated days
secondsLeft -= secondsInHour * amountOfHours;
const amountOfMinutes = Math.floor(secondsLeft / secondsInMinute);
// subtract seconds in calculated days
secondsLeft -= secondsInMinute * amountOfMinutes;

const message = `=====================================================================
Amount of seconds to convert = ${secondsToConvert}
=====================================================================
${secondsToConvert} seconds = ${amountOfYears} years ${amountOfDays} days ${amountOfHours} hours ${amountOfMinutes} minutes ${secondsLeft} second${secondsLeft > 1 ? "s" : ""}
=====================================================================`;

console.log(message);