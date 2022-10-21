const icecreamHeader = document.getElementById('icecream-header');
const icecreamTastes = document.getElementById('possible-tastes');
const headerElement = document.getElementsByTagName('header')[0];
const tastes = ['strawberry', 'banana', 'chocolate']

icecreamHeader.innerText = "Ice cream and you scream";


let tasteHTML = ""
for(taste of tastes){
    tasteHTML += `<li>${taste}</li>`;
}
icecreamTastes.innerHTML = `
<ul>
${
  tasteHTML
}
</ul>
`;

icecreamTastes.style.background = "red";
icecreamTastes.style.color = "white";

const createSubtitle = document.createElement('h2');
createSubtitle.innerText = "Everything is better when it is cold";
headerElement.appendChild(createSubtitle);

// headerElement.textContent = "Hallo";

headerElement.id = "headerElement-id";
headerElement.style = "value";
headerElement['id'] = "value";

// classlist aanpassen
headerElement.classList.add("style1");
headerElement.classList.remove("style1");
headerElement.classList.add("style2");
headerElement.classList.remove("style2");
console.log(headerElement.classList);

