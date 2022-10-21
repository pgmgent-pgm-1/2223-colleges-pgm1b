const weight = window.prompt("Geef je gewicht in")
const height = window.prompt("Geef je grootte in (im m")

const calculateBMI = (weight, length) => {
  const bmi = Math.floor(weight / (length * length));
  return bmi;
};

const bmiToString = (bmi) => {
  let message = `Your bmi is ${bmi}`;

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
};


const bmi = calculateBMI(weight,height);
window.alert(bmiToString(bmi));