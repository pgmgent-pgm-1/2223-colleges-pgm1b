const hexColorCode = prompt("Geef een kleur in (hex-code): ");
console.log(hexColorCode);
if(hexColorCode.length < 4 || hexColorCode.length > 7){
  console.warn("Geen correcte hex code")
}
else{
  document.body.style.backgroundColor =  hexColorCode;
}