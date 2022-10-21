const lineupElement = document.getElementById("thisspecificlineup");
// letterlijk weergeven van text
// lineupElement.innerText = "Dit is text <p>Dit zou een paragraaf kunnen zijn</p>";
// parsen van HTML en weergeven
// lineupElement.innerHTML = "Dit is text <p>Dit zou een paragraaf kunnen zijn</p>";
lineupElement.style.background = "#FF00FF";

const pElements = document.getElementsByTagName('p');

for(let i = 0; i < pElements.length; i++){
    console.log(pElements.item(i));

}

const articleElements = document.querySelectorAll('#articles .article');
if ( articleElements.length > 0 ) {
  articleElements.forEach( (elem) => {
    console.log(elem);  
  });
} else {
  console.log('No articles found!');
}


// MANIPULATIE

const concertElement = document.createElement('article');

// wordt al gedeclareerd bovenaan deze code
//const lineupElement = document.getElementById('thisspecificlineup');
lineupElement.appendChild(concertElement);

// elementen verwijderen
// lineupElement.remove();

lineupElement.setAttribute("attribute", "value");
lineupElement.setAttribute("data-src", "https://youtube.com");
console.log(lineupElement.getAttribute("data-src"));


// attribuut met dotnotatie
lineupElement.style = "color:green";

lineupElement.classList.add("active");

lineupElement.innerHTML += "Dit is text <p>Dit zou een paragraaf kunnen zijn</p>";
