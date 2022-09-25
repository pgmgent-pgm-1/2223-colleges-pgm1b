/*
* Opgeloste oefening curriculum vitae
*/

const surName = "Lambrecht";// familienaam (string)
const firstName = "Jannes"; // voornaam (string)
const sex = "Male";// geslacht (string)
const age = 27; // leeftijd (number)
const married = true; // getrouwd (boolean)
const avatar =  `\u{27B3}`; // U+27B3 avatar (string unicode character bv. 🐝)
const quote = "'T leven is geen cremekerre!" // lijfspreuk (string)
const dutch = "***********"; // talenkennis (string - 100% betekent 10x*)
const english = "****"; 
const french = "***"; 

const cv = 
`My personal Curriculum Vitae
============================================================
Firstname:  ${firstName}
Surname:    ${surName}
Sex:        ${sex}
Age:        ${age}
Married:    ${married}
Avatar:     ${avatar}
Quote:      ${quote}
------------------------------------------------------------
Languages
------------------------------------------------------------
Dutch:      ${dutch}
English:    ${english}
French:     ${french}
============================================================
`
console.log(cv);